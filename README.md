# Ebil Bilişim — Kurumsal Web Sitesi

Ebil Bilişim (Ankara/Gölbaşı merkezli, Türkiye genelinde kamera-güvenlik,
network altyapı ve elektrik taahhüt hizmetleri veren firma) için sıfırdan
geliştirilmiş kurumsal web sitesi. Önceki WordPress sitesinin yerine geçer.

---

## 1. Teknoloji Yığını

| Katman | Teknoloji |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Dil | TypeScript |
| UI | React 19 |
| Stil | Tailwind CSS v4 (CSS tabanlı tema, `src/app/globals.css`) |
| Font | `next/font` — Inter (Google Fonts) |
| Barındırma paketi | Docker (`output: "standalone"`) |
| Bağımlılık yöneticisi | npm (`package-lock.json` mevcut, `npm ci` kullanın) |

Harici bir veritabanı, CMS veya backend **yoktur**. Tüm içerik (hizmetler,
referanslar, iletişim bilgileri) `src/lib/*.ts` dosyalarında sabit veri
(TypeScript objeleri) olarak tutulur — içerik değişikliği için bu dosyalar
düzenlenip yeniden build/deploy edilir. Hiçbir ortam değişkeni (`.env`)
gerekmez.

---

## 2. Yerel Geliştirme

```bash
npm ci
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açılır.

Build almak ve production modda çalıştırmak için:

```bash
npm run build
npm start
```

---

## 3. Docker ile Çalıştırma (önerilen dağıtım yöntemi)

Proje kökünde hazır `Dockerfile` ve `docker-compose.yml` var:

```bash
docker compose up -d --build
```

- Site **port 3000**'de yayınlanır (`docker-compose.yml`'de değiştirilebilir).
- `Dockerfile`, Next.js'in `standalone` çıktısını kullanır — imaj küçük ve
  hızlı başlar, `node_modules`'ı taşımaz.
- `docker-compose.yml` içinde ayrıca **`preview-tunnel`** adlı bir servis var
  (Cloudflare Tunnel, hesap/domain gerektirmeyen "quick tunnel"). Bu sadece
  geliştirme/önizleme sürecinde müşteriye geçici bir link paylaşmak için
  eklenmişti — **gerçek yayında bu servise ihtiyaç yoktur, kaldırılabilir.**

### VPS'e alırken (Caddy / Nginx ile)

Container `0.0.0.0:3000` üzerinde HTTP servis verir. Kendi domain'inizle TLS
sonlandırma için önünde bir reverse proxy (Caddy önerilir, otomatik Let's
Encrypt sertifikası alır) çalıştırılmalı:

```
ebilbilisim.com {
    reverse_proxy localhost:3000
}
```

**Önemli:** DNS'i bu VPS'e yönlendirirken sadece **A/AAAA kaydını**
değiştirin — **MX kaydına dokunmayın**, aksi halde müşterinin
`abilmis@ebilbilisim.com` e-postası çalışmaz olabilir.

---

## 4. Proje Yapısı

```
src/
  app/
    page.tsx                     Anasayfa
    layout.tsx                   Kök layout, global <head> metadata, JSON-LD
    globals.css                  Tema renkleri, glow/pulse efektleri (CSS)
    hizmetlerimiz/page.tsx        Hizmetler listesi
    hizmetlerimiz/[slug]/page.tsx Hizmet detay sayfası (statik üretilir)
    kurumsal/page.tsx            Hakkımızda
    referanslarimiz/page.tsx     Referanslar + çözüm ortakları
    iletisim/page.tsx            İletişim (form + harita)
    sitemap.ts / robots.ts       SEO dosyaları (otomatik üretilir)
    favicon.ico / icon.png / apple-icon.png   Site ikonu (logo "e" harfinden)
  components/                    Header, Footer, ServiceCard, LogoStrip,
                                  SearchBox, ContactForm, LocalBusinessJsonLd, vb.
  lib/
    site-config.ts                Firma bilgileri (telefon, adres, koordinat, vb.)
    services.ts                   8 hizmet kategorisi — İÇERİK BURADA DÜZENLENİR
    references.ts                 Referans/çözüm ortağı logoları ve isimleri
