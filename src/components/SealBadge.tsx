export default function SealBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Tommy Knight Coaching seal"
    >
      <defs>
        <path id="seal-circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
      </defs>

      <circle cx="100" cy="100" r="96" fill="var(--color-mustard)" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="var(--color-navy)" strokeWidth="2" />
      <circle cx="100" cy="100" r="60" fill="var(--color-navy)" />

      <text fill="var(--color-cream)" fontSize="10.5" fontFamily="var(--font-display)" letterSpacing="2.5">
        <textPath href="#seal-circle" startOffset="1%">
          TOMMY KNIGHT COACHING • EST. 2022 •
        </textPath>
      </text>

      <g stroke="var(--color-mustard)" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M60 118 L78 88 L92 104 L112 68 L128 92" />
      </g>
      <circle cx="128" cy="92" r="4.5" fill="var(--color-mustard)" />
    </svg>
  );
}
