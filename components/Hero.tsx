export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        {/* Dark overlay gradient from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/85 to-[#0d0d0d]/40 z-10" />
        {/* Placeholder barber image area */}
        <div className="absolute right-0 top-0 w-[55%] h-full bg-[#111111] flex items-center justify-center">
          <div className="text-[#2a2a2a] text-xs tracking-widest font-[family-name:var(--font-oswald)]">
            [ BARBER PHOTO ]
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-[70px] w-full">
        {/* Location tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-[2px] bg-[#C8952A]" />
          <span className="text-xs tracking-[4px] text-gray-400 font-[family-name:var(--font-oswald)]">
            LAYTON, UTAH · EST. 2021
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-[family-name:var(--font-oswald)] font-bold leading-[0.9] mb-6">
          <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
            FRESH CUTS.
          </span>
          <span
            className="block text-[#C8952A]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            CLEAN FADES.
          </span>
          <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}>
            REAL SKILL.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 text-base max-w-sm mb-10 leading-relaxed">
          Layton&apos;s premier destination for precision haircuts, clean fades, and beard
          services. Walk in looking good. Leave looking great.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#services"
            className="bg-[#C8952A] text-black text-xs font-bold tracking-widest px-8 py-4 hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
          >
            BOOK YOUR CUT
          </a>
          <a
            href="#services"
            className="border border-white text-white text-xs font-bold tracking-widest px-8 py-4 hover:bg-white hover:text-black transition-colors font-[family-name:var(--font-oswald)]"
          >
            SEE SERVICES
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-10 z-20 flex flex-col items-center gap-2">
        <span className="text-[10px] tracking-[4px] text-gray-500 font-[family-name:var(--font-oswald)] [writing-mode:vertical-rl]">
          SCROLL
        </span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
