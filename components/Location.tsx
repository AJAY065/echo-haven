export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-24 bg-[#143d2d] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6">

        {/* Heading */}
        <div className="mb-12 text-center md:mb-16">

          <p className="text-sm font-semibold uppercase tracking-[5px] text-green-300 md:text-base">
            Find Us
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Visit Echo Haven
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-300 md:mt-6 md:text-lg md:leading-8">
            Located in the beautiful hills of Munnar, Echo Haven offers a
            peaceful escape surrounded by nature, mountains and fresh air.
          </p>

        </div>

        {/* Contact + Map */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Contact Card */}
          <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-10">

            <h3 className="text-2xl font-bold text-green-900 md:text-3xl">
              Contact Information
            </h3>

            <div className="mt-8 space-y-8">

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700">
                  📍 Address
                </p>

                <p className="mt-2 text-base leading-7 text-gray-700 md:text-lg">
                  Echo Haven <br />
                  20 Acre <br />
                  Munnar, Kerala
                </p>
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700">
                  📞 Phone
                </p>

                <a
                  href="tel:+918606470462"
                  className="mt-2 block text-base font-semibold text-gray-800 transition hover:text-green-700 md:text-lg"
                >
                  +91 86064 70462
                </a>

                <a
                  href="tel:+918606303741"
                  className="mt-1 block text-base font-semibold text-gray-800 transition hover:text-green-700 md:text-lg"
                >
                  +91 86063 03741
                </a>
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700">
                  💬 WhatsApp
                </p>

                <a
                  href="https://wa.me/918606470462"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-base font-semibold text-gray-800 transition hover:text-green-700 md:text-lg"
                >
                  Chat with us instantly
                </a>
              </div>

              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-green-700">
                  ✉️ Email
                </p>

                <a
                  href="mailto:echohaventents@gmail.com"
                  className="mt-2 block break-all text-base font-semibold text-gray-800 transition hover:text-green-700 md:text-lg"
                >
                  echohaventents@gmail.com
                </a>
              </div>

            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="https://maps.app.goo.gl/4yQUX48sJDHUQksT8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-green-700 px-6 py-4 text-center font-semibold text-white transition duration-300 hover:bg-green-800 hover:scale-105"
              >
                📍 Get Directions
              </a>

              <a
                href="https://wa.me/918606470462"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border-2 border-green-700 px-6 py-4 text-center font-semibold text-green-700 transition duration-300 hover:bg-green-700 hover:text-white hover:scale-105"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.938525140545!2d77.0767761752668!3d10.021931890084616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0799d172f6e997%3A0x4eb827597521763f!2sEco%20Haven!5e0!3m2!1sen!2sin!4v1783928598381!5m2!1sen!2sin"
              className="h-[350px] w-full md:h-[550px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
