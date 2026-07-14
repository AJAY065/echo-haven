"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul N.",
    location: "Kochi",
    review:
      "A peaceful escape surrounded by beautiful mountains. The campfire and breakfast made our stay even more memorable.",
  },
  {
    name: "Meera S.",
    location: "Kottayam",
    review:
      "The tents were clean, the staff were welcoming, and waking up to the misty hills was an unforgettable experience.",
  },
  {
    name: "Arjun P.",
    location: "Thrissur",
    review:
      "Perfect for anyone looking to disconnect from city life. Great atmosphere, stunning views, and excellent hospitality.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-[#143d2d] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-green-300 md:text-base">
            Guest Reviews
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Loved by Our Guests
          </h2>

          <div className="mt-6">
            <p className="text-3xl text-yellow-400">★★★★★</p>

            <p className="mt-2 text-gray-300">
              Memorable stays surrounded by nature.
            </p>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-16">

          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="flex h-full flex-col rounded-3xl bg-[#faf7f2] p-6 shadow-2xl transition md:p-8"
            >
              <div className="text-4xl text-green-700">“</div>

              <div className="mt-2 text-xl text-yellow-500">
                ★★★★★
              </div>

              <p className="mt-5 flex-grow text-base leading-7 text-gray-700">
                {review.review}
              </p>

              <div className="mt-8 border-t border-gray-200 pt-5">
                <h3 className="text-lg font-bold text-green-900">
                  {review.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {review.location}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}