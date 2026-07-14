export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "kamera-ve-guvenlik-sistemleri",
    title: "Kamera ve Güvenlik Sistemleri",
    shortDescription:
      "Gölbaşı ve Ankara genelinde konut, site ve işyerleri için uçtan uca kamera ve güvenlik çözümleri.",
    description:
      "Gölbaşı ve Ankara genelinde konut, site ve işyerleri için uçtan uca güvenlik çözümleri kuruyoruz: IP kamera sistemleri, gece görüşlü ve hareket algılamalı kayıt cihazları, hırsız alarm sistemleri, geçiş kontrol ve turnike uygulamaları, kablolu/kablosuz entegre güvenlik altyapıları. Kurulumdan uzaktan izleme entegrasyonuna kadar tüm süreci tek elden yönetiyoruz.",
    features: [
      "Kamera Güvenlik Sistemleri",
      "Hırsız Alarm Sistemleri",
      "Geçiş Kontrol Sistemleri",
      "Kablolu/Kablosuz Entegre Güvenlik",
      "İnterkom Sistemleri",
    ],
    image: "/images/services/cctv.png",
    imageAlt: "Gölbaşı kamera güvenlik sistemi",
    seoTitle: "Gölbaşı Kamera Güvenlik Sistemleri Kurulumu | Ebil Bilişim",
    seoDescription:
      "IP kamera, alarm ve geçiş kontrol sistemleri — Gölbaşı ve Ankara genelinde konut/işyeri güvenlik çözümleri. Keşif ve teklif için arayın.",
  },
  {
    slug: "ses-ve-goruntu-sistemleri",
    title: "Ses ve Görüntü Sistemleri",
    shortDescription:
      "İşyerleri, okullar ve toplu yaşam alanları için anons, seslendirme ve görüntü aktarım sistemleri.",
    description:
      "İşyerleri, okullar ve toplu yaşam alanları için anons, seslendirme ve görüntü aktarım sistemleri kuruyoruz. Acil anons ve tahliye senaryolarına uygun sistem tasarımı, ortam ses sistemleri ve profesyonel görüntü aktarım çözümleri sunuyoruz.",
    features: [
      "Ses ve Anons Sistemleri",
      "Acil Anons ve Tahliye Sistemleri",
      "Görüntü Aktarım Sistemleri",
    ],
    image: "/images/hero/ankara-network-altyapi-fiber-kablolama.jpg",
    imageAlt: "Ses ve görüntü sistemleri kurulumu",
    seoTitle: "Ankara Ses ve Görüntü Sistemleri | Ebil Bilişim",
    seoDescription:
      "Anons, seslendirme ve görüntü aktarım sistemleri — Ankara ve Gölbaşı'nda kurumsal ses/görüntü çözümleri.",
  },
  {
    slug: "yangin-algilama-sistemleri",
    title: "Yangın Algılama Sistemleri",
    shortDescription:
      "Bina ve tesislerde erken uyarı sağlayan yangın ihbar ve algılama sistemleri.",
    description:
      "Bina ve tesislerde erken uyarı sağlayan yangın ihbar ve algılama sistemlerini, ilgili yönetmeliklere uygun şekilde projelendirip devreye alıyoruz.",
    features: [
      "Yangın İhbar Sistemleri",
      "Duman/Isı Dedektör Uygulamaları",
      "Bakım ve Periyodik Kontrol",
    ],
    image: "/images/services/yangin-algilama-sistemleri.jpg",
    imageAlt: "Gölbaşı yangın algılama sistemi",
    seoTitle: "Gölbaşı Yangın Algılama ve İhbar Sistemleri | Ebil Bilişim",
    seoDescription:
      "Yönetmeliklere uygun yangın ihbar ve algılama sistemleri — Gölbaşı ve Ankara genelinde kurulum ve bakım.",
  },
  {
    slug: "alt-yapi-kablolama-cozumleri",
    title: "Alt Yapı Kablolama Çözümleri",
    shortDescription:
      "Bilgisayar ağları, yapısal kablolama, fiber optik altyapı ve network sistemleri kurulumu.",
    description:
      "Bilgisayar ağları, yapısal kablolama, fiber optik altyapı ve network sistemleri kurulumunda uçtan uca hizmet veriyoruz — yeni bina projelerinden mevcut altyapı yenilemelerine kadar.",
    features: [
      "Yapısal Kablolama",
      "Fiber Optik Altyapı",
      "Network (Ağ) Sistemleri",
    ],
    image: "/images/hero/ankara-network-altyapi-fiber-kablolama.jpg",
    imageAlt: "Ankara network altyapı ve fiber optik kablolama",
    seoTitle: "Ankara Network Altyapı ve Yapısal Kablolama | Ebil Bilişim",
    seoDescription:
      "Yapısal kablolama, fiber optik altyapı ve network kurulumu — Ankara ve Gölbaşı'nda uçtan uca hizmet.",
  },
  {
    slug: "merkezi-yayin-sistemi",
    title: "Merkezi Yayın Sistemi",
    shortDescription:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemleri.",
    description:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemleri kurup entegre ediyoruz. Uydu ve kablolu yayın alt yapısından iç mekân dağıtımına kadar tüm süreci yönetiyoruz.",
    features: ["Merkezi Uydu/Yayın Altyapısı", "Bina İçi Sinyal Dağıtımı", "Bakım ve Destek"],
    image: "/images/services/uydu-headend.jpg",
    imageAlt: "Merkezi yayın sistemi uydu altyapısı",
    seoTitle: "Merkezi Yayın Sistemi Kurulumu | Ebil Bilişim",
    seoDescription:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemi kurulumu — Ankara ve Gölbaşı.",
  },
  {
    slug: "bilgisayar-cevre-ve-birimleri",
    title: "Bilgisayar Çevre ve Birimleri",
    shortDescription:
      "Kurumsal ve bireysel müşterilere bilgisayar donanımı, çevre birimleri tedarik ve teknik destek.",
    description:
      "Kurumsal ve bireysel müşterilere bilgisayar donanımı, çevre birimleri tedarik ve teknik destek hizmeti sunuyoruz.",
    features: ["Donanım Tedariki", "Çevre Birimleri", "Teknik Destek"],
    image: "/images/hero/golbasi-kamera-kurulum-teknisyen.jpg",
    imageAlt: "Bilgisayar donanım ve teknik destek",
    seoTitle: "Bilgisayar Donanım ve Teknik Destek | Ebil Bilişim",
    seoDescription: "Kurumsal bilgisayar donanımı, çevre birimleri tedariki ve teknik destek — Ankara.",
  },
  {
    slug: "elektrik-proje-ve-taahhut",
    title: "Elektrik Proje ve Taahhüt",
    shortDescription:
      "Konut, işyeri ve site projelerinde elektrik altyapısını baştan sona tasarlayıp uyguluyoruz.",
    description:
      "Konut, işyeri ve site projelerinde elektrik altyapısını baştan sona tasarlayıp uyguluyoruz: elektrik projelendirme, pano tasarımı ve montajı, alçak/orta gerilim tesisatı, jeneratör ve güç sistemleri kurulumu, enerji verimliliğine yönelik iyileştirmeler. Zayıf akım ve güvenlik sistemleriyle uyumlu, tek elden yürütülen bir elektrik altyapısı sunuyoruz.",
    features: [
      "Elektrik Projelendirme ve Danışmanlık",
      "Pano Tasarımı ve Montajı",
      "Alçak/Orta Gerilim Tesisatı",
      "Jeneratör ve Güç Sistemleri",
      "Enerji Verimliliği Çözümleri",
    ],
    image: "/images/hero/golbasi-guvenlik-sistemleri-hero.jpg",
    imageAlt: "Ankara elektrik proje ve taahhüt",
    seoTitle: "Ankara Elektrik Proje ve Taahhüt Hizmetleri | Ebil Bilişim",
    seoDescription: "Elektrik projelendirme, pano, jeneratör ve enerji verimliliği çözümleri — Ankara ve Gölbaşı.",
  },
  {
    slug: "gunes-enerji-sistemleri-ges",
    title: "Güneş Enerji Sistemleri (GES)",
    shortDescription:
      "Konut ve işyerleri için güneş enerji santrali (GES) tasarımı, kurulumu ve bakımı.",
    description:
      "Konut ve işyerleri için güneş enerji santrali (GES) çözümleri tasarlıyor, kuruyor ve devreye alıyoruz. İhtiyaç analizinden sistem tasarımına, kurulumdan periyodik bakım ve teknik desteğe kadar süreci Gölbaşı ve Ankara genelinde yerinde takip ediyoruz.",
    features: ["Sistem Tasarımı ve Danışmanlık", "Kurulum ve Montaj", "Bakım ve Teknik Destek"],
    image: "/images/hero/golbasi-guvenlik-sistemleri-hero.jpg",
    imageAlt: "Gölbaşı güneş enerji sistemleri GES",
    seoTitle: "Gölbaşı Güneş Enerji Sistemleri (GES) Kurulumu | Ebil Bilişim",
    seoDescription: "Güneş enerji santrali tasarımı, kurulumu ve bakımı — Gölbaşı ve Ankara genelinde GES çözümleri.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
