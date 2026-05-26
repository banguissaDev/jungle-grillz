'use client';

import { AnimatedSection } from "./AnimatedSection";

export default function WeeklyPromosSection() {
  return (
    <AnimatedSection className="py-20 px-8 md:px-16 border-t border-darkBrown/10 max-w-7xl mx-auto" animationType="fade-in-up">
      {/* Header */}
      <div className="mb-14 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-darkBrown/50 mb-3">Always Open</p>
        <h2 className="text-3xl md:text-4xl font-bold text-darkBrown leading-tight mb-4">
          Open <span className="font-serif italic font-normal">Every Day</span>
        </h2>
        <p className="text-sm md:text-base text-darkBrown/60 max-w-xl mx-auto leading-relaxed">
          We welcome you every day of the week — with <span className="font-semibold text-darkBrown/80">special promos</span> on the following days to make your experience even more unforgettable.
        </p>
      </div>

      {/* Promo Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        <AnimatedSection className="flex flex-col md:border-r border-darkBrown/10 md:pr-6" animationType="fade-in-up">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Thursday</span>
          <span className="text-sm text-darkBrown/70 uppercase tracking-widest">Cocktail Promos</span>
        </AnimatedSection>
        <AnimatedSection className="flex flex-col md:border-r border-darkBrown/10 md:px-6" animationType="fade-in-up" delay={0.1}>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Friday</span>
          <span className="text-sm text-darkBrown/70 uppercase tracking-widest">After Work Chill</span>
        </AnimatedSection>
        <AnimatedSection className="flex flex-col md:pl-6" animationType="fade-in-up" delay={0.2}>
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Sunday</span>
          <span className="text-sm text-darkBrown/70 uppercase tracking-widest">BBQ Party & Bottle Discounts</span>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
