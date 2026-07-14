import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";
import { partnerLogos, referenceLogos } from "@/lib/references";
import ServiceCard from "@/components/ServiceCard";
import LogoStrip from "@/components/LogoStrip";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero/golbasi-guvenlik-sistemleri-hero.jpg"
          alt="Gölbaşı Ankara kamera ve güvenlik sistemleri"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary-dark/70 via-brand-primary-dark/75 to-background" />
        <div className="glow-orb -top-20 left-1/4 h-96 w-96 bg-brand-accent/30" />
        <div className="glow-orb top-1/3 right-1/4 h-80 w-80 bg-brand-primary/40" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center text-white sm:px-6">
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            {siteConfig.founded}&apos;den bu yana kamera, alarm, yangın algılama ve
            network altyapı çözümleri sunuyoruz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="btn-glow rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-brand-primary-dark transition hover:brightness-110"
            >
              Ücretsiz Keşif Talep Edin
            </Link>
            <Link
              href="/hizmetlerimiz"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Hizmetlerimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="border-y border-white/5 bg-brand-surface py-10">
        <p className="mx-auto max-w-3xl px-4 text-center text-lg font-medium text-white sm:px-6">
          Kusursuz hizmet ve üstün teknoloji ile güvencemiz altındasınız.
        </p>
      </section>

      {/* Hizmetlerimiz */}
      <section className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Hizmetlerimiz
          </h2>
          <p className="mt-2 text-3xl font-bold text-white">
            Gölbaşı ve Ankara genelinde uçtan uca çözümler
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Kurumsal özet */}
      <section className="relative overflow-hidden bg-brand-primary-dark py-20 text-white">
        <div className="glow-orb -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 bg-brand-accent/20" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">Ebil Bilişim İnovatif ve Creative Çözümler Sunar</h2>
          <p className="mt-4 text-white/70">
            {siteConfig.founded} yılında İlkadım Bilgisayar olarak kurulan şirketimiz, 2013
            yılından bu yana E-bil Bilişim ve Teknoloji Hizmetleri adıyla kamu ve özel sektöre
            teknolojik danışmanlık, alt yapı kablolama ve ürün tedariği alanlarında hizmet
            vermektedir.
          </p>
          <Link
            href="/kurumsal"
            className="mt-6 inline-block rounded-full border border-white/25 px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            Kurumsal Hakkımızda
          </Link>
        </div>
      </section>

      {/* Çözüm Ortakları */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-white">Çözüm Ortaklarımız</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-brand-muted">
          Sektörün önde gelen teknoloji markalarıyla çalışıyoruz.
        </p>
        <div className="mt-10">
          <LogoStrip logos={partnerLogos} />
        </div>
      </section>

      {/* Referanslar */}
      <section className="border-y border-white/5 bg-brand-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-white">Referanslarımız</h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-brand-muted">
            Kamu kurumları ve özel sektörden seçkin müşterilerimiz.
          </p>
          <div className="mt-10">
            <LogoStrip logos={referenceLogos.slice(0, 10)} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/referanslarimiz"
              className="text-sm font-semibold text-brand-accent hover:underline"
            >
              Tüm referanslarımızı görün →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-20 text-center sm:px-6">
        <div className="glow-orb top-0 left-1/2 h-72 w-72 -translate-x-1/2 bg-brand-primary/30" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Projeleriniz bizim için önemli!
          </h2>
          <p className="mt-3 text-brand-muted">
            Bugün bir Ebil Bilişim uzmanıyla görüşün — {siteConfig.phone}
          </p>
          <Link
            href="/iletisim"
            className="btn-glow mt-6 inline-block rounded-full bg-brand-accent px-8 py-3.5 text-sm font-semibold text-brand-primary-dark transition hover:brightness-110"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </>
  );
}
