"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-navy bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-10">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-2 sm:flex-none sm:gap-3"
        >
          <Image
            src="/logo-icon.png"
            alt=""
            width={931}
            height={433}
            priority
            className="h-6 w-auto shrink-0 sm:h-10"
          />
          <span className="truncate font-display text-sm font-bold uppercase text-navy sm:text-xl sm:tracking-wide">
            Tommy Knight <span className="text-maroon">Coaching</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-sm border-2 border-maroon bg-maroon px-7 py-3.5 font-sans text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:bg-maroon-dark hover:border-maroon-dark"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border-2 border-navy text-navy sm:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="flex flex-col gap-1 border-t-4 border-navy bg-cream px-6 py-4 sm:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-2 py-3 font-sans text-sm font-semibold uppercase tracking-widest text-navy transition-colors hover:text-maroon"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm border-2 border-maroon bg-maroon px-4 py-3 text-center font-sans text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:bg-maroon-dark hover:border-maroon-dark"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
