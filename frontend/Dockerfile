# ─── Aşama 1: BUILD ───────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Vite ile production build al
RUN npm run build
# Sonuç: /app/dist klasörü oluşur

# ─── Aşama 2: SERVE ───────────────────────────────────────
FROM nginx:stable-alpine

# Build çıktısını Nginx'in servis ettiği klasöre kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

# Özel Nginx konfigürasyonunu ekle (SPA routing için gerekli)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
