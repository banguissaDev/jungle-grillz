'use client';

import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function AboutSection() {
  return (
    <AnimatedSection className="py-24 px-8 md:px-16 max-w-7xl mx-auto" animationType="fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <AnimatedSection animationType="fade-in-left">
          <div className="flex flex-col">
            <h2 className="text-xs font-bold tracking-[0.15em] uppercase mb-16 text-darkBrown/60">About Us</h2>
            
            <div className="w-32 h-24 mb-12 relative overflow-hidden rounded-sm shadow-md hover:shadow-lg transition-shadow">
              <Image src="/about_small.png" alt="Cocktail Bar" fill sizes="128px" className="object-cover" />
            </div>

            <div className="max-w-md">
              <h3 className="text-4xl md:text-5xl font-serif italic mb-6">Flame Flavor<br/>Every Day</h3>
              <p className="mb-6 text-sm md:text-base leading-relaxed text-darkBrown/80">
                At Jungle Grillz, we believe great food starts with passion. From early mornings to the final sear, every dish is crafted by hand using carefully selected ingredients. No shortcuts, just honest, delicious grilling.
              </p>
              <p className="mb-10 text-sm md:text-base leading-relaxed text-darkBrown/80">
                Whether you're stopping by for a Friday after work chill, or celebrating a special moment, we're here to make it unforgettable.
              </p>
              <button className="bg-accentBrown text-cream px-8 py-4 text-sm font-semibold hover:bg-darkBrown transition inline-flex items-center gap-3 rounded-sm">
                Our Process <span>→</span>
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Right Column (Large Image) */}
        <AnimatedSection animationType="fade-in-right">
          <div className="h-150 bg-stone-200 rounded-sm relative overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
             <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Premium Grill" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
