import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WeeklyPromosSection from "@/components/WeeklyPromosSection";
import BestSellersMenu from "@/components/BestSellersMenu";
import SignatureEventSection from "@/components/SignatureEventSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import PreFooterCTA from "@/components/PreFooterCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-darkBrown font-sans overflow-hidden">
      <HeroSection />
      <AboutSection />
      <WeeklyPromosSection />
      <BestSellersMenu />
      <SignatureEventSection />
      <Testimonials />
      <FAQSection />
      <PreFooterCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
