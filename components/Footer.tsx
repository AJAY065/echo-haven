import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b241b] text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        {/* About */}
        <div>
          <h2 className="text-3xl font-bold">
            Echo Haven
          </h2>

          <p className="mt-4 leading-8 text-gray-400">
            Experience peaceful camping in the heart of Munnar.
            Beautiful mountain views, campfires and unforgettable memories.
          </p>

          <div className="mt-6 flex gap-5">

            <a
              href="https://www.instagram.com/echohavencamping?igsh=MXgxeDhteXh0emNleQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-400"
            >
              <FaInstagram size={24} />
            </a>

            <a
              href="https://www.facebook.com/share/14n1cWzjsau/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-400"
            >
              <FaFacebook size={24} />
            </a>

            <a
              href="https://www.youtube.com/@echohavencamping"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-green-400"
            >
              <FaYoutube size={24} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <ul className="mt-6 space-y-3 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-white">
                Gallery
              </a>
            </li>

            <li>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>

          <h3 className="text-xl font-semibold">
            Contact
          </h3>

          <div className="mt-6 space-y-4 text-gray-400">

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>20 Acre, Munnar</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 86064 70462</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>echohaventents@gmail.com</span>
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Echo Haven. All Rights Reserved.
      </div>

    </footer>
  );
}