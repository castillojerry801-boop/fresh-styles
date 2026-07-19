const services = [
  {
    title: "Haircuts",
    description:
      "Precision cuts tailored to your style — classic, skin fade, taper, and everything in between.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: "Skin & Taper Fades",
    description:
      "Zero to skin or clean taper — seamless blends with sharp edges and a fresh finish every time.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18M3 12h18M3 17h18" />
        <path d="M7 4l-4 8 4 8" />
      </svg>
    ),
  },
  {
    title: "Beard Services",
    description:
      "Shape, trim, and define your beard with a precision lineup, trim, or hot towel straight razor shave.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7.5C20 7.5 17 3 12 3S4 7.5 4 7.5v6c0 4 3.5 7.5 8 7.5s8-3.5 8-7.5v-6z" />
        <path d="M9 14s1 1 3 1 3-1 3-1" />
        <line x1="9" y1="10" x2="9.01" y2="10" />
        <line x1="15" y1="10" x2="15.01" y2="10" />
      </svg>
    ),
  },
  {
    title: "Hot Towel Straight Razor Shave",
    description:
      "A full traditional shave with hot towel prep, straight razor precision, and skin treatment finish.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21l13-13" />
        <path d="M16 8l2-2a2.83 2.83 0 0 1 4 4l-2 2-4-4z" />
        <path d="M3 21l4-1 10-10-3-3L4 17l-1 4z" />
      </svg>
    ),
  },
  {
    title: "Combo Packages",
    description:
      "Get the full treatment — haircut plus beard trim, shape up, or hot towel shave all in one visit.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <path d="M9 6h6a1 1 0 0 1 1 1v2a4 4 0 0 1-4 4 4 4 0 0 1-4-4V7a1 1 0 0 1 1-1z" />
        <line x1="12" y1="13" x2="12" y2="17" />
        <path d="M8 17h8" />
        <path d="M10 21h4" />
      </svg>
    ),
  },
  {
    title: "Kids Cuts",
    description:
      "Fresh, clean cuts for the little ones. We make sure every kid leaves looking their best.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" />
        <path d="M2 21v-1a8 8 0 0 1 16 0v1" />
        <path d="M9 9l1.5 1.5L13 8" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              WHAT WE DO
            </span>
            <div className="w-10 h-[1px] bg-[#C8952A]" />
          </div>
          <h2
            className="font-[family-name:var(--font-oswald)] font-bold text-white leading-tight"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
          >
            OUR SERVICES
          </h2>
          <p className="text-gray-400 mt-4 text-sm tracking-wide">
            Every cut. Every fade. Every beard. Done right, every time.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#161616] border border-[#2a2a2a] p-10 flex flex-col items-center text-center hover:border-[#C8952A]/50 transition-colors group"
            >
              <div className="text-[#C8952A] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-oswald)] font-bold text-white text-xl tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://booksy.com/en-us/493423_juan-ortiz-fresh-styles_barber-shop_37712_layton#ba_s=sr_1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C8952A] text-black text-xs font-bold tracking-widest px-10 py-4 hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
          >
            BOOK YOUR APPOINTMENT →
          </a>
        </div>
      </div>
    </section>
  );
}
