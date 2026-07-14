import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/kurumsal", label: "Kurumsal" },
  { href: "/referanslarimiz", label: "Referanslarımız" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/ebil-logo.png"
            alt={siteConfig.name}
            width={140}
            height={34}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-primary-dark transition-colors hover:text-brand-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.phoneHref}
          className="hidden rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark sm:inline-block"
        >
          {siteConfig.phone}
        </a>

        {/* Mobile nav */}
        <details className="md:hidden">
          <summary className="list-none rounded-md p-2 text-brand-primary-dark [&::-webkit-details-marker]:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            </svg>
          </summary>
          <div className="absolute inset-x-0 top-full border-b border-black/5 bg-white px-4 py-4 shadow-lg">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm font-medium text-brand-primary-dark hover:bg-brand-surface"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={siteConfig.phoneHref}
                className="mt-2 rounded-full bg-brand-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                {siteConfig.phone}
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
