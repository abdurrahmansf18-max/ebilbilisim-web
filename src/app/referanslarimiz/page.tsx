import type { Metadata } from "next";
import { referenceLogos, referenceNames, partnerLogos } from "@/lib/references";
import LogoStrip from "@/components/LogoStrip";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Ankara Üniversitesi, TRT, VakıfBank, Roketsan ve daha fazlası — Ebil Bilişim'in gerçekleştirdiği projelerden seçkin referanslar.",
};

export default function ReferanslarimizPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-brand-primary-dark sm:text-4xl">
          Referanslarımız
        </h1>
        <p className="mt-4 text-black/60">
          Kamu kurumları ve özel sektörden başlıca referanslarımız aşağıda listelenmiştir.
        </p>
      </div>

      <div className="mt-14">
        <LogoStrip logos={referenceLogos} />
      </div>

      <div className="mt-14 rounded-2xl bg-brand-surface p-8">
        <h2 className="text-lg font-semibold text-brand-primary-dark">Ve daha fazlası...</h2>
        <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-black/70 sm:grid-cols-2 lg:grid-cols-3">
          {referenceNames.map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-center text-2xl font-bold text-brand-primary-dark">
          Çözüm Ortaklarımız
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-black/60">
          Sektörün önde gelen teknoloji markalarıyla çalışıyoruz.
        </p>
        <div className="mt-10">
          <LogoStrip logos={partnerLogos} />
        </div>
      </div>
    </div>
  );
}
