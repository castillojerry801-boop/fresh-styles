import Image from "next/image";
import { notFound } from "next/navigation";
import { barberGalleries } from "@/lib/gallery";

export function generateStaticParams() {
  return barberGalleries.map((b) => ({ barber: b.slug }));
}

export default async function BarberGalleryPage({
  params,
}: {
  params: Promise<{ barber: string }>;
}) {
  const { barber: slug } = await params;
  const barber = barberGalleries.find((b) => b.slug === slug);
  if (!barber) notFound();

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
            href="/gallery"
            className="text-xs tracking-widest text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-oswald)]"
          >
            ← PORTFOLIOS
          </a>
        </div>
      </header>

      <section className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#C8952A]" />
              <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
                {barber.role}
              </span>
              <div className="w-10 h-[1px] bg-[#C8952A]" />
            </div>
            <h1
              className="font-[family-name:var(--font-oswald)] font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              {barber.name}
            </h1>
            <p className="text-gray-400 mt-4 text-sm">
              {barber.photos.length} photos
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {barber.photos.map((src, i) => (
              <div key={i} className="group relative overflow-hidden break-inside-avoid">
                <Image
                  src={src}
                  alt={`${barber.name} cut ${i + 1}`}
                  width={800}
                  height={1000}
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16 border-t border-[#2a2a2a] pt-12">
            <p className="text-gray-400 text-sm mb-4">Ready to book with {barber.name}?</p>
            <a
              href={barber.booksy}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C8952A] text-black text-xs font-bold tracking-widest px-10 py-4 hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
            >
              BOOK WITH {barber.name} →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
