export const siteConfig = {
  name: "Ebil Bilişim",
  legalName: "E-bil Bilişim ve Teknoloji Hizmetleri",
  domain: "https://ebilbilisim.com",
  tagline: "Gölbaşı ve Ankara'da Güvenilir Kamera ve Güvenlik Sistemleri",
  description:
    "1997'den bu yana Ankara Gölbaşı merkezli; kamera, alarm, yangın algılama, network altyapı ve elektrik taahhüt çözümleri sunuyoruz.",
  phone: "+90 (533) 760 4588",
  phoneHref: "tel:+905337604588",
  email: "abilmis@ebilbilisim.com",
  address: {
    line1: "Park Eymir Konutları, Doğa Evleri Sitesi C2-30/23",
    district: "Gölbaşı",
    city: "Ankara",
    full: "Park Eymir Konutları, Doğa Evleri Sitesi C2-30/23, Gölbaşı / Ankara",
  },
  hours: [
    { days: "Pazartesi – Cuma", hours: "08:00 – 19:00" },
    { days: "Cumartesi", hours: "08:00 – 17:00" },
    { days: "Pazar", hours: "Kapalı" },
  ],
  founded: "1997",
  geo: {
    latitude: 39.7938,
    longitude: 32.8393,
  },
} as const;
