# Dockerfile (at project root)
FROM node:18-alpine AS builder
WORKDIR /app

# 1. Copy only lockfiles & package manifest
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install

# 2. Copy source (now excluding host node_modules)
COPY . .

# 3. Build the PWA
RUN pnpm run build:root

# 4. Ship with Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
