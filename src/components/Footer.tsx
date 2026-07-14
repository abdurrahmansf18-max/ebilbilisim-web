import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-brand-primary-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">{siteConfig.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {siteConfig.founded} yılından bu yana Ankara Gölbaşı merkezli; kamera,
            güvenlik, network ve elektrik altyapı çözümleri sunuyoruz.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Hizmetlerimiz
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/hizmetlerimiz/${s.slug}`} className="text-white/80 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">Kurumsal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/kurumsal" className="text-white/80 hover:text-white">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/referanslarimiz" className="text-white/80 hover:text-white">
                Referanslarımız
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="text-white/80 hover:text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Bize Ulaşın
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address.full}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        Copyright © {new Date().getFullYear()} {siteConfig.name} — Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
