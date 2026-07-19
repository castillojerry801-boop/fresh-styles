interface Service {
  name: string;
  price: string;
  description: string;
  duration: string;
}

interface ServiceCategory {
  title: string;
  subtitle: string;
  icon: string;
  services: Service[];
}

const categories: ServiceCategory[] = [
  {
    title: "HAIRCUTS",
    subtitle: "Precision cuts tailored to your style",
    icon: "✂",
    services: [
      {
        name: "CLASSIC HAIRCUT",
        price: "$25",
        description: "Scissors and/or clipper cut, styled to perfection.",
        duration: "30 MIN",
      },
      {
        name: "SKIN FADE",
        price: "$30",
        description: "Zero to skin with a seamless blend up to your desired length.",
        duration: "45 MIN",
      },
      {
        name: "TAPER FADE",
        price: "$30",
        description: "Clean taper with sharp edges and a fresh finish.",
        duration: "45 MIN",
      },
      {
        name: "DESIGN / PART LINE",
        price: "+$5",
        description: "Custom razor design or part added to any cut.",
        duration: "+15 MIN",
      },
    ],
  },
  {
    title: "BEARD SERVICES",
    subtitle: "Shape, trim, and define your beard",
    icon: "⚡",
    services: [
      {
        name: "BEARD TRIM",
        price: "$15",
        description: "Clipper and scissor trim to clean up your beard.",
        duration: "20 MIN",
      },
      {
        name: "BEARD SHAPE UP",
        price: "$20",
        description: "Razor line-up and shape with a hot towel finish.",
        duration: "30 MIN",
      },
      {
        name: "HOT TOWEL STRAIGHT RAZOR SHAVE",
        price: "$35",
        description: "Full traditional shave with hot towel, straight razor, and skin treatment.",
        duration: "45 MIN",
      },
    ],
  },
  {
    title: "COMBO PACKAGES",
    subtitle: "Cut and beard — the full treatment",
    icon: "★",
    services: [
      {
        name: "CUT + BEARD COMBO",
        price: "$40",
        description: "Full haircut plus beard trim or shape up.",
        duration: "60 MIN",
      },
      {
        name: "FULL GROOMING PACKAGE",
        price: "$60",
        description: "Haircut, beard shape, and hot towel straight razor finish.",
        duration: "90 MIN",
      },
    ],
  },
  {
    title: "KIDS",
    subtitle: "Fresh cuts for the little ones",
    icon: "◆",
    services: [
      {
        name: "KIDS HAIRCUT (12 & UNDER)",
        price: "$20",
        description: "A clean, styled cut for the youngest clients.",
        duration: "30 MIN",
      },
    ],
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-[#161616] border border-[#2a2a2a] p-6 flex flex-col justify-between hover:border-[#C8952A]/40 transition-colors">
      <div>
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-[family-name:var(--font-oswald)] font-semibold text-sm tracking-widest text-white pr-4">
            {service.name}
          </h4>
          <span className="font-[family-name:var(--font-oswald)] font-bold text-xl text-[#C8952A] shrink-0">
            {service.price}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
      </div>
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#2a2a2a]">
        <span className="text-[11px] text-gray-500 tracking-widest font-[family-name:var(--font-oswald)]">
          {service.duration}
        </span>
        <a
          href="#"
          className="text-[11px] text-[#C8952A] tracking-widest hover:text-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
        >
          BOOK →
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
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

        {/* Categories */}
        <div className="flex flex-col gap-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#C8952A] text-xl">{cat.icon}</span>
                <div>
                  <h3 className="font-[family-name:var(--font-oswald)] font-bold text-lg tracking-widest text-white">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{cat.subtitle}</p>
                </div>
                <div className="flex-1 h-[1px] bg-[#2a2a2a] ml-4" />
              </div>

              {/* Service cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
