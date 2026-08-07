import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { barbers } from "@/lib/barbers";


export default function Home() {
  return (
    <main className="relative">
      {/* Fixed background — chairs + logo stay put the whole time */}
      <div className="fixed inset-0 z-0">
        {/* Mobile: portrait interior shot */}
        <Image
          src="/images/hero-bg-mobile.png"
          alt="Fresh Styles Barbershop interior"
          fill
          className="object-cover object-center block md:hidden"
          priority
          quality={90}
        />
        {/* Desktop: landscape chairs photo */}
        <Image
          src="/images/hero-bg.jpeg"
          alt="Fresh Styles Barbershop interior"
          fill
          className="object-cover object-center hidden md:block"
          priority
          quality={90}
        />
        {/* Logo floats over chairs */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logo-2025.png"
            alt="Fresh Styles Barbershop"
            width={560}
            height={560}
            className="object-contain w-[280px] sm:w-[400px] lg:w-[560px]"
            priority
          />
        </div>
      </div>

      <Navbar />
      <Hero />

      <div className="relative z-10" style={{ background: "rgba(0,0,0,0.58)" }}>

      {/* Award banner */}
      <div className="border-y border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Image
            src="/images/award.jpeg"
            alt="Best of Davis County 2025 - 1st Place"
            width={90}
            height={90}
            className="object-contain"
          />
          <div>
            <p className="text-[10px] tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)] mb-1">
              STANDARD-EXAMINER · READERS CHOICE AWARDS
            </p>
            <p className="text-white text-2xl font-bold tracking-widest font-[family-name:var(--font-oswald)] leading-tight">
              BEST OF DAVIS COUNTY 2025
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Voted #1 Barbershop in Davis County
            </p>
          </div>
        </div>
      </div>

      <Services />

      {/* Our Team */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#C8952A]" />
              <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
                THE CREW
              </span>
              <div className="w-10 h-[1px] bg-[#C8952A]" />
            </div>
            <h2
              className="font-[family-name:var(--font-oswald)] font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}
            >
              OUR TEAM
            </h2>
            <p className="text-gray-400 mt-4 text-sm">
              Skilled hands. Sharp lines. Every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {barbers.map((barber, i) => {
              const Card = barber.image ? (
                <div className="group relative w-full h-[520px] overflow-hidden">
                  <Image
                    src={barber.image}
                    alt={barber.name ?? "Fresh Styles barber"}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-8 h-[2px] bg-[#C8952A] mb-2" />
                    <p className="text-[10px] tracking-[3px] text-[#C8952A] font-[family-name:var(--font-oswald)] mb-1">
                      {barber.role}
                    </p>
                    <p className="text-white text-xl font-bold tracking-widest font-[family-name:var(--font-oswald)]">
                      {barber.name}
                    </p>
                    {barber.years && (
                      <p className="text-gray-400 text-[10px] tracking-[2px] font-[family-name:var(--font-oswald)] mt-1">
                        {barber.years} YRS EXPERIENCE
                      </p>
                    )}
                    <span className="inline-block mt-3 text-[10px] tracking-widest text-black bg-[#C8952A] px-3 py-1 font-[family-name:var(--font-oswald)] font-bold group-hover:bg-[#D4A843] transition-colors">
                      BOOK NOW →
                    </span>
                  </div>
                </div>
              ) : (
                <div className="group relative w-full h-[520px] overflow-hidden flex flex-col items-center justify-end bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#C8952A]/40 transition-colors">
                  <div className="relative z-10 w-full p-6">
                    <div className="w-8 h-[2px] bg-[#C8952A] mb-2" />
                    <p className="text-[10px] tracking-[3px] text-[#C8952A] font-[family-name:var(--font-oswald)] mb-1">
                      {barber.role}
                    </p>
                    <p className="text-white text-xl font-bold tracking-widest font-[family-name:var(--font-oswald)]">
                      {barber.name}
                    </p>
                    {barber.years && (
                      <p className="text-gray-400 text-[10px] tracking-[2px] font-[family-name:var(--font-oswald)] mt-1 mb-3">
                        {barber.years} YRS EXPERIENCE
                      </p>
                    )}
                    {!barber.years && <div className="mb-3" />}
                    {barber.booksy ? (
                      <span className="inline-block text-[10px] tracking-widest text-black bg-[#C8952A] px-4 py-2 font-[family-name:var(--font-oswald)] font-bold group-hover:bg-[#D4A843] transition-colors">
                        BOOK NOW →
                      </span>
                    ) : (
                      <span className="inline-block text-[10px] tracking-widest text-[#C8952A] border border-[#C8952A] px-4 py-2 font-[family-name:var(--font-oswald)] font-bold">
                        COMING SOON
                      </span>
                    )}
                  </div>
                </div>
              );
              return barber.booksy ? (
                <a key={i} href={barber.booksy} target="_blank" rel="noopener noreferrer">
                  {Card}
                </a>
              ) : (
                <div key={i}>{Card}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              GOT QUESTIONS
            </span>
            <div className="w-10 h-[1px] bg-[#C8952A]" />
          </div>
          <h2
            className="font-[family-name:var(--font-oswald)] font-bold text-white text-center"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}
          >
            FAQ
          </h2>
          <div className="mt-12 flex flex-col gap-4">
            {[
              {
                q: "Do you take walk-ins?",
                a: "Yes! Walk-ins are always welcome, but booking ahead guarantees your spot.",
              },
              {
                q: "How do I book an appointment?",
                a: "Call us at (385) 393-8418, book through Booksy, or click any barber in our team section to go straight to their booking page.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, card, Venmo, and CashApp.",
              },
              {
                q: "Where are you located?",
                a: "We're in Layton, Utah. See the contact section below for our full address.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-black/50 backdrop-blur-sm border border-white/10 p-6">
                <h4 className="font-[family-name:var(--font-oswald)] font-semibold tracking-wide text-white mb-2">
                  {item.q}
                </h4>
                <p className="text-gray-400 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-[1px] bg-[#C8952A]" />
              <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
                REACH OUT
              </span>
              <div className="w-10 h-[1px] bg-[#C8952A]" />
            </div>
            <h2
              className="font-[family-name:var(--font-oswald)] font-bold text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", WebkitTextStroke: "4px black", paintOrder: "stroke fill" }}
            >
              CONTACT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Shop photo */}
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src="/images/storefront.jpeg"
                alt="Fresh Styles Barbershop storefront"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Info cards */}
            <div className="flex flex-col gap-4">
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs tracking-widest text-[#C8952A] mb-3 font-[family-name:var(--font-oswald)]">
                  PHONE
                </div>
                <a
                  href="tel:3853938418"
                  className="text-white text-xl font-[family-name:var(--font-oswald)] font-bold hover:text-[#C8952A] transition-colors"
                >
                  (385) 393-8418
                </a>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs tracking-widest text-[#C8952A] mb-3 font-[family-name:var(--font-oswald)]">
                  LOCATION
                </div>
                <p className="text-white text-sm">2704 N Hill Field Rd, Ste 4<br />Layton, UT 84041</p>
              </div>
              <div className="bg-black/50 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs tracking-widest text-[#C8952A] mb-3 font-[family-name:var(--font-oswald)]">
                  HOURS
                </div>
                <p className="text-white text-sm whitespace-pre-line">
                  {"Mon–Sat: 10AM–6PM\nSun: Closed"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur-sm border-t border-white/10">
        {/* Social media bar */}
        <div className="border-b border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              FOLLOW US
            </span>
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/freshstylesUT"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:text-[#C8952A] transition-colors"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="text-xs tracking-widest font-[family-name:var(--font-oswald)]">
                  FACEBOOK
                </span>
              </a>

              <div className="w-[1px] h-5 bg-white/10" />

              {/* Instagram */}
              <a
                href="https://www.instagram.com/freshstyles.ut"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:text-[#C8952A] transition-colors"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                <span className="text-xs tracking-widest font-[family-name:var(--font-oswald)]">
                  INSTAGRAM
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <Image
              src="/images/logo-2025.png"
              alt="Fresh Styles Barbershop"
              width={72}
              height={72}
              className="object-contain rounded"
            />
            <span className="text-gray-400 text-xs text-center">
              © {new Date().getFullYear()} Fresh Styles Barbershop · Layton, Utah · Est. 2021
            </span>
            <a
              href="tel:3853938418"
              className="text-[#C8952A] text-sm font-[family-name:var(--font-oswald)] tracking-widest hover:text-[#D4A843] transition-colors"
            >
              (385) 393-8418
            </a>
          </div>
        </div>

        {/* Powered by */}
        <div className="border-t border-white/10 py-4">
          <a
            href="https://cg-workshop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-7xl mx-auto px-6 flex items-center justify-center opacity-50 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/cg-workshop.jpeg"
              alt="Common Ground Workshop"
              width={52}
              height={52}
              className="object-contain rounded-full"
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
      </footer>
      </div>
    </main>
  );
}
