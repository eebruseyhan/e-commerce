// backend/migrations/migrate.js
// Kullanım: node migrations/migrate.js

const fs   = require('fs');
const path = require('path');
const pool = require('../db');

async function runMigrations() {
    const migrationsDir = path.join(__dirname);

    // .sql uzantılı dosyaları alfabetik sıraya göre al
    const files = fs
        .readdirSync(migrationsDir)
        .filter((f) => f.endsWith('.sql'))
        .sort();

    if (files.length === 0) {
        console.log('Çalıştırılacak migration bulunamadı.');
        return;
    }

    for (const file of files) {
        const filePath = path.join(migrationsDir, file);
        const sql = fs.readFileSync(filePath, 'utf-8');

        console.log(`⏳ Çalıştırılıyor: ${file}`);
        try {
            await pool.query(sql);
            console.log(`✅ Tamamlandı: ${file}`);
        } catch (err) {
            console.error(`❌ Hata (${file}):`, err.message);
            process.exit(1);
        }
    }

    console.log('\n🎉 Tüm migration\'lar başarıyla uygulandı.');
    await pool.end();
}

runMigrations();
