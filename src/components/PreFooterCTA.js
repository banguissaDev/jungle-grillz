'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function PreFooterCTA() {
  return (
    <AnimatedSection className="relative w-full h-125 flex items-center justify-center overflow-hidden" animationType="fade-in-up">
      {/* Background Image */}
      <Image 
        src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
        alt="Grill Background" 
        fill 
        sizes="100vw"
        className="object-cover -z-10"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Content */}
      <div className="relative z-20 text-center text-cream flex flex-col items-center px-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
         <h2 className="text-5xl md:text-7xl font-sans mb-6 text-white tracking-tight drop-shadow-lg">
           Premium Grilled,<br/><span className="font-serif italic text-cream/90">Just for You</span>
         </h2>
         <p className="text-sm md:text-base text-cream/90 mb-10 tracking-wide font-medium">Order today and enjoy handcrafted meats and cocktails made fresh every evening.</p>
         <button className="bg-cream text-[#3B1E16] px-8 py-4 text-sm font-semibold hover:bg-white transition inline-flex items-center gap-3 rounded-sm">
           See Full Menu <span>→</span>
         </button>
      </div>
    </AnimatedSection>
  );
}
