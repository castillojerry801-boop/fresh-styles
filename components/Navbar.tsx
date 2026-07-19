"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
        scrolled
          ? "bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[#2a2a2a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Fresh Styles Barbershop"
            width={90}
            height={50}
            className="object-contain h-[50px] w-auto"
            priority
          />
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
          href="tel:3853938418"
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
            href="tel:3853938418"
            className="bg-[#C8952A] text-black text-xs font-bold tracking-widest px-5 py-3 text-center hover:bg-[#D4A843] transition-colors font-[family-name:var(--font-oswald)]"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </header>
  );
}
