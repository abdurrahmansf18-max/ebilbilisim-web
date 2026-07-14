export type ServiceIcon = "sound" | "computer" | "bolt" | "sun";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
  visual:
    | { type: "photo"; src: string; alt: string }
    | { type: "icon"; icon: ServiceIcon; gradient: string };
};

export const services: Service[] = [
  {
    slug: "kamera-ve-guvenlik-sistemleri",
    title: "Kamera ve Güvenlik Sistemleri",
    shortDescription:
      "Türkiye genelinde konut, site ve işyerleri için uçtan uca kamera ve güvenlik çözümleri.",
    description:
      "Ankara Gölbaşı merkezimizden Türkiye genelinde konut, site ve işyerleri için uçtan uca güvenlik çözümleri kuruyoruz: IP kamera sistemleri, gece görüşlü ve hareket algılamalı kayıt cihazları, hırsız alarm sistemleri, geçiş kontrol ve turnike uygulamaları, kablolu/kablosuz entegre güvenlik altyapıları. Kurulumdan uzaktan izleme entegrasyonuna kadar tüm süreci tek elden yönetiyoruz.",
    features: [
      "Kamera Güvenlik Sistemleri",
      "Hırsız Alarm Sistemleri",
      "Geçiş Kontrol Sistemleri",
      "Kablolu/Kablosuz Entegre Güvenlik",
      "İnterkom Sistemleri",
    ],
    visual: {
      type: "photo",
      src: "/images/hero/golbasi-kamera-kurulum-teknisyen.jpg",
      alt: "Gölbaşı kamera güvenlik sistemi kurulumu",
    },
    seoTitle: "Gölbaşı Kamera Güvenlik Sistemleri Kurulumu | Ebil Bilişim",
    seoDescription:
      "IP kamera, alarm ve geçiş kontrol sistemleri — Türkiye genelinde konut/işyeri güvenlik çözümleri. Keşif ve teklif için arayın.",
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
    visual: { type: "icon", icon: "sound", gradient: "from-violet-500/25 via-blue-500/15 to-transparent" },
    seoTitle: "Ankara Ses ve Görüntü Sistemleri | Ebil Bilişim",
    seoDescription:
      "Anons, seslendirme ve görüntü aktarım sistemleri — Türkiye genelinde kurumsal ses/görüntü çözümleri.",
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
    visual: {
      type: "photo",
      src: "/images/services/yangin-algilama-sistemleri.jpg",
      alt: "Gölbaşı yangın algılama sistemi",
    },
    seoTitle: "Gölbaşı Yangın Algılama ve İhbar Sistemleri | Ebil Bilişim",
    seoDescription:
      "Yönetmeliklere uygun yangın ihbar ve algılama sistemleri — Türkiye genelinde kurulum ve bakım.",
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
    visual: {
      type: "photo",
      src: "/images/hero/ankara-network-altyapi-fiber-kablolama.jpg",
      alt: "Ankara network altyapı ve fiber optik kablolama",
    },
    seoTitle: "Ankara Network Altyapı ve Yapısal Kablolama | Ebil Bilişim",
    seoDescription:
      "Yapısal kablolama, fiber optik altyapı ve network kurulumu — Türkiye genelinde uçtan uca hizmet.",
  },
  {
    slug: "merkezi-yayin-sistemi",
    title: "Merkezi Yayın Sistemi",
    shortDescription:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemleri.",
    description:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemleri kurup entegre ediyoruz. Uydu ve kablolu yayın alt yapısından iç mekân dağıtımına kadar tüm süreci yönetiyoruz.",
    features: ["Merkezi Uydu/Yayın Altyapısı", "Bina İçi Sinyal Dağıtımı", "Bakım ve Destek"],
    visual: {
      type: "photo",
      src: "/images/services/uydu-headend.jpg",
      alt: "Merkezi yayın sistemi uydu altyapısı",
    },
    seoTitle: "Merkezi Yayın Sistemi Kurulumu | Ebil Bilişim",
    seoDescription:
      "Çok katlı yapılar ve kampüsler için merkezi ses/görüntü yayın sistemi kurulumu — Türkiye genelinde.",
  },
  {
    slug: "bilgisayar-cevre-ve-birimleri",
    title: "Bilgisayar Çevre ve Birimleri",
    shortDescription:
      "Kurumsal ve bireysel müşterilere bilgisayar donanımı, çevre birimleri tedarik ve teknik destek.",
    description:
      "Kurumsal ve bireysel müşterilere bilgisayar donanımı, çevre birimleri tedarik ve teknik destek hizmeti sunuyoruz.",
    features: ["Donanım Tedariki", "Çevre Birimleri", "Teknik Destek"],
    visual: { type: "icon", icon: "computer", gradient: "from-sky-500/25 via-blue-500/15 to-transparent" },
    seoTitle: "Bilgisayar Donanım ve Teknik Destek | Ebil Bilişim",
    seoDescription: "Kurumsal bilgisayar donanımı, çevre birimleri tedariki ve teknik destek — Türkiye genelinde.",
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
    visual: { type: "icon", icon: "bolt", gradient: "from-amber-500/25 via-orange-500/15 to-transparent" },
    seoTitle: "Ankara Elektrik Proje ve Taahhüt Hizmetleri | Ebil Bilişim",
    seoDescription: "Elektrik projelendirme, pano, jeneratör ve enerji verimliliği çözümleri — Türkiye genelinde.",
  },
  {
    slug: "gunes-enerji-sistemleri-ges",
    title: "Güneş Enerji Sistemleri (GES)",
    shortDescription:
      "Konut ve işyerleri için güneş enerji santrali (GES) tasarımı, kurulumu ve bakımı.",
    description:
      "Konut ve işyerleri için güneş enerji santrali (GES) çözümleri tasarlıyor, kuruyor ve devreye alıyoruz. İhtiyaç analizinden sistem tasarımına, kurulumdan periyodik bakım ve teknik desteğe kadar süreci Türkiye genelinde yerinde takip ediyoruz.",
    features: ["Sistem Tasarımı ve Danışmanlık", "Kurulum ve Montaj", "Bakım ve Teknik Destek"],
    visual: { type: "icon", icon: "sun", gradient: "from-yellow-400/25 via-amber-500/15 to-transparent" },
    seoTitle: "Güneş Enerji Sistemleri (GES) Kurulumu | Ebil Bilişim",
    seoDescription: "Güneş enerji santrali tasarımı, kurulumu ve bakımı — Türkiye genelinde GES çözümleri.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