public/
  images/                         Tüm görseller (hero, logo, hizmetler, logolar)
docs/
  icerik-ve-seo-taslagi.md        İçerik/SEO planlama notları
  site-icerik-envanteri.md        Eski WordPress sitesinden taşınan içerik envanteri
```

### İçerik nasıl değiştirilir?

- **Hizmet metni/görseli:** `src/lib/services.ts` — her hizmetin `description`,
  `features`, `visual` (fotoğraf ya da ikon+gradient kart) alanları var.
- **Referans/çözüm ortağı logoları:** `src/lib/references.ts`
- **Telefon, adres, çalışma saatleri, koordinat:** `src/lib/site-config.ts`
- **Görsel dosyaları:** `public/images/` altına eklenip yukarıdaki dosyalarda
  yol (`/images/...`) olarak referans verilir.

---

## 5. Bu Proje Nasıl Ortaya Çıktı — Özet

Müşterinin 2016 yılında satın alınmış, WordPress + Elementor + WPBakery
tabanlı eski sitesi incelendi. Elementor'un sayfa tasarımını veritabanında
kapalı bir JSON formatında tutması nedeniyle kod üzerinden (agent ile)
güvenilir şekilde düzenlenemediği görüldü; bu yüzden site **Next.js ile
sıfırdan** koda dayalı olarak yeniden inşa edildi.

**Eski siteden taşınanlar (gerçek, doğrulanmış içerik):**
- Şirket kuruluş hikayesi, misyon/vizyon/değerler (Kurumsal sayfası)
- ~35 gerçek kurumsal referans (Roketsan, TRT, VakıfBank, Hacettepe
  Üniversitesi, NATO Üssü, SGK vb.) ve 12 teknoloji partner logosu
- İletişim bilgileri (telefon, adres, çalışma saatleri, harita koordinatı)

**Elenen içerik:** Sitenin satın alındığı hazır WordPress temasından
(`Cosine`) kalan, Ebil ile alakasız İngilizce demo içerikler (sahte
"vaka çalışmaları", satış eğitimi blog yazıları, stok fotoğraflar) —
detaylar `docs/site-icerik-envanteri.md` içinde.

**Yeni eklenenler:**
- Modern, koyu tema (dark mode) tasarım; glow/pulse ışık efektleri
- 8 hizmet kategorisi (2'si — Elektrik Proje ve Taahhüt, Güneş Enerji
  Sistemleri/GES — Egepa Group referans alınarak, özgün metinle eklendi)
- Her hizmet ve tüm görseller için yapay zeka ile üretilmiş, gerçekçi
  fotoğraflar (bkz. `docs/icerik-ve-seo-taslagi.md` içindeki prompt'lar)
- Gölbaşı/Ankara odaklı yerel SEO: her sayfada özel meta etiketleri,
  `LocalBusiness` + `Service` JSON-LD şeması, `sitemap.xml`, `robots.txt`
- Header'da hizmet/sayfa araması (istemci taraflı, basit arama kutusu)
- Mobil uyumlu (responsive) tasarım — tüm bileşenler test edildi

---

## 6. Bilinen Notlar / Devam Eden Kararlar

- Site şu an **Türkiye genelinde hizmet** vurgusuyla yazıldı (Ankara Gölbaşı
  merkez ofis olarak belirtiliyor) — müşteri onayıyla güncellendi.
- Hero bölümünde başlık/CTA butonları müşteri talebiyle kaldırıldı, sadece
  görsel + hafif ışık efekti bırakıldı.
- İletişim sayfasındaki harita, adres metni yerine kesin enlem/boylam
  koordinatı kullanır (`site-config.ts` → `geo`), bu sayede eski sitedeki
  gibi tam konumu gösterir.
