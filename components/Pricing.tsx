export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-[#f8f5ef] py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[5px] text-green-700 md:text-base md:tracking-[6px]">
            Stay With Us
          </p>

          <h2 className="mt-4 text-3xl font-bold text-green-900 sm:text-4xl md:text-5xl">
            Camping Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:mt-6 md:text-lg">
            Affordable, peaceful and surrounded by nature.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mx-auto mt-10 max-w-xl rounded-3xl bg-white p-6 shadow-2xl md:mt-16 md:p-10">
          {/* Badge */}
          <div className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            ⭐ Most Popular
          </div>

          <h3 className="mt-6 text-2xl font-bold text-green-900 md:text-3xl">
            Standard Tent
          </h3>

          <p className="mt-4 text-4xl font-bold text-green-700 md:text-5xl">
            ₹1500
            <span className="ml-2 text-lg font-normal text-gray-500 md:text-xl">
              / night
            </span>
          </p>

          <ul className="mt-8 space-y-4 leading-7 text-gray-700">
            <li>✅ Comfortable Camping Tent</li>
            <li>✅ Complimentary Breakfast</li>
            <li>✅ Campfire with Music</li>
            <li>✅ Free Wi-Fi</li>
            <li>✅ Free Parking</li>
            <li>✅ Beautiful Mountain Views</li>
          </ul>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://wa.me/918606470462"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full bg-green-700 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:bg-green-800 hover:scale-105"
            >
              Book on WhatsApp
            </a>

            <a
              href="tel:+918606470462"
              className="flex-1 rounded-full border-2 border-green-700 px-6 py-4 text-center font-semibold text-green-700 transition duration-300 hover:bg-green-700 hover:text-white hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}