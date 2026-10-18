# Rendang Magek — Website Resmi

Website landing page untuk **Rendang Magek**, usaha rendang otentik khas Minangkabau yang berlokasi di Yogyakarta.

🌐 **Live:** [rendangmagek.com](https://rendangmagek.com)

---

## Tentang

Rendang Magek menyajikan Rendang Daging Sapi, Rendang Suwir, Rendang Jengkol, dan Bumbu Rendang praktis. Bersertifikat Halal Indonesia. Berlokasi di Gamping, Sleman, Yogyakarta.

## Teknologi

**Pure static website** — tidak membutuhkan build step, server, atau npm.

- HTML5 semantik
- CSS3 (custom properties, grid, flexbox)
- Vanilla JavaScript (ES6+)
- Font: DM Serif Display + Inter (Google Fonts)

## Struktur

```
rendang-magek/
├── index.html          # Halaman utama
├── privasi.html        # Kebijakan privasi
├── ketentuan.html      # Ketentuan layanan
├── style.css           # Semua styling
├── main.js             # Interaksi (nav scroll, reveal, mobile menu)
├── favicon.ico         # Favicon multi-size
├── site.webmanifest    # PWA manifest
├── robots.txt          # SEO crawl rules
├── sitemap.xml         # XML sitemap + image sitemap
├── vercel.json         # Vercel: headers keamanan, cache, redirect
└── gambar/             # Aset foto, video, icon
```

## Deploy ke Vercel

### Via GitHub (direkomendasikan)

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → **New Project**
3. Import repo ini
4. Biarkan semua setting default — **tidak perlu framework preset**
5. Klik **Deploy**

Vercel otomatis deteksi sebagai static site. Tidak ada build command yang diperlukan.

### Custom Domain

Di dashboard Vercel → **Settings → Domains**, tambahkan `rendangmagek.com` dan ikuti petunjuk DNS.

Setelah domain aktif, update `canonical` URL di `index.html`, `privasi.html`, `ketentuan.html`, dan `sitemap.xml` dari `https://rendangmagek.com` ke domain yang digunakan.

## Kontak

- WhatsApp: [+62 813-7766-7310](https://wa.me/6281377667310)
- Instagram: [@rendangmagek](https://www.instagram.com/rendangmagek)
- GoFood: [Rendang Magek Yogyakarta](https://gofood.co.id/yogyakarta/restaurant/rendang-magek-yogyakarta-4b4f07b7-a28e-4dba-8d3e-6f76ba82fd8c)
- Google Maps: [Lihat Lokasi](https://www.google.com/maps/place/Rendang+Magek/@-7.8130914,110.291462,17z)
