-- =============================================
-- Migration: 001_init
-- Açıklama : İlk tablo yapısını oluşturur
-- =============================================

-- Kullanıcılar tablosu
CREATE TABLE IF NOT EXISTS app_users (
    user_id           SERIAL PRIMARY KEY,
    user_fullname     VARCHAR(100)  NOT NULL,
    user_mail         VARCHAR(100)  UNIQUE NOT NULL,
    user_hashpassword TEXT          NOT NULL,
    created_at        TIMESTAMP     DEFAULT NOW()
);

-- Ürünler tablosu
CREATE TABLE IF NOT EXISTS products (
    id           SERIAL          PRIMARY KEY,
    product_name VARCHAR(100)    NOT NULL,
    price        NUMERIC(10, 2)  NOT NULL CHECK (price >= 0),
    created_at   TIMESTAMP       DEFAULT NOW()
);
