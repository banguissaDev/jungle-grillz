'use client';

import { useState } from "react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image src="/hero_bg.png" alt="Jungle Grillz Hero" fill sizes="100vw" className="object-cover opacity-80" priority />
      </div>

      {/* Navbar */}
      <nav className="relative z-20 flex justify-between items-center px-8 py-6 text-cream/90 animate-fade-in-down">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:text-white transition"
          onClick={() => setIsMenuOpen(true)}
        >
          <div className="flex flex-col gap-[5px]">
            <span className="w-6 h-px bg-current"></span>
            <span className="w-6 h-px bg-current"></span>
          </div>
          <span className="text-sm tracking-wide uppercase">Menu</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
             <Image src="/JUNGLE_LOGO.jpg" alt="Jungle Grillz Logo" fill sizes="48px" className="object-cover" />
          </div>
          <div className="text-3xl font-serif tracking-wide text-white hidden sm:block">Jungle Grillz</div>
        </div>
        <div className="text-sm tracking-wide uppercase flex items-center gap-2 cursor-pointer hover:text-white transition">
          Order Now <span>→</span>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#3B231B] text-cream flex flex-col p-8 md:p-16 animate-fade-in">
          <div className="flex justify-between items-center w-full mb-16">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20">
                <Image src="/JUNGLE_LOGO.jpg" alt="Jungle Grillz Logo" fill sizes="48px" className="object-cover" />
              </div>
              <div className="text-3xl font-serif tracking-wide text-white">Jungle Grillz</div>
            </div>
            <button 
              className="text-4xl font-light hover:text-white transition focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
            >
              ✕
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center flex-1 gap-8 text-4xl md:text-6xl font-serif">
            <a href="#" className="hover:text-white hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#" className="hover:text-white hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#" className="hover:text-white hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)}>Menu</a>
            <a href="#" className="hover:text-white hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)}>Reservations</a>
            <a href="#" className="hover:text-white hover:scale-105 transition-all" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-24 px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end w-full">
          <div className="max-w-3xl animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-cream/80 mb-6">
              Premium Quality
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Flame. Flavor.<br />
              <span className="font-serif italic font-normal text-cream/90">Jungle vibes</span>
            </h1>
          </div>
          
          <div className="mt-8 md:mt-0 max-w-xs flex flex-col items-start md:items-end text-left md:text-right animate-fade-in-right" style={{ animationDelay: '0.5s' }}>
            <p className="text-cream/80 text-sm md:text-base leading-relaxed mb-6">
              Delight in premium grilled food, cocktails & great atmosphere. Join us in Kigali.
            </p>
            <button className="bg-cream/90 hover:bg-white text-darkBrown px-6 py-3 rounded flex items-center gap-3 text-sm font-semibold transition">
              View Our Menu <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
