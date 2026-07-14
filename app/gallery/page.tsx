import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
  "/images/gallery/gallery7.jpg",
  "/images/gallery/gallery8.jpg",
  "/images/gallery/gallery9.jpg",
  "/images/gallery/gallery10.jpg",
  "/images/gallery/gallery11.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] py-20">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="uppercase tracking-[5px] text-green-700 font-semibold">
              Gallery
            </p>

            <h1 className="mt-3 text-5xl font-bold text-gray-900">
              Echo Haven Moments
            </h1>

            <p className="mt-4 max-w-2xl text-lg text-gray-600">
              Explore our tents, campfires, mountain views and unforgettable
              experiences.
            </p>

          </div>

          <Link
            href="/"
            className="rounded-full bg-green-700 px-6 py-3 text-white hover:bg-green-800"
          >
            ← Back Home
          </Link>

        </div>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">

          {images.map((image, index) => (

            <div
              key={index}
              className="group mb-5 overflow-hidden rounded-3xl shadow-xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={900}
                height={900}
                className="w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

          ))}

        </div>

      </div>

    </main>
  );
}