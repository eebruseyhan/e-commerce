# 🛒 E-Commerce Projesi

React + Node.js + PostgreSQL ile geliştirilmiş full-stack bir e-ticaret uygulaması.

---

## 🗂️ Proje Yapısı

```
e-comm/
├── backend/     → Express + PostgreSQL API sunucusu
└── frontend/    → React (Vite) istemci uygulaması
```

---

## ⚙️ Gereksinimler

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) v14+
- npm v9+

---

## 🗄️ Veritabanı Kurulumu

PostgreSQL'de aşağıdaki tabloları oluşturun:

```sql
CREATE TABLE app_users (
    user_id          SERIAL PRIMARY KEY,
    user_fullname    VARCHAR(100) NOT NULL,
    user_mail        VARCHAR(100) UNIQUE NOT NULL,
    user_hashpassword TEXT NOT NULL
);

CREATE TABLE products (
    id           SERIAL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price        NUMERIC(10, 2) NOT NULL
);
```

---

## 🔧 Backend Kurulumu

```bash
cd backend
npm install
```

### Ortam Değişkenleri

`backend/.env` dosyası oluşturun:

```env
PORT=5000
DATABASE_URL=postgresql://kullanici:sifre@localhost:5432/veritabani_adi
JWT_SECRET=gizli_anahtar_buraya
```

### Çalıştırma

```bash
# Geliştirme (nodemon ile otomatik yeniden başlama)
npm run dev

# Prodüksiyon
npm run start
```

### Backend Bağımlılıkları

| Paket | Açıklama |
|---|---|
| `express` | HTTP sunucusu ve routing |
| `cors` | Cross-origin isteklere izin verir |
| `pg` | PostgreSQL veritabanı bağlantısı |
| `bcrypt` | Şifre hashleme |
| `jsonwebtoken` | JWT token oluşturma ve doğrulama |
| `dotenv` | `.env` dosyasından ortam değişkeni okuma |
| `nodemon` *(dev)* | Dosya değişikliklerinde sunucuyu otomatik yeniden başlatır |

---

## 🎨 Frontend Kurulumu

```bash
cd frontend
npm install
```

### Çalıştırma

```bash
# Geliştirme sunucusu
npm run dev

# Prodüksiyon build
npm run build
```

### Frontend Bağımlılıkları

| Paket | Açıklama |
|---|---|
| `react` | UI kütüphanesi |
| `react-dom` | React'ı DOM'a bağlar |
| `react-router-dom` | Sayfa yönlendirme |
| `axios` | HTTP istekleri |

---

## 🚀 Projeyi Ayağa Kaldırma (Hızlı Başlangıç)

```bash
# 1. Backend
cd backend
npm install
# .env dosyasını oluştur (yukarıdaki örneğe göre)
npm run dev

# 2. Frontend (yeni terminal)
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend API: http://localhost:5000/api

---

## 📡 API Endpoint'leri

| Method | Endpoint | Açıklama | Token Gerekli |
|---|---|---|---|
| POST | `/api/auth/register` | Yeni kullanıcı kaydı | ❌ |
| POST | `/api/auth/login` | Giriş yap, JWT döner | ❌ |
| GET | `/api/products` | Tüm ürünleri listele | ❌ |
| POST | `/api/cart/add` | Sepete ürün ekle | ✅ |
