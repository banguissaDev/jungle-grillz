import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WeeklyPromosSection from "@/components/WeeklyPromosSection";
import FeaturedMenuSection from "@/components/FeaturedMenuSection";
import SignatureEventSection from "@/components/SignatureEventSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-darkBrown font-sans overflow-hidden">
      <HeroSection />
      <AboutSection />
      <WeeklyPromosSection />
      <FeaturedMenuSection />
      <SignatureEventSection />
      <Testimonials />
      <FAQSection />
      <PreFooterCTA />
      <Footer />
    </div>
  );
}
