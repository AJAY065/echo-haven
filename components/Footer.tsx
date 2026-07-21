export default function Footer() {
    return (
      <footer className="bg-[#0b241b] text-white">
  
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
  
          <div>
            <h2 className="text-3xl font-bold">
              Echo Haven
            </h2>
  
            <p className="mt-4 text-gray-400 leading-8">
              Experience peaceful camping in the heart of Munnar.
              Beautiful mountain views, campfires and unforgettable memories.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>
  
            <ul className="mt-6 space-y-3 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
  
          <div>
  
            <h3 className="text-xl font-semibold">
              Contact
            </h3>
  
            <div className="mt-6 space-y-3 text-gray-400">
  
              <p>📍 20 Acre, Munnar</p>
  
              <p>📞 +91 86064 70462</p>
  
              <p>📧 echohaventents@gmail.com</p>
  
            </div>
  
          </div>
  
        </div>
  
        <div className="border-t border-white/10 py-6 text-center text-gray-500">
  
          © {new Date().getFullYear()} Echo Haven.
          All Rights Reserved.
  
        </div>
  
      </footer>
    );
  }