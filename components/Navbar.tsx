"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#0b241b]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-3"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo/logo.jpeg"
            alt="Echo Haven"
            width={42}
            height={42}
            className="rounded-full"
          />

          <div>
            <h1 className="text-lg font-bold text-white">
              Echo Haven
            </h1>

            <p className="text-xs text-green-200">
              Munnar
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 text-white md:flex">
          <a href="#" className="transition hover:text-green-300">
            Home
          </a>

          <a href="#about" className="transition hover:text-green-300">
            About
          </a>

          <a href="#gallery" className="transition hover:text-green-300">
            Gallery
          </a>

          <a href="#pricing" className="transition hover:text-green-300">
            Pricing
          </a>

          <a href="#location" className="transition hover:text-green-300">
            Location
          </a>

          <a
            href="https://wa.me/918606470462"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-700 px-6 py-3 font-semibold transition hover:bg-green-800"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-white md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#0b241b]/95 backdrop-blur-md transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">

          <a
            href="#"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white"
          >
            About
          </a>

          <a
            href="#gallery"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white"
          >
            Gallery
          </a>

          <a
            href="#pricing"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white"
          >
            Pricing
          </a>

          <a
            href="#location"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-white"
          >
            Location
          </a>

          <a
            href="https://wa.me/918606470462"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-6 rounded-full bg-green-700 py-4 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Book on WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}