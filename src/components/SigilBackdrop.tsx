// Subtle decorative backdrop: a slowly rotating sigil + faint runic ring.
// Pure SVG, no external assets. Stays behind all content.
const SigilBackdrop = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Top-right sigil */}
      <svg
        viewBox="0 0 400 400"
        className="absolute -top-32 -right-32 w-[480px] h-[480px] opacity-[0.07] animate-rune-spin text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="200" cy="200" r="180" />
        <circle cx="200" cy="200" r="150" strokeDasharray="2 6" />
        <circle cx="200" cy="200" r="110" />
        <polygon points="200,40 340,280 60,280" />
        <polygon points="200,360 60,120 340,120" />
        <circle cx="200" cy="200" r="30" />
        <text
          x="200"
          y="206"
          textAnchor="middle"
          fontSize="14"
          fontFamily="Space Grotesk"
          letterSpacing="6"
          fill="currentColor"
          stroke="none"
        >
          ⟁ ◇ ⟁
        </text>
      </svg>

      {/* Bottom-left sigil */}
      <svg
        viewBox="0 0 400 400"
        className="absolute -bottom-40 -left-40 w-[520px] h-[520px] opacity-[0.05] text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="200" cy="200" r="190" />
        <circle cx="200" cy="200" r="160" strokeDasharray="1 4" />
        <path d="M200 20 L200 380 M20 200 L380 200" />
        <path d="M60 60 L340 340 M340 60 L60 340" />
        <circle cx="200" cy="200" r="60" />
      </svg>

      {/* Faint runic strip on the right edge */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-[10px] tracking-[0.4em] text-muted-foreground/40 [writing-mode:vertical-rl]">
        <span>⟁ NORTH ⟁ SOUTH ⟁ EAST ⟁ WEST ⟁</span>
      </div>
    </div>
  );
};

export default SigilBackdrop;
