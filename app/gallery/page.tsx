import Image from "next/image";
import { barberGalleries } from "@/lib/gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(0,0,0,0.58)" }}>
        <div className="max-w-7xl mx-auto pl-2 pr-6 flex items-center justify-between h-[90px]">
          <a href="/">
            <Image
              src="/images/logo-2025.png"
              alt="Fresh Styles Barbershop"
              width={90}
              height={90}
              className="object-contain h-[90px] w-[90px]"
              priority
            />
          </a>
          <a
            href="/"
            className="text-xs tracking-widest text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-oswald)]"
          >
            ← BACK
          </a>
        </div>
      </header>

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#C8952A]" />
              <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
                THE WORK
              </span>
              <div className="w-10 h-[1px] bg-[#C8952A]" />
            </div>
            <h1
              className="font-[family-name:var(--font-oswald)] font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              PORTFOLIOS
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Pick a barber to see their work.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {barberGalleries.map((barber) => (
              <a
                key={barber.slug}
                href={`/gallery/${barber.slug}`}
                className="group relative block w-full h-[480px] overflow-hidden"
              >
                <Image
                  src={barber.profileImage}
                  alt={barber.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-8 h-[2px] bg-[#C8952A] mb-2" />
                  <p className="text-[10px] tracking-[3px] text-[#C8952A] font-[family-name:var(--font-oswald)] mb-1">
                    {barber.role}
                  </p>
                  <p className="text-white text-xl font-bold tracking-widest font-[family-name:var(--font-oswald)]">
                    {barber.name}
                  </p>
                  <p className="text-gray-400 text-[10px] tracking-[2px] font-[family-name:var(--font-oswald)] mt-1 mb-3">
                    {barber.photos.length} PHOTOS
                  </p>
                  <span className="inline-block text-[10px] tracking-widest text-black bg-[#C8952A] px-4 py-2 font-[family-name:var(--font-oswald)] font-bold group-hover:bg-[#D4A843] transition-colors">
                    VIEW PORTFOLIO →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
