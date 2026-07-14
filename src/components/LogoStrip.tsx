import Image from "next/image";
import type { Logo } from "@/lib/references";

export default function LogoStrip({ logos }: { logos: Logo[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-20 items-center justify-center rounded-xl border border-black/5 bg-white p-4 grayscale transition-all hover:grayscale-0"
          title={logo.name}
        >
          <Image
            src={logo.image}
            alt={logo.name}
            width={120}
            height={48}
            className="max-h-10 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
