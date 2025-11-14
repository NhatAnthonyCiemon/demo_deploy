# Stage 1: Builder
FROM python:3.11-slim AS builder

WORKDIR /app

# Install uv package manager
RUN pip install --no-cache-dir uv

# Copy pyproject.toml only to install dependencies
COPY pyproject.toml ./
RUN uv install

# Copy source code
COPY ./ai_service ./ai_service

# Stage 2: Production image
FROM python:3.11-slim

WORKDIR /app

# Install uv again (needed for run command)
RUN pip install --no-cache-dir uv

# Copy built project from builder
COPY --from=builder /app /app

# Expose port
EXPOSE 8000

# Run FastAPI using uv
CMD ["uv", "run", "start"]
