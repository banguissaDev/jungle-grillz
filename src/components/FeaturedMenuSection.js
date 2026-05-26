'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function FeaturedMenuSection() {
  return (
    <AnimatedSection className="py-16 px-4 md:py-24 md:px-16 bg-[#F4F0E6] relative overflow-hidden" animationType="fade-in-up">
      <div className="text-center mb-10 md:mb-16 relative z-10">
        <AnimatedSection animationType="fade-in-down">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-darkBrown/60 mb-4">Featured Menu</h2>
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up" delay={0.1}>
          <h3 className="text-3xl md:text-5xl">Our <span className="font-serif italic">Best Sellers</span></h3>
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up" delay={0.2}>
          <p className="text-sm text-darkBrown/60 mt-4 font-serif italic">The most popular picks from our grill</p>
        </AnimatedSection>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6 relative z-10">
        <AnimatedSection className="text-2xl sm:text-3xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline w-full justify-center flex-wrap gap-x-2 md:gap-x-4" animationType="fade-in-right">
          <span className="font-bold">Premium</span> <span className="font-serif italic text-darkBrown/70">Tomahawk</span>
        </AnimatedSection>
        <AnimatedSection className="text-2xl sm:text-3xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline w-full justify-center flex-wrap gap-x-2 md:gap-x-4" animationType="fade-in-right" delay={0.1}>
          <span className="font-bold">Jungle</span> <span className="font-serif italic text-darkBrown/70">Ribs</span>
        </AnimatedSection>
        <AnimatedSection className="text-2xl sm:text-3xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline w-full justify-center flex-wrap gap-x-2 md:gap-x-4" animationType="fade-in-right" delay={0.2}>
          <span className="font-bold">Signature</span> <span className="font-serif italic text-darkBrown/70">Cocktails</span>
        </AnimatedSection>
        <AnimatedSection className="text-2xl sm:text-3xl md:text-6xl hover:scale-105 transition duration-500 cursor-pointer flex items-baseline w-full justify-center flex-wrap gap-x-2 md:gap-x-4" animationType="fade-in-right" delay={0.3}>
          <span className="font-bold">Fresh</span> <span className="font-serif italic text-darkBrown/70">Platters</span>
        </AnimatedSection>
      </div>
      
      {/* Floating images - hidden on mobile to prevent overlap */}
      <AnimatedSection className="hidden md:block absolute top-32 left-[10%] w-48 h-32 -rotate-6 rounded-sm shadow-xl overflow-hidden opacity-80 hover:opacity-100 transition z-0" animationType="scale-in">
        <Image src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tomahawk" fill sizes="(max-width: 768px) 0vw, 33vw" className="object-cover" />
      </AnimatedSection>
      <AnimatedSection className="hidden md:block absolute top-48 right-[15%] w-40 h-48 rotate-6 rounded-sm shadow-xl overflow-hidden opacity-80 hover:opacity-100 transition z-0" animationType="scale-in" delay={0.2}>
        <Image src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Cocktail" fill sizes="(max-width: 768px) 0vw, 33vw" className="object-cover" />
      </AnimatedSection>
      
      <div className="mt-12 md:mt-20 text-center relative z-10">
        <AnimatedSection animationType="fade-in-up">
          <button className="bg-accentBrown text-cream px-6 py-3 text-xs font-semibold hover:bg-darkBrown transition inline-flex items-center gap-3 rounded-sm tracking-widest uppercase">
            See Full Menu <span>→</span>
          </button>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
