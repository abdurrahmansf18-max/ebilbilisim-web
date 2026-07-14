"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/lib/site-config";

const inputClasses =
  "mt-1 w-full rounded-lg border border-brand-border bg-brand-surface-2 px-4 py-2.5 text-sm text-white placeholder:text-brand-muted focus:border-brand-accent focus:outline-none";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Web sitesi iletişim formu — ${name}`);
    const body = encodeURIComponent(`${message}\n\nGönderen: ${name}\nE-posta: ${email}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Ad Soyad
        </label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white">
          E-posta
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Mesajınız
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
        />
      </div>
      <button
        type="submit"
        className="btn-glow w-full rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-primary-dark transition hover:brightness-110"
      >
        Gönder
      </button>
    </form>
  );
}
