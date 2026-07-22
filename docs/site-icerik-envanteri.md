# Ebil Bilişim — Mevcut Site İçerik Envanteri (Next.js taşıması için kaynak)

Bu belge, WordPress veritabanından çekilen **gerçek** içerik ile sitenin satın alındığı hazır temadan (Cosine) kalan **demo/çöp** içeriği ayırır. Next.js sitesi kurulurken kaynak olarak sadece "GERÇEK İÇERİK" bölümü kullanılacak.

---

## 1. GERÇEK İÇERİK (taşınacak)

### Anasayfa
- Slogan: "İnovatif Network (Ağ) Altyapı Çözümleri"
- Alt metin: "Kusursuz hizmet ve üstün teknoloji ile güvencemiz altındasınız."
- CTA metni: "Ebil Bilişim İnovatif ve Creative Çözümler Sunar. Bizlere İletişim Bilgilerimiz Yardımıyla Ulaşabilirsiniz."
- Hizmet kategori adları (açıklama yok, sadece başlıklar): Kamera ve Güvenlik Sistemleri, Ses ve Görüntü Sistemleri, Yangın Algılama Sistemleri, Alt Yapı Kablolama Çözümleri, Merkezi Yayın Sistemi, Bilgisayar Çevre ve Birimleri
- Not: Hero slider (Revolution Slider) şu an boş/dummy görsel gösteriyor — üzerinde gerçek bir slayt içeriği yok, sıfırdan tasarlayacağız.

### Kurumsal (Hakkımızda)
> 1997 yılında İlkadım Bilgisayar olarak kurulan şirketimiz kurucu ortaklar yapısındaki değişiklikten sonra 2013 yılında E-bil Bilişim ve Teknoloji Hizmetleri adıyla sektördeki faaliyetlerine devam etmektedir. Kuruluşundan bu yana çeşitli Kamu Kurum ve Kuruluşlarının yanında özel sektör firmalarına da bilişim sektörünün bir çok alanında teknolojik danışmanlık, alt yapı kablolama ve ürün tedariği gibi konularda çözüm üretip hizmet vermektedir. E-bil olarak, inovasyona dayalı sürdürülebilir büyüme ve başarı için sektördeki çalışmalarımızı ve yatırımlarımızı sürdürüyoruz. Sistem entegratörü olmanın ötesinde anahtar teslim çözümler sunan ve yepyeni teknolojiler geliştiren yeni yapımızla kendi bilişim sistemimizi inşa ediyoruz.

**Değerlerimiz:** Dürüstlük, Güven, Müşteri Odaklılık, Takım Ruhu, İstikrar, Hizmet Kalitesi, Yenilikçilik, İnsana Yatırım

**Misyon:** Bu zamana kadar elde etmiş olduğumuz tecrübeleri ve yetenekleri katma değer oluşturacak şekilde kamu ve özel sektör hizmetine sunmak.

**Vizyon:** Pazarda, kamu ve özel sektör içerisinde güvenilir ve en çok tercih edilen "Bilişim Çözüm Sağlayıcısı" şirketi olmaktır.

*(Not: Eski sayfada bir yerde İngilizce demo cümlesi ("We help the world's leading companies...") sehven kalmış — yeni sitede kullanılmayacak.)*

### İletişim
- Telefon: +90 (533) 760 4588
- E-posta: abilmis@ebilbilisim.com
- Adres: Park Eymir Konutları, Doğa Evleri Sitesi C2-30/23, Gölbaşı / ANKARA
- Çalışma saatleri: Pzt–Cuma 08:00–19:00, Cmt 08:00–17:00, Pzr Kapalı

### Referanslarımız (gerçek, ~35 kurum — güven inşası için çok değerli)
Gübretaş, Tarnet, Tarım Kredi Kooperatifleri, AB Mali Yardımları Daire Başkanlığı, Sincan Tapu Kadastro, Milas 500 Kişilik Öğrenci Yurdu, Gelir Politikaları Genel Müdürlüğü, Tabiat Varlıklarını Koruma Genel Müdürlüğü, Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü, VakıfBank (Caddebostan ve Dicle şube projeleri), Keçiören/Altındağ/Mamak Nüfus Müdürlükleri, Kamu Hastaneleri Birliği, Babaeski Devlet Hastanesi, Milli Kütüphane, Fatih Eğitim Projesi Alt Yapı Kablolama, SGK, Ankara Büyükşehir Belediyesi, Türk Telekom İzmir Şirinyer, NATO Üssü, Kara Kuvvetleri Komutanlığı, Kırıkkale Emniyet Genel Müdürlüğü, Ankara Barolar Birliği, Süleymaniye Vakfı Öğrenci Yurtları, Ankara Üniversitesi, Hacettepe Üniversitesi, ODTÜ, Sinpaş Oran Konutları, Ankara Hakimevi Sosyal Tesisleri, Roketsan, Başbakanlık TİKA, TRT Genel Müdürlüğü, Kültür Bakanlığı, Çevre ve Şehircilik Bakanlığı, GİB.

