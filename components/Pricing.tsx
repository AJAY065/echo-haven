export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-gradient-to-b from-[#0d2b22] via-[#143d2d] to-[#0d2b22] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[6px] text-yellow-400">
            STAY WITH US
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-6xl">
            Your Nature Escape
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-100">
            Comfortable camping surrounded by the breathtaking beauty of
            Munnar. Peaceful, affordable and perfect for couples,
            families and adventure lovers.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-16 max-w-4xl rounded-[35px] bg-white p-10 shadow-[0_30px_80px_rgba(0,0,0,0.25)] transition duration-500 hover:-translate-y-2">

          <div className="inline-flex rounded-full bg-green-700 px-5 py-2 text-sm font-semibold text-white">
            ⭐ Echo Haven Signature Stay
          </div>

          <h3 className="mt-8 text-4xl font-bold text-gray-900">
            Standard Tent
          </h3>

          <div className="mt-8 flex items-end gap-3">
            <span className="text-6xl font-extrabold text-green-700">
              ₹2000
            </span>

            <span className="pb-2 text-xl text-gray-500">
              / Night
            </span>
          </div>

          <p className="mt-4 text-lg text-gray-600">
            Includes comfortable accommodation and complimentary breakfast.
          </p>

          <div className="my-8 border-t border-gray-200"></div>

          <div className="space-y-5 text-lg text-gray-800">
            <div>🏕️ Comfortable Camping Tent</div>
            <div>🍳 Complimentary Breakfast</div>
            <div>🔥 Evening Campfire with Music</div>
            <div>📶 Free High-Speed Wi-Fi</div>
            <div>🚗 Free Parking</div>
            <div>🌄 Beautiful Mountain Views</div>
            <div>🌿 Peaceful Nature Experience</div>
          </div>

          <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6">
            <h4 className="text-xl font-bold text-green-800">
              Adventure Activities
            </h4>

            <p className="mt-3 leading-7 text-gray-700">
              Enhance your stay with our optional{" "}
              <span className="font-semibold text-green-700">
                Kolukkumalai Sunrise Jeep Safari
              </span>{" "}
              or{" "}
              <span className="font-semibold text-green-700">
                Chokramudi Peak Trekking
              </span>.
              These experiences can be arranged on request and are charged separately from the accommodation.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="https://wa.me/918606470462"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-green-700 px-8 py-4 text-center text-lg font-bold text-white transition hover:scale-105 hover:bg-green-800"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918606470462"
              className="flex-1 rounded-full border-2 border-green-700 px-8 py-4 text-center text-lg font-bold text-green-700 transition hover:bg-green-700 hover:text-white"
            >
              Call Now
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}