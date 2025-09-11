# ---- Build stage ----
    FROM node:22-alpine AS builder
    WORKDIR /app
    
    # Install deps
    COPY package*.json ./
    RUN npm ci || npm install
    
    # Build
    COPY . .
    RUN npm run local:build
    
    # ---- Runtime stage ----
    FROM nginx:1.27-alpine AS runtime
    # SPA routing fallback
    COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
    
    # Static assets
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # Runtime env injection script (env.template.js -> env.js)
    COPY docker/entrypoint.sh /docker-entrypoint.d/10-envsubst.sh
    RUN chmod +x /docker-entrypoint.d/10-envsubst.sh
    
    EXPOSE 80