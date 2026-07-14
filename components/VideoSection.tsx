export default function VideoSection() {
  return (
    <section className="bg-[#102d22] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-6">
        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[4px] text-green-300 md:text-base md:tracking-[5px]">
          EXPERIENCE
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Experience Echo Haven
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-300 md:mt-6 md:text-lg">
          Watch our short cinematic video and experience the peaceful beauty of
          Echo Haven before your visit.
        </p>

        {/* Video */}
        <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-[1.02] md:mt-14 md:max-w-lg">
          <video
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-3xl object-cover"
            poster="/hero.png"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Caption */}
        <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-gray-400 md:text-base">
          A glimpse of the unforgettable camping experience waiting for you.
        </p>
      </div>
    </section>
  );
}