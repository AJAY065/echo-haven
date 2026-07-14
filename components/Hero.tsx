"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  className="relative min-h-[90vh] bg-cover bg-center md:h-screen"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-6 pt-12 text-center text-white md:h-screen md:pt-0"
      >
        <p className="mb-4 text-sm uppercase tracking-[8px] text-green-200 md:text-base">
          Welcome to
        </p>

        <h1 className="text-5xl font-bold md:text-8xl">
          Echo Haven
        </h1>

        <p className="mt-4 text-xl md:text-3xl">
          20 Acre • Munnar
        </p>

        <p className="mt-8 max-w-3xl text-base leading-8 text-gray-200 md:text-xl">
          Escape into nature and experience peaceful camping,
          breathtaking mountain views, cozy campfires,
          complimentary breakfast, and unforgettable moments
          with your loved ones.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/918606470462"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-700 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-green-800"
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:+918606470462"
            className="rounded-full border border-white px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-white hover:text-black"
          >
            Call Now
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
  <span className="text-3xl text-white">⌄</span>
</div>
      </motion.div>
    </section>
  );
}