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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
        <AnimatedSection className="flex flex-col lg:border-r border-darkBrown/10 lg:pr-6" animationType="fade-in-up">
          <span className="text-4xl md:text-5xl font-bold mb-3">Thursday</span>
          <span className="text-sm text-[#4A1A1A] font-bold uppercase tracking-wider mb-1">Cocktail Promos</span>
          <span className="text-xs text-darkBrown/60">Buy 1 Get 1 on Signature Cocktails</span>
        </AnimatedSection>
        
        <AnimatedSection className="flex flex-col lg:border-r border-darkBrown/10 lg:px-6" animationType="fade-in-up" delay={0.1}>
          <span className="text-4xl md:text-5xl font-bold mb-3">Friday</span>
          <span className="text-sm text-[#4A1A1A] font-bold uppercase tracking-wider mb-1">After Work Chill</span>
          <span className="text-xs text-darkBrown/60">Live DJ music & late-night grill sears</span>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col lg:border-r border-darkBrown/10 lg:px-6" animationType="fade-in-up" delay={0.2}>
          <span className="text-4xl md:text-5xl font-bold mb-3">Saturday</span>
          <span className="text-sm text-[#4A1A1A] font-bold uppercase tracking-wider mb-1">Pizza & Cocktails</span>
          <span className="text-xs text-darkBrown/70 font-semibold mb-0.5">Hot Chicken Pizza — Buy 1 Get 1</span>
          <span className="text-xs text-darkBrown/60">All Cocktails at 7,000 RWF</span>
        </AnimatedSection>
        
        <AnimatedSection className="flex flex-col lg:pl-6" animationType="fade-in-up" delay={0.3}>
          <span className="text-4xl md:text-5xl font-bold mb-3">Sunday</span>
          <span className="text-sm text-[#4A1A1A] font-bold uppercase tracking-wider mb-1">BBQ Party</span>
          <span className="text-xs text-darkBrown/60">Bottle discounts & Sunday grill platters</span>
        </AnimatedSection>
      </div>
    </AnimatedSection>
  );
}
