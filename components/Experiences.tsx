"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Kolukkumalai Sunrise Jeep Safari",
    image: "/images/experiences/kolukkumalai.jpg",
    icon: "🚙",
    description:
      "Experience an unforgettable sunrise from Kolukkumalai, home to one of the world's highest tea plantations. Enjoy an exciting off-road jeep safari through misty hills, breathtaking viewpoints, and beautiful tea estates.",
  },
  {
    title: "Chokramudi Peak Trekking",
    image: "/images/experiences/chokramudi.jpg",
    icon: "🥾",
    description:
      "Trek to Chokramudi Peak (7,200 ft), one of Munnar's highest mountains. The trail passes through rolling tea plantations, lush Shola forests, and scenic grasslands, rewarding you with spectacular panoramic views.",
  },
];

export default function Experiences() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[5px] text-green-700">
            Explore Munnar
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Optional Adventure Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Make your stay even more memorable with exciting outdoor
            experiences that can be arranged during your visit.
          </p>

          <div className="mt-5 inline-block rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            These activities are optional and are not included in the ₹1500 stay.
          </div>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl bg-white shadow-2xl"
            >
              <Image
                src={experience.image}
                alt={experience.title}
                width={800}
                height={500}
                className="h-72 w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-green-900">
                  {experience.icon} {experience.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {experience.description}
                </p>

                <div className="mt-8 rounded-2xl bg-green-50 p-5">
                  <p className="font-semibold text-green-900">
                    ✓ Available on request
                  </p>

                  <p className="mt-2 text-gray-600">
                    Contact us on WhatsApp and we'll help arrange this
                    experience during your stay.
                  </p>
                </div>

                <a
                  href="https://wa.me/918606470462"
                  target="_blank"
                  className="mt-8 inline-block rounded-full bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800"
                >
                  Enquire on WhatsApp
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}