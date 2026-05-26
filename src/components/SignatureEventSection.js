'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function SignatureEventSection() {
  return (
    <AnimatedSection className="py-24 px-8 md:px-16 max-w-7xl mx-auto" animationType="fade-in-up">
      <div className="bg-[#2a2c24] text-cream p-8 md:p-16 rounded-sm relative overflow-hidden flex flex-col lg:flex-row items-center gap-12 animate-scale-in">
        {/* Left Large Image */}
        <AnimatedSection className="relative w-full lg:w-3/5 h-100 lg:h-150 rounded overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow" animationType="fade-in-left">
           <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Jungle Grillz BBQ" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
        </AnimatedSection>
        
        {/* Right Content */}
        <AnimatedSection className="relative w-full lg:w-2/5 flex flex-col justify-center" animationType="fade-in-right">
           {/* Floating Polaroid */}
           <div className="w-64 bg-cream p-4 pb-12 mb-12 shadow-2xl transform translate-x-4 -translate-y-8 rounded-sm relative z-10 hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full h-48 overflow-hidden rounded-sm">
                <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Signature Cocktail" fill sizes="(max-width: 1024px) 0vw, 300px" className="object-cover" />
              </div>
              <p className="mt-4 text-center font-serif text-darkBrown text-xl">Signature Cocktail</p>
           </div>
           
           <div className="relative z-20">
             <p className="text-xs font-bold tracking-[0.15em] uppercase text-cream/70 mb-4 font-sans">SIGNATURE EVENT</p>
             <h3 className="text-5xl md:text-6xl lg:text-7xl font-sans mb-6 text-white tracking-tight leading-none">
               Sunday <br/><span className="font-serif italic text-cream/90">BBQ Party</span>
             </h3>
             <p className="text-sm md:text-base text-cream/80 leading-relaxed font-sans max-w-sm">
               Join us every Sunday for the ultimate Jungle Grillz BBQ party. Enjoy exclusive discounts on bottles, cocktails, and special meat deals while soaking up the vibrant atmosphere.
             </p>
           </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
