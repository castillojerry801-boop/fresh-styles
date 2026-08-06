import Image from "next/image";
import { galleryPhotos } from "@/lib/gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      {/* Simple header */}
      <header className="fixed top-0 left-0 right-0 z-50">
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
          {/* Header */}
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
              FRESH CUTS
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              Real work. Real results. Every time.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className="group relative overflow-hidden break-inside-avoid">
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {photo.barber && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-6 h-[2px] bg-[#C8952A] mb-1" />
                    <p className="text-[10px] tracking-[3px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
                      CUT BY
                    </p>
                    <p className="text-white font-bold tracking-widest font-[family-name:var(--font-oswald)]">
                      {photo.barber}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