### Çözüm Ortakları (teknoloji marka/tedarikçi logoları — Referanslar'dan ayrı bir liste)
HP, Dell, Huawei, Supermicro, Teletek, Kedacom, Aksa, Planet, Makelsan, Hikvision, Lenovo.

---

## 2. GERÇEK GÖRSEL VARLIKLARI (Ortam kütüphanesinde mevcut, taşınacak)

| Dosya | Açıklama | Kullanım önerisi |
|---|---|---|
| `ebil-logos.png` / `ebil-logo.jpg` | Şirket logosu | Header/footer |
| `cctv.png` / `cctv.jpg` | Kamera/CCTV görseli | Kamera ve Güvenlik Sistemleri bölümü (şu an hiçbir sayfaya bağlı değildi, kullanılmamış) |
| `YANGIN-ALGILAMA-SISTEMLERI.jpg` | Yangın algılama görseli | Yangın Algılama Sistemleri bölümü (kullanılmamıştı) |
| `uydu-headent.jpg` | Uydu/başlık ekipmanı görseli | Merkezi Yayın Sistemi bölümü (kullanılmamıştı) |
| 15 referans logosu (ankara-universitesi, vakifbank, trt, roketsan, abb, sinpas, gib, ttelekom, tika, hacettepe, odtu, nufus, kultur-turizm, tarim-kredi, çevre-şehircilik) | Referanslarımız bölümü logoları | Referanslar/güven bölümü |
| 12 teknoloji partner logosu (hp, dell, huawei, smicro, teletek, kedacom, aksa, planet, makelsan, hikvision, lenovo, daaa) | Çözüm Ortakları logoları | Ayrı "Çözüm Ortakları" bölümü |
| `golbasi-guvenlik-sistemleri-hero.jpg`, `golbasi-kamera-kurulum-teknisyen.jpg`, `ankara-network-altyapi-fiber-kablolama.jpg` | Yeni AI görselleri (zaten optimize edildi) | Hero banner + hizmet bölümleri |

**Not:** `cctv`, `yangın algılama`, `uydu-headent` görselleri ilginç biçimde hiçbir sayfada kullanılmıyordu — muhtemelen hizmetler bölümü hiç tam bitirilmemiş. Yeni sitede bunları gerçek AI görselleriyle birlikte kullanacağız.

---

## 3. DEMO/ÇÖP İÇERİK (kullanılMAYACAK — bilgi amaçlı)

- **8 "nproject" taslağı** — Toyota Fleet Management, Hitachi Solutions, Woodard & Curran gibi İngilizce sahte "vaka çalışmaları" (Cosine temasının satış-eğitimi demo içeriği). Ebil ile alakasız.
- **26 taslak sayfa** — Case Studies, Leadership Team, Training Programs, Shop/Cart/Checkout (WooCommerce demo), Testimonials, FAQ vb. — hepsi İngilizce, "Cosine" temasının demo sayfaları.
- **7 taslak blog yazısı** — satış ipuçları, "The Martian filmi" gibi alakasız İngilizce blog demo içerikleri.
- **~70 demo görsel** (2016/04-05 tarihli slider1-3, t1-t5, lg1-lg10, c1-c6, a1-a5 vb.) — temanın kendi tanıtım görselleri, gerçek içerikte kullanılmıyor.

---

## 4. Sizin 4 maddenizin karşılığı

1. **Egepa + Ebil harmanlama, veri tekrarı olmadan** → Zaten `icerik-ve-seo-taslagi.md`'de yapıldı; artık üstteki gerçek Ebil verileriyle (referanslar, kuruluş hikayesi, değerler) birleştirip zenginleştireceğiz.
2. **Modern, ferah, mobil uyumlu tasarım** → Next.js + Tailwind CSS ile sıfırdan, responsive olarak kodlanacak.
3. **AI görsellerinin doğru boyutla yerleştirilmesi** → 3 görsel zaten optimize edilmiş halde `web-gorseller/` klasöründe hazır, Next.js `<Image>` bileşeniyle otomatik doğru boyut/format (WebP) üretilecek.
4. **Gölbaşı odaklı yerel SEO** → Next.js'te her sayfa için `metadata` (title/description), `LocalBusiness` + `Service` structured data (JSON-LD), sitemap.xml — tam kod kontrolünde, WordPress eklentisine bağımlı kalmadan.

Hepsi mümkün ve elimizde tüm ham veri var. Next.js projesini kurmaya başlayabilirim.
