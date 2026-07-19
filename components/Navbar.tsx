"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "OUR TEAM", href: "#team" },
  { label: "HOW IT WORKS", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2a2a2a]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-[52px] h-[52px] rounded-full border-2 border-[#C8952A] flex flex-col items-center justify-center bg-[#1a1a1a]">
            <span className="text-[#C8952A] text-[8px] font-bold leading-tight tracking-wider font-[family-name:var(--font-oswald)]">
              FRESH
            </span>
            <span className="text-white text-[9px] font-bold leading-tight tracking-widest font-[family-name:var(--font-oswald)]">
              STYLES
            </span>
            <div className="w-full h-[1px] bg-[#C8952A] my-[1px]" />
            <span className="text-[#C8952A] text-[6px] tracking-[2px] font-[family-name:var(--font-oswald)]">
              BARBERSHOP
            </span>
          </div>
        </a>

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
          href="#services"
          className="hidden md:inline-block bg-[#C8952A] text-black text-xs font-bold tracking-widest px-5 py-3 hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
        >
          BOOK NOW
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
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
            href="#services"
            className="bg-[#C8952A] text-black text-xs font-bold tracking-widest px-5 py-3 text-center hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}
