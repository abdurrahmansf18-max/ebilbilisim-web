import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "1997'den bu yana Ankara Gölbaşı merkezli Ebil Bilişim'in hikayesi, misyonu, vizyonu ve değerleri.",
};

const values = [
  "Dürüstlük",
  "Güven",
  "Müşteri Odaklılık",
  "Takım Ruhu",
  "İstikrar",
  "Hizmet Kalitesi",
  "Yenilikçilik",
  "İnsana Yatırım",
];

export default function KurumsalPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <h1 className="text-3xl font-bold text-brand-primary-dark sm:text-4xl">Kurumsal</h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-black/70">
        <p>
          {siteConfig.founded} yılında İlkadım Bilgisayar olarak kurulan şirketimiz, kurucu
          ortaklar yapısındaki değişiklikten sonra 2013 yılında{" "}
          <strong className="text-brand-primary-dark">
            E-bil Bilişim ve Teknoloji Hizmetleri
          </strong>{" "}
          adıyla sektördeki faaliyetlerine devam etmektedir.
        </p>
        <p>
          Kuruluşundan bu yana çeşitli kamu kurum ve kuruluşlarının yanında özel sektör
          firmalarına da bilişim sektörünün bir çok alanında teknolojik danışmanlık, alt
          yapı kablolama ve ürün tedariği gibi konularda çözüm üretip hizmet vermektedir.
        </p>
        <p>
          E-bil olarak, inovasyona dayalı sürdürülebilir büyüme ve başarı için sektördeki
          çalışmalarımızı ve yatırımlarımızı sürdürüyoruz. Sistem entegratörü olmanın
          ötesinde anahtar teslim çözümler sunan ve yepyeni teknolojiler geliştiren yeni
          yapımızla kendi bilişim sistemimizi inşa ediyoruz.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-surface p-8">
          <h2 className="text-lg font-semibold text-brand-primary-dark">Misyonumuz</h2>
          <p className="mt-3 text-black/70">
            Bu zamana kadar elde etmiş olduğumuz tecrübeleri ve yetenekleri katma değer
            oluşturacak şekilde kamu ve özel sektör hizmetine sunmak.
          </p>
        </div>
        <div className="rounded-2xl bg-brand-surface p-8">
          <h2 className="text-lg font-semibold text-brand-primary-dark">Vizyonumuz</h2>
          <p className="mt-3 text-black/70">
            Pazarda, kamu ve özel sektör içerisinde güvenilir ve en çok tercih edilen
            &ldquo;Bilişim Çözüm Sağlayıcısı&rdquo; şirketi olmaktır.
          </p>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-lg font-semibold text-brand-primary-dark">Farkımız ne?</h2>
        <p className="mt-2 text-black/60">
          Müşterilerimiz, aşağıdakiler de dahil olmak üzere çeşitli önemli nedenlerle
          benzersiz olduğumuzu söylüyor:
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {values.map((value) => (
            <div
              key={value}
              className="rounded-xl border border-black/5 bg-white px-4 py-3 text-center text-sm font-medium text-brand-primary-dark"
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
