"use client";

import { motion } from "framer-motion";

export default function Features() {

  const features = [
    {
      icon: "🏕️",
      title: "7 Comfortable Tents",
      description:
        "Cozy camping tents designed for a peaceful stay surrounded by nature.",
    },
    {
      icon: "🔥",
      title: "Campfire with Music",
      description:
        "Spend unforgettable evenings around the campfire with music under the stars.",
    },
    {
      icon: "🍳",
      title: "Breakfast Included",
      description:
        "Enjoy a complimentary breakfast before exploring beautiful Munnar.",
    },
    {
      icon: "📶",
      title: "Free Wi-Fi",
      description:
        "Stay connected while enjoying your peaceful getaway.",
    },
    {
      icon: "🚗",
      title: "Parking Facility",
      description:
        "Safe and spacious parking available for all guests.",
    },
    {
      icon: "📍",
      title: "20 Acre, Munnar",
      description:
        "Located in the beautiful 20 Acre area surrounded by hills and greenery.",
    },
  ];


  return (
    <section className="bg-[#0f3d2e] py-16 md:py-24">

      <div className="mx-auto max-w-7xl px-5 md:px-6">


        {/* Heading */}

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.8}}
          className="text-center"
        >

          <p className="
            text-sm
            font-semibold
            uppercase
            tracking-[4px]
            text-yellow-400
          ">
            EXPERIENCE
          </p>


          <h2 className="
            mt-4
            text-3xl
            font-bold
            text-white
            sm:text-4xl
            md:text-5xl
          ">
            Why Choose Echo Haven?
          </h2>


          <p className="
            mx-auto
            mt-5
            max-w-2xl
            text-base
            leading-7
            text-gray-300
            md:text-lg
          ">
            Everything you need for a peaceful escape in the heart of Munnar.
          </p>


        </motion.div>



        {/* Cards */}

        <div className="
          mt-10
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-3
          md:mt-16
        ">


          {features.map((feature,index)=>(

            <motion.div

              key={feature.title}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                duration:0.5,
                delay:index * 0.08
              }}

              whileHover={{
                y:-8,
                scale:1.02
              }}

              className="
                rounded-3xl
                bg-[#faf7f2]
                p-6
                shadow-xl
                md:p-8
              "

            >


              <div className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-green-100
                text-3xl
              ">
                {feature.icon}
              </div>



              <h3 className="
                mt-6
                text-xl
                font-bold
                text-green-900
                md:text-2xl
              ">
                {feature.title}
              </h3>



              <div className="
                mt-3
                h-1
                w-12
                rounded
                bg-yellow-500
              "></div>



              <p className="
                mt-5
                text-sm
                leading-6
                text-gray-700
                md:text-base
                md:leading-7
              ">
                {feature.description}
              </p>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}