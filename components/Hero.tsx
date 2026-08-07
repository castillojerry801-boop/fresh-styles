export default function Hero() {
  return (
    <>
      {/* Screen 1 — tint starts barely visible and builds as you scroll toward Screen 2 */}
      <section className="relative z-10 min-h-screen">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.45) 100%)" }}
        />
        <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] tracking-[4px] text-gray-300 font-[family-name:var(--font-oswald)] [writing-mode:vertical-rl]">
            SCROLL
          </span>
          <div className="w-[1px] h-14 bg-gradient-to-b from-gray-300 to-transparent" />
        </div>
      </section>

      {/* Screen 2 — tint picks up and deepens, text sits comfortably over the background */}
      <section className="relative z-10 min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.58) 100%)" }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-white font-[family-name:var(--font-oswald)]">
              LAYTON, UTAH · EST. 2021
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-oswald)] font-bold leading-[0.9] mb-6">
            <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}>
              FRESH CUTS.
            </span>
            <span className="block text-[#C8952A]" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}>
              CLEAN FADES.
            </span>
            <span className="block text-white" style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}>
              REAL SKILL.
            </span>
          </h1>
          <p className="text-white text-base max-w-lg mb-10 leading-relaxed">
            Layton&apos;s Premier Barbershop. Conveniently located on Hill Field Road, minutes
            from the Hill Air Force Base gate. From clean fades and sharp cuts to detailed beard
            services, we deliver quality work that keeps you looking fresh and confident.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/book"
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
      </section>
    </>
  );
}
