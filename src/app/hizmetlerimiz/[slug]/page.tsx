import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import ServiceIcon from "@/components/ServiceIcon";

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
      images: service.visual.type === "photo" ? [service.visual.src] : undefined,
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
      <div className="relative h-72 w-full overflow-hidden sm:h-96">
        {service.visual.type === "photo" ? (
          <>
            <Image
              src={service.visual.src}
              alt={service.visual.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-primary-dark/60" />
          </>
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${service.visual.gradient} bg-brand-primary-dark`}>
            <ServiceIcon
              icon={service.visual.icon}
              className="absolute -bottom-10 -right-10 h-64 w-64 text-white/10"
            />
          </div>
        )}
        <div className="glow-orb top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 bg-brand-accent/25" />
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
          <h1 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
            {service.title}
          </h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="text-lg leading-relaxed text-brand-muted">{service.description}</p>

          <h2 className="mt-10 text-xl font-semibold text-white">
            Kapsam dahilindeki hizmetler
          </h2>
          <ul className="mt-4 space-y-3">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-brand-muted">
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

        <aside className="h-fit rounded-2xl border border-brand-border bg-brand-surface p-6">
          <h3 className="font-semibold text-white">Ücretsiz keşif talep edin</h3>
          <p className="mt-2 text-sm text-brand-muted">
            Projeniz için en uygun çözümü birlikte belirleyelim.
          </p>
          <a
            href={siteConfig.phoneHref}
            className="btn-glow mt-4 block rounded-full bg-brand-accent px-5 py-3 text-center text-sm font-semibold text-brand-primary-dark hover:brightness-110"
          >
            {siteConfig.phone}
          </a>
          <Link
            href="/iletisim"
            className="mt-3 block rounded-full border border-white/15 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/5"
          >
            İletişim Formu
          </Link>
        </aside>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <h2 className="text-lg font-semibold text-white">Diğer Hizmetlerimiz</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {services
            .filter((s) => s.slug !== service.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/hizmetlerimiz/${s.slug}`}
                className="rounded-full border border-brand-border px-4 py-2 text-sm text-brand-muted hover:border-brand-accent/40 hover:text-white"
              >
                {s.title}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
