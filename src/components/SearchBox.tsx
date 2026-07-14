"use client";

import { useMemo, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/lib/services";

type SearchItem = { title: string; href: string; group: string };

const staticPages: SearchItem[] = [
  { title: "Anasayfa", href: "/", group: "Sayfa" },
  { title: "Hizmetlerimiz", href: "/hizmetlerimiz", group: "Sayfa" },
  { title: "Kurumsal", href: "/kurumsal", group: "Sayfa" },
  { title: "Referanslarımız", href: "/referanslarimiz", group: "Sayfa" },
  { title: "İletişim", href: "/iletisim", group: "Sayfa" },
];

const searchIndex: SearchItem[] = [
  ...staticPages,
  ...services.map((s) => ({ title: s.title, href: `/hizmetlerimiz/${s.slug}`, group: "Hizmet" })),
];

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return [];
    return searchIndex.filter((item) => item.title.toLocaleLowerCase("tr").includes(q)).slice(0, 6);
  }, [query]);

  function close() {
    setOpen(false);
    setQuery("");
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (results[0]) {
      router.push(results[0].href);
      close();
    }
  }

  return (
    <div className="relative">
      {open ? (
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            ref={inputRef}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onBlur={() => setTimeout(close, 150)}
            placeholder="Hizmet veya sayfa ara…"
            className="w-40 rounded-full border border-brand-border bg-brand-surface-2 px-4 py-1.5 text-sm text-white placeholder:text-brand-muted focus:border-brand-accent focus:outline-none sm:w-56"
          />
          {results.length > 0 && (
            <ul className="absolute top-full right-0 mt-2 w-64 overflow-hidden rounded-xl border border-brand-border bg-brand-surface shadow-xl">
              {results.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between px-4 py-2.5 text-sm text-white/85 hover:bg-white/5"
                  >
                    {item.title}
                    <span className="text-xs text-brand-muted">{item.group}</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </form>
      ) : (
        <button
          type="button"
          aria-label="Ara"
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-white/80 transition-colors hover:bg-white/5 hover:text-brand-accent"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
