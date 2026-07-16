import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VideoSection from "@/components/VideoSection";
import Features from "@/components/Features";
import Experiences from "@/components/Experiences";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Features */}
      <Features />

      {/* Adventure Experiences */}
      <Experiences />

      {/* Gallery */}
      <Gallery />

      {/* Video */}
      <VideoSection />

      {/* Pricing */}
      <Pricing />

      {/* Location */}
      <Location />

      {/* Reviews */}
      <Reviews />

      {/* Booking CTA */}
      <CTA />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </main>
  );
}