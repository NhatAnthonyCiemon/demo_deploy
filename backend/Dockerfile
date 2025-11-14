# Builder
FROM oven/bun:latest AS builder
WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

# Production
FROM oven/bun:latest
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 8080
CMD ["bun", "run", "start"]
