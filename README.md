# 🛒 E-Commerce Projesi

React + Node.js + PostgreSQL ile geliştirilmiş full-stack bir e-ticaret uygulaması.

---

## 🗂️ Proje Yapısı

```
e-comm/
├── backend/          → Express + PostgreSQL API sunucusu
├── frontend/         → React (Vite) istemci uygulaması
├── docker-compose.yml
├── .env.example      → Ortam değişkenleri şablonu
└── README.md
```

---

## 🐳 Docker ile Çalıştırma (Önerilen)

### Gereksinimler

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Adımlar

```bash
# 1. Repo'yu klonla
git clone <repo-url>
cd e-comm

# 2. Ortam değişkenlerini oluştur
cp .env.example .env
# .env dosyasını açıp POSTGRES_PASSWORD ve JWT_SECRET değerlerini değiştir

# 3. Container'ları build et ve başlat
docker compose up --build -d

# 4. Veritabanı tablolarını ve örnek verileri oluştur
docker exec ecomm_backend node migrations/migrate.js
```

### Erişim

| Servis | URL |
|--------|-----|
| 🌐 Frontend | http://localhost |
| ⚙️ Backend API | http://localhost:5001 |

### Faydalı Docker Komutları

```bash
# Logları takip et
docker compose logs -f

# Durdur
docker compose down

# Durdur + veritabanını sıfırla
docker compose down -v
```

---

## 💻 Yerel Geliştirme (Docker'sız)

### Gereksinimler

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+

### Backend

```bash
cd backend
npm install

# .env dosyasını oluştur
cp .env.example .env
# DATABASE_URL, PORT ve JWT_SECRET değerlerini doldur

# Veritabanı tablolarını oluştur
npm run migrate

# Geliştirme sunucusunu başlat
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Erişim

| Servis | URL |
|--------|-----|
| 🌐 Frontend | http://localhost:5173 |
| ⚙️ Backend API | http://localhost:5001/api |

---

## ⚙️ Ortam Değişkenleri

Projenin kök dizinindeki tek `.env` dosyası hem Docker hem de yerel geliştirme için kullanılır.

```env
# Veritabanı
POSTGRES_USER=postgres
POSTGRES_PASSWORD=guclu_sifre_yaz
POSTGRES_DB=ecomm

# Backend
PORT=5001
DATABASE_URL=postgresql://postgres:guclu_sifre_yaz@localhost:5432/ecomm

# Güvenlik
JWT_SECRET=uzun_ve_rastgele_bir_kelime_yaz
```

> **Not:** Yerel geliştirmede `DATABASE_URL`'deki host `localhost`, Docker'da bu değer otomatik olarak `db` container'ını gösterir (docker-compose bunu halleder).

---

## 📡 API Endpoint'leri

| Method | Endpoint | Açıklama | Token Gerekli |
|--------|----------|----------|---------------|
| POST | `/api/auth/register` | Yeni kullanıcı kaydı | ❌ |
| POST | `/api/auth/login` | Giriş yap, JWT döner | ❌ |
| GET | `/api/products` | Tüm ürünleri listele | ❌ |
| POST | `/api/cart/add` | Sepete ürün ekle | ✅ |

---

## 🛠️ Teknoloji Yığını

| Katman | Teknoloji |
|--------|-----------|
| Frontend | React 19, Vite, React Router, Axios |
| Backend | Node.js, Express 5, JWT, bcrypt |
| Veritabanı | PostgreSQL 16 |
| Container | Docker, Docker Compose, Nginx |
