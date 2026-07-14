"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-6">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-green-700 md:text-base md:tracking-[5px]">
            About Echo Haven
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Escape the city and reconnect with nature.
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Nestled in the heart of Munnar across 20 acres of lush greenery,
            Echo Haven offers a peaceful camping experience surrounded by
            mountains, fresh air, and nature.
          </p>

          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Whether you're looking for a relaxing getaway, a campfire with
            friends, or a memorable family trip, Echo Haven is the perfect
            destination.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden rounded-3xl shadow-2xl"
        >
          <div className="relative h-72 w-full sm:h-80 md:h-[450px]">
            <Image
              src="/images/about.jpg"
              alt="Echo Haven surrounded by nature"
              fill
              className="object-cover transition duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}