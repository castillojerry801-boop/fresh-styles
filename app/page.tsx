import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />

      {/* Our Team */}
      <section id="team" className="py-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              THE CREW
            </span>
            <div className="w-10 h-[1px] bg-[#C8952A]" />
          </div>
          <h2
            className="font-[family-name:var(--font-oswald)] font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            OUR TEAM
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            Coming soon — meet the barbers behind the cuts.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              SIMPLE PROCESS
            </span>
            <div className="w-10 h-[1px] bg-[#C8952A]" />
          </div>
          <h2
            className="font-[family-name:var(--font-oswald)] font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            HOW IT WORKS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "BOOK",
                desc: "Choose your service and pick a time that works for you.",
              },
              {
                step: "02",
                title: "SHOW UP",
                desc: "Walk in, relax, and let us handle the rest.",
              },
              {
                step: "03",
                title: "LEAVE FRESH",
                desc: "Walk out with a clean, sharp look every time.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-[#C8952A] text-4xl font-bold font-[family-name:var(--font-oswald)] mb-3">
                  {item.step}
                </div>
                <h3 className="text-white font-bold tracking-widest mb-2 font-[family-name:var(--font-oswald)]">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#111111]">
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
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
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
                a: "Click any 'Book' link on this page to schedule online. It only takes a minute.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept cash, card, Venmo, and CashApp.",
              },
              {
                q: "Where are you located?",
                a: "We're in Layton, Utah. Exact address is in the contact section below.",
              },
            ].map((item) => (
              <div key={item.q} className="border border-[#2a2a2a] p-6 bg-[#161616]">
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
      <section id="contact" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#C8952A]" />
            <span className="text-xs tracking-[4px] text-[#C8952A] font-[family-name:var(--font-oswald)]">
              REACH OUT
            </span>
            <div className="w-10 h-[1px] bg-[#C8952A]" />
          </div>
          <h2
            className="font-[family-name:var(--font-oswald)] font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            CONTACT
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "LOCATION", value: "Layton, Utah" },
              { label: "HOURS", value: "Mon–Sat: 9AM–7PM\nSun: 10AM–5PM" },
              { label: "BOOK ONLINE", value: "freshstylesbarbershop.com" },
            ].map((item) => (
              <div key={item.label} className="border border-[#2a2a2a] p-8 bg-[#161616]">
                <div className="text-xs tracking-widest text-[#C8952A] mb-3 font-[family-name:var(--font-oswald)]">
                  {item.label}
                </div>
                <p className="text-white text-sm whitespace-pre-line">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2a] py-8 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-oswald)] text-gray-500 text-sm tracking-widest">
            FRESH STYLES BARBERSHOP
          </span>
          <span className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Fresh Styles Barbershop · Layton, Utah · Est. 2021
          </span>
        </div>
      </footer>
    </main>
  );
}
