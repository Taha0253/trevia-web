import time
from collections import defaultdict, deque
from threading import Lock

from fastapi import HTTPException, Request, status

from .config import settings

_lock = Lock()
_hits: dict = defaultdict(deque)


def _client_ip(request: Request) -> str:
    if request.client:
        return request.client.host
    return "unknown"


def enforce_rate_limit(request: Request) -> None:
    """
    Simple in-memory sliding-window rate limiter for form submission
    endpoints. Single-process only (no Redis/external store) — matches the
    project's current deployment; sufficient to blunt basic repeated-submit
    abuse without adding new infrastructure.
    """
    key = _client_ip(request)
    now = time.monotonic()
    window = settings.RATE_LIMIT_WINDOW_SECONDS

    with _lock:
        hits = _hits[key]
        while hits and now - hits[0] > window:
            hits.popleft()

        if len(hits) >= settings.RATE_LIMIT_MAX_REQUESTS:
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many submissions. Please try again shortly.",
            )

        hits.append(now)
