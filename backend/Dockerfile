# Pinned to a digest as well as a tag: a tag can be re-pointed, a digest
# cannot. Dependabot (docker ecosystem) bumps the digest when the tag moves.
FROM python:3.12-slim@sha256:a6e34c598f2467ed0e9a8d349809fcd8b5c603269512df273a0bb1784edc11b1

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# System deps: build tools for asyncpg/bcrypt, curl for healthcheck
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential curl \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

EXPOSE 8000

# entrypoint runs migrations + seed, then starts uvicorn
COPY docker-entrypoint.sh /docker-entrypoint.sh
# Strip CR characters so the script runs even when checked out on Windows (CRLF).
RUN sed -i 's/\r$//' /docker-entrypoint.sh && chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
# Bind the port the platform assigns. Managed hosts (Render, Railway, Fly) inject
# $PORT and route traffic there; a hardcoded port makes the health check fail.
# Falls back to 8000 for docker-compose and local runs.
CMD ["sh", "-c", "exec uvicorn app.main:app --host 0.0.0.0 --port ${PORT:-8000}"]
