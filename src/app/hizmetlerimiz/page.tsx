import type { Metadata } from "next";
import { services } from "@/lib/services";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Kamera ve güvenlik sistemleri, yangın algılama, network altyapı, elektrik taahhüt ve daha fazlası — Ankara ve Gölbaşı genelinde.",
};

export default function HizmetlerimizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Hizmetlerimiz
        </h1>
        <p className="mt-4 text-brand-muted">
          Gölbaşı ve Ankara genelinde konut, site ve işyerleri için uçtan uca teknoloji
          ve altyapı çözümleri sunuyoruz.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
