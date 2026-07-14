"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = images.map((image) => ({
    src: image,
  }));

  return (
    <>
      <section
        id="gallery"
        className="scroll-mt-24 bg-[#f6f4ee] py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >

            <p className="font-semibold uppercase tracking-[4px] text-green-700 text-sm md:text-base">
              Gallery
            </p>


            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
              Discover Echo Haven
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-gray-600 leading-7">
              Every corner of Echo Haven is designed to bring you closer to
              nature. Here's a glimpse of your next getaway.
            </p>

          </motion.div>


          {/* Images */}
          <div className="mt-10 md:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">


            {images.map((image, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}

                whileHover={{
                  scale: 1.03,
                }}

                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}

                className="cursor-pointer overflow-hidden rounded-3xl shadow-xl"
              >

                <Image
                  src={image}
                  alt={`Echo Haven gallery image ${index + 1}`}
                  width={800}
                  height={600}

                  className="
                    h-64
                    sm:h-72
                    lg:h-80
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-110
                  "
                />

              </motion.div>

            ))}


            {/* More Photos */}

            <motion.a
              href="/gallery"

              initial={{ opacity:0, y:50 }}
              whileInView={{ opacity:1,y:0 }}

              viewport={{ once:true }}

              transition={{
                duration:0.6,
                delay:0.5
              }}

              whileHover={{
                scale:1.03
              }}

              className="
                flex
                h-64
                sm:h-72
                lg:h-80
                items-center
                justify-center
                rounded-3xl
                bg-green-800
                text-center
                text-white
                transition
                hover:bg-green-900
              "
            >

              <div>

                <h3 className="text-2xl md:text-3xl font-bold">
                  + More Photos
                </h3>

                <p className="mt-3 text-green-100">
                  Explore our full gallery →
                </p>

              </div>

            </motion.a>


          </div>

        </div>

      </section>


      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={currentIndex}
        slides={slides}
      />

    </>
  );
}