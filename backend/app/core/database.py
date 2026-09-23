from sqlalchemy import create_engine, inspect, text
from sqlalchemy.orm import declarative_base, sessionmaker
from .config import settings

# For SQLite, check_same_thread=False is required
connect_args = {"check_same_thread": False} if "sqlite" in settings.DATABASE_URL else {}

engine = create_engine(settings.DATABASE_URL, connect_args=connect_args)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Additive, non-destructive column upgrade for existing SQLite databases.
# There's no Alembic in this project — Base.metadata.create_all() only
# creates missing tables, it never alters existing ones, so newly added
# columns (e.g. Lead.email_notified) would otherwise be silently missing on
# a pre-existing trevia.db file. This only ever adds columns, never drops
# or renames data.
def run_safe_schema_upgrade() -> None:
    inspector = inspect(engine)
    if "leads" not in inspector.get_table_names():
        return

    existing_columns = {col["name"] for col in inspector.get_columns("leads")}
    upgrades = {
        "email_notified": "ALTER TABLE leads ADD COLUMN email_notified BOOLEAN DEFAULT 0",
        "updated_at": "ALTER TABLE leads ADD COLUMN updated_at DATETIME",
    }

    with engine.begin() as connection:
        for column_name, ddl in upgrades.items():
            if column_name not in existing_columns:
                connection.execute(text(ddl))
