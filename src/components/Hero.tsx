import Link from "next/link";
import SealBadge from "./SealBadge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-navy bg-cream">
      <div className="halftone-bg absolute inset-0" />
      <div className="grain-overlay" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
        <div>
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 max-w-10 bg-maroon sm:max-w-14" />
            <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-maroon sm:text-sm">
              Online Running Coach
            </p>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Run coaching built on <span className="text-maroon">grit</span>,
            not gimmicks
          </h1>

          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-navy/80 sm:text-xl">
            Real training for real runners with real lives. Built around your
            goals, your schedule and the next goal you&apos;re chasing. From
            your first 5k to your fastest marathon.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="rounded-sm border-2 border-maroon bg-maroon px-7 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-widest text-cream transition-colors hover:bg-maroon-dark hover:border-maroon-dark"
            >
              Start Your Plan
            </Link>
            <Link
              href="/results"
              className="rounded-sm border-2 border-navy px-7 py-3.5 text-center font-sans text-sm font-bold uppercase tracking-widest text-navy transition-colors hover:bg-navy hover:text-cream"
            >
              See Results
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-10 bg-navy/40" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-navy/60">
              5K &nbsp;·&nbsp; 10K &nbsp;·&nbsp; Half &nbsp;·&nbsp; Marathon &nbsp;·&nbsp; Ultra
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <SealBadge className="w-56 drop-shadow-[6px_6px_0_var(--color-navy)] sm:w-72" />
        </div>
      </div>
    </section>
  );
}
