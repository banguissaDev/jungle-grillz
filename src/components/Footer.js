'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="bg-[#2E1610] text-cream pt-10 px-8 md:px-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-8 lg:mb-12 relative z-10">
        <AnimatedSection className="max-w-sm" animationType="fade-in-left">
           <h3 className="text-4xl md:text-5xl font-sans mb-6 tracking-tight leading-tight">Grilled to Perfection,<br/><span className="font-serif italic text-cream/90">Every Day</span></h3>
           <p className="text-sm text-cream/70 leading-relaxed mb-8 font-sans">Get the latest events, seasonal drinks, and exclusive offers delivered to your inbox.</p>
           <button className="bg-cream text-[#2E1610] px-6 py-4 text-sm font-bold flex items-center gap-3 rounded-sm hover:bg-white transition">Subscribe Now <span>→</span></button>
        </AnimatedSection>
        
        <AnimatedSection className="flex flex-wrap gap-16 lg:gap-24 text-sm font-sans pt-4" animationType="fade-in-right">
           <div className="flex flex-col gap-5">
              <span className="font-bold text-base mb-2">Product</span>
              <a href="#" className="text-cream/60 hover:text-white transition">Home</a>
              <a href="#" className="text-cream/60 hover:text-white transition">Our Story</a>
              <a href="#" className="text-cream/60 hover:text-white transition">Reservations</a>
              <a href="#" className="text-cream/60 hover:text-white transition">Contact Us</a>
           </div>
           <div className="flex flex-col gap-5">
               <span className="font-bold text-base mb-2">Company</span>
               <a href="#" className="text-cream/60 hover:text-white transition">About Us</a>
               <a href="#" className="text-cream/60 hover:text-white transition">Careers</a>
               <a href="#" className="text-cream/60 hover:text-white transition">Blog</a>
            </div>
        </AnimatedSection>
      </div>

      {/* Contact Info */}
      <AnimatedSection className="max-w-7xl mx-auto border-t border-white/10 pt-10 pb-6 relative z-10" animationType="fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm font-sans">
          
          <AnimatedSection className="flex flex-col gap-2" animationType="fade-in-up" delay={0.1}>
            <span className="font-bold text-base text-white mb-1">Address</span>
            <a href="https://maps.google.com/?q=KG+20+Ave+Kigali+Rwanda" target="_blank" rel="noopener noreferrer" className="text-cream/60 hover:text-white transition">KG 20 Ave, Kigali, Rwanda</a>
          </AnimatedSection>
          <AnimatedSection className="flex flex-col gap-2" animationType="fade-in-up" delay={0.2}>
            <span className="font-bold text-base text-white mb-1">Phone</span>
            <a href="tel:+250791938593" className="text-cream/60 hover:text-white transition">+250 791 938 593</a>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Logo & Brand at the bottom */}
      <AnimatedSection className="relative w-full flex flex-col items-center opacity-90 z-0 pb-6 -mt-8" animationType="fade-in-up" delay={0.2}>
        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 mb-4">
          <Image src="/JUNGLE_LOGO.jpg" alt="Jungle Grillz Logo" fill sizes="48px" className="object-cover" />
        </div>
        <span className="font-serif font-bold text-[10vw] leading-none tracking-tighter text-cream">Jungle Grillz</span>
      </AnimatedSection>
    </footer>
  );
}
