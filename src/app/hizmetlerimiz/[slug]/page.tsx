import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div>
      <div className="relative h-72 w-full sm:h-96">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary-dark/55" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-black/70">{service.description}</p>

          <h2 className="mt-10 text-xl font-semibold text-brand-primary-dark">
            Kapsam dahilindeki hizmetler
          </h2>
          <ul className="mt-4 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-black/70">
                <svg
                  className="mt-1 h-4 w-4 flex-shrink-0 text-brand-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-2xl bg-brand-surface p-6">
          <h3 className="font-semibold text-brand-primary-dark">Ücretsiz keşif talep edin</h3>
          <p className="mt-2 text-sm text-black/60">
            Projeniz için en uygun çözümü birlikte belirleyelim.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="mt-4 block rounded-full bg-brand-primary px-5 py-3 text-center text-sm font-semibold text-white hover:bg-brand-primary-dark"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/iletisim"
            className="mt-3 block rounded-full border border-brand-primary/20 px-5 py-3 text-center text-sm font-semibold text-brand-primary-dark hover:bg-white"
          >
            İletişim Formu
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="text-lg font-semibold text-brand-primary-dark">Diğer Hizmetlerimiz</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-brand-primary-dark hover:bg-brand-surface"
              >
                {s.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
