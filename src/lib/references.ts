export type Logo = {
  name: string;
  image: string;
};

// Gerçek müşteri/kurum referansları (logolu olanlar)
export const referenceLogos: Logo[] = [
  { name: "Ankara Üniversitesi", image: "/images/references/ankara-universitesi.png" },
  { name: "Çevre ve Şehircilik Bakanlığı", image: "/images/references/turkiye-cumhuriyeti-cevre-ve-sehircilik-bakanligi-logo.png" },
  { name: "Kültür ve Turizm Bakanlığı", image: "/images/references/kultur-turizm.png" },
  { name: "Tarım Kredi Kooperatifleri", image: "/images/references/tarim-kredi.png" },
  { name: "TİKA", image: "/images/references/tike.png" },
  { name: "Hacettepe Üniversitesi", image: "/images/references/Hacettepe.png" },
  { name: "Nüfus ve Vatandaşlık İşleri Genel Müdürlüğü", image: "/images/references/nufus.png" },
  { name: "ODTÜ", image: "/images/references/odtu.png" },
  { name: "Gelir İdaresi Başkanlığı", image: "/images/references/gib.png" },
  { name: "TRT Genel Müdürlüğü", image: "/images/references/trt.png" },
  { name: "VakıfBank", image: "/images/references/vakifbank.png" },
  { name: "Türk Telekom", image: "/images/references/ttelekom.png" },
  { name: "Roketsan", image: "/images/references/roketsan.png" },
  { name: "ABB (Ankara Büyükşehir Belediyesi)", image: "/images/references/abb.png" },
  { name: "Peveli", image: "/images/references/peveli.jpeg" },
];

// Logosu olmayan diğer referanslar (metin listesi)
export const referenceNames: string[] = [
  "Gübretaş",
  "Tarnet",
  "AB Mali Yardımları Daire Başkanlığı",
  "Sincan Tapu Kadastro",
  "Milas 500 Kişilik Öğrenci Yurdu",
  "Gelir Politikaları Genel Müdürlüğü",
  "Tabiat Varlıklarını Koruma Genel Müdürlüğü",
  "Keçiören Nüfus Müdürlüğü",
  "Altındağ Nüfus Müdürlüğü",
  "Mamak Nüfus Müdürlüğü",
  "Kamu Hastaneleri Birliği",
  "Babaeski Devlet Hastanesi",
  "Milli Kütüphane",
  "Fatih Eğitim Projesi Alt Yapı Kablolama",
  "SGK",
  "NATO Üssü",
  "Kara Kuvvetleri Komutanlığı",
  "Kırıkkale Emniyet Genel Müdürlüğü",
  "Ankara Barolar Birliği",
  "Süleymaniye Vakfı Öğrenci Yurtları",
  "Ankara Hakimevi Sosyal Tesisleri",
  "Başbakanlık",
];

// Teknoloji çözüm ortakları (marka/tedarikçi logoları)
export const partnerLogos: Logo[] = [
  { name: "HP", image: "/images/partners/hp-logo.png" },
  { name: "Dell", image: "/images/partners/dell-logo.png" },
  { name: "Huawei", image: "/images/partners/huawei.png" },
  { name: "Supermicro", image: "/images/partners/smicro.png" },
  { name: "Dahua Technology", image: "/images/partners/dahua-logo.png" },
  { name: "Teletek", image: "/images/partners/teletek-logo.png" },
  { name: "Kedacom", image: "/images/partners/kedacom-logo.png" },
  { name: "Aksa", image: "/images/partners/aksa-logo.png" },
  { name: "Planet", image: "/images/partners/planet-logo.png" },
  { name: "Makelsan", image: "/images/partners/makelsan-logo.png" },
  { name: "Hikvision", image: "/images/partners/hikvision-logo.png" },
  { name: "Lenovo", image: "/images/partners/lenovo-logo.png" },
];
