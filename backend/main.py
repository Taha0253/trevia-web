import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.database import Base, engine, run_safe_schema_upgrade
from app.api.endpoints import router as api_router

# Without this, app loggers (e.g. "trevia.email") have no attached handler
# and SMTP failures never reach the console — never log SMTP_PASSWORD here.
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

# Initialize database tables, then apply any additive column upgrades
# (e.g. Lead.email_notified) for pre-existing SQLite databases.
Base.metadata.create_all(bind=engine)
run_safe_schema_upgrade()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description="Backend API for Trevia EV Charging Infrastructure Platform"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API endpoints
app.include_router(api_router, prefix=settings.API_PREFIX)

@app.get("/")
def root():
    return {
        "message": "Welcome to Trevia EV Charging Infrastructure Platform API",
        "docs": "/docs",
        "status": "operational"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
