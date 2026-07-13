# Node.js'in resmi küçük (alpine) imajını kullan
FROM node:20-alpine

# Container içinde çalışma dizinini ayarla
WORKDIR /app

# Önce sadece package dosyalarını kopyala (cache optimizasyonu)
COPY package*.json ./

# Bağımlılıkları kur (production-only)
RUN npm install --omit=dev

# Kaynak kodun tamamını kopyala
COPY . .

# Backend'in dinleyeceği portu belirt (dokümantasyon amaçlı)
EXPOSE 5000

# Uygulamayı başlat (nodemon değil, node kullan!)
CMD ["node", "server.js"]
