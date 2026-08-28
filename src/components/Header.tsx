import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="border-b-4 border-navy bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 sm:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt=""
            width={931}
            height={433}
            priority
            className="h-8 w-auto sm:h-10"
          />
          <span className="font-display text-lg font-bold uppercase tracking-wide text-navy sm:text-xl">
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

        <Link
          href="/contact"
          className="rounded-sm border-2 border-navy bg-navy px-4 py-2 font-sans text-xs font-bold uppercase tracking-widest text-cream transition-colors hover:bg-maroon hover:border-maroon sm:hidden"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
