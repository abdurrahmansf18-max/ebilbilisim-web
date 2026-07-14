import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Ebil Bilişim ile iletişime geçin — Gölbaşı/Ankara ofisimiz, telefon, e-posta ve çalışma saatlerimiz.",
};

export default function IletisimPage() {
  const mapQuery = encodeURIComponent(siteConfig.address.full);

  return (
    <div>
      <div className="border-b border-white/5 bg-brand-surface py-16 text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Projeleriniz bizim için önemli!
        </h1>
        <p className="mt-3 text-brand-muted">
          Bugün bir Ebil Bilişim uzmanıyla görüşün — {siteConfig.phone}
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div className="card-glow rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-semibold text-white">Bize Ulaşın</h2>
          <p className="mt-2 text-sm text-brand-muted">
            Mesai saatleri içerisinde ulaşabilirsiniz.
          </p>
          <a href={siteConfig.phoneHref} className="mt-3 block text-sm font-medium text-brand-accent">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="mt-1 block text-sm font-medium text-brand-accent">
            {siteConfig.email}
          </a>
        </div>

        <div className="card-glow rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-semibold text-white">Çalışma Saatleri</h2>
          <ul className="mt-3 space-y-1 text-sm text-brand-muted">
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="font-medium text-white">{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-glow rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h2 className="font-semibold text-white">Ofisimiz</h2>
          <p className="mt-2 text-sm text-brand-muted">
            {siteConfig.address.line1}
            <br />
            {siteConfig.address.district} / {siteConfig.address.city}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-white">
              Bize E-posta İle Ulaşın
            </h2>
            <p className="mb-4 text-sm text-brand-muted">
              Formu doldurun, en kısa sürede sizinle iletişime geçelim.
            </p>
            <ContactForm />
          </div>
          <div className="min-h-[320px] overflow-hidden rounded-2xl border border-brand-border">
            <iframe
              title="Ebil Bilişim Konum"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
