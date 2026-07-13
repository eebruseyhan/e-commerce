-- =============================================
-- Seed: 002_seed_products
-- Açıklama : Örnek ürün verisi ekler
-- =============================================

INSERT INTO products (product_name, price) VALUES
  ('Kablosuz Bluetooth Kulaklık',  499.90),
  ('Mekanik Klavye',               1299.00),
  ('Oyuncu Mouse',                  349.50),
  ('4K Monitör 27"',               4999.00),
  ('USB-C Hub 7 Port',              449.00),
  ('Laptop Soğutucu Stand',         299.90),
  ('Webcam 1080p',                  599.00),
  ('Harici SSD 1TB',               1099.00),
  ('Akıllı Saat',                  2499.00),
  ('Taşınabilir Şarj Aleti 20000mAh', 379.90)
ON CONFLICT DO NOTHING;
