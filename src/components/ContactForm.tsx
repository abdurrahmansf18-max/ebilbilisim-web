"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Web sitesi iletişim formu — ${name}`);
    const body = encodeURIComponent(`${message}\n\nGönderen: ${name}\nE-posta: ${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-primary-dark">
          Ad Soyad
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-primary-dark">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-primary-dark">
          Mesajınız
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2.5 text-sm focus:border-brand-accent focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
      >
        Gönder
      </button>
    </form>
  );
}
