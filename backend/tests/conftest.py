import os
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

# Point the app at an isolated SQLite file (never the real trevia.db) and
# disable SMTP by default so tests never attempt a real network send unless
# a test explicitly monkeypatches send_notification_email.
_TEST_DB_PATH = BACKEND_ROOT / "tests" / "test_trevia.db"
os.environ.setdefault("DATABASE_URL", f"sqlite:///{_TEST_DB_PATH.as_posix()}")
os.environ.setdefault("SMTP_HOST", "")
os.environ.setdefault("SMTP_USERNAME", "")
os.environ.setdefault("SMTP_PASSWORD", "")
os.environ.setdefault("ALLOWED_ORIGINS", "http://testserver")
