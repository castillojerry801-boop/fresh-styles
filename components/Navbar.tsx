"use client";

import { useState } from "react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "OUR TEAM", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
  { label: "PORTFOLIOS", href: "/gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(0,0,0,0.58)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-widest text-gray-300 hover:text-white transition-colors font-[family-name:var(--font-oswald)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Book Now */}
        <a
          href="/book"
          className="hidden md:inline-block bg-[#C8952A] text-black text-xs font-bold tracking-widest px-5 py-3 hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
        >
          BOOK NOW
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-[2px] bg-white mb-[5px]" />
          <div className="w-6 h-[2px] bg-white mb-[5px]" />
          <div className="w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-[#2a2a2a] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest text-gray-300 hover:text-white font-[family-name:var(--font-oswald)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/book"
            className="bg-[#C8952A] text-black text-xs font-bold tracking-widest px-5 py-3 text-center hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}
