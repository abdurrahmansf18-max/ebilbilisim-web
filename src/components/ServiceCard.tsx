import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/services";
import ServiceIcon from "@/components/ServiceIcon";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/hizmetlerimiz/${service.slug}`}
      className="card-glow group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-surface"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {service.visual.type === "photo" ? (
          <Image
            src={service.visual.src}
            alt={service.visual.alt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${service.visual.gradient} bg-brand-surface-2`}
          >
            <ServiceIcon
              icon={service.visual.icon}
              className="h-16 w-16 text-brand-accent transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
          {service.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
          Daha fazla bilgi edin
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
