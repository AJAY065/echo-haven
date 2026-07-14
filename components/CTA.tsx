export default function CTA() {
    return (
      <section className="bg-[#0f3d2e] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
  
          <p className="uppercase tracking-[6px] text-green-300 font-semibold">
            Ready For Your Adventure?
          </p>
  
          <h2 className="mt-4 text-5xl font-bold text-white">
            Book Your Stay at Echo Haven
          </h2>
  
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Wake up surrounded by nature, enjoy unforgettable campfires,
            breathtaking mountain views and peaceful mornings.
          </p>
  
          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">
  
            <a
              href="https://wa.me/918606470462"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 font-semibold text-green-800 transition hover:scale-105"
            >
              💬 Book on WhatsApp
            </a>
  
            <a
              href="tel:+918606470462"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-800"
            >
              📞 Call Now
            </a>
  
          </div>
  
        </div>
      </section>
    );
  }