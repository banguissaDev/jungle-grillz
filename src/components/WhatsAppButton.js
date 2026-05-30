'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after a short delay to invite users
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "250791938593";
  const defaultMessage = encodeURIComponent("Hello Jungle Grillz! I'd like to make an order or request a reservation.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Tooltip Popup bubble */}
      {showTooltip && (
        <div className="relative mb-3 max-w-[260px] bg-white text-darkBrown p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-100 animate-fade-in flex flex-col gap-1.5">
          <button 
            onClick={() => setShowTooltip(false)} 
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 text-xs focus:outline-none"
          >
            ✕
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">We're Online</span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed pr-3">
            Hey there! Need to place an order or book a table? Let's chat on WhatsApp!
          </p>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowTooltip(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-bold py-1.5 px-3 rounded-lg text-center transition-colors duration-200"
          >
            Start Chat
          </a>
          {/* Tooltip arrow */}
          <div className="absolute right-6 bottom-[-6px] w-3 h-3 bg-white border-r border-b border-stone-100 rotate-45" />
        </div>
      )}

      {/* Floating Sticky Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full shadow-[0_10px_25px_rgba(16,185,129,0.3)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulsing ring background */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none group-hover:animate-none" />

        {/* WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor" 
          className="text-white"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.188-1.361a9.94 9.94 0 0 0 4.82 1.244h.005c5.507 0 9.99-4.478 9.99-9.985A9.998 9.998 0 0 0 12.012 2zm0 18.29h-.003a8.25 8.25 0 0 1-4.218-1.164l-.302-.18-3.136.823.837-3.058-.198-.316a8.25 8.25 0 0 1-1.264-4.41c.001-4.558 3.714-8.271 8.275-8.271 2.209 0 4.285.86 5.848 2.424a8.204 8.204 0 0 1 2.42 5.856c-.002 4.56-3.716 8.272-8.277 8.272zm4.536-6.205c-.249-.125-1.472-.727-1.7-.81-.228-.083-.393-.125-.558.125-.165.25-.64.81-.784.975-.145.165-.29.185-.538.06-.248-.125-1.048-.385-1.996-1.23-.738-.657-1.235-1.47-1.38-1.72-.144-.25-.015-.385.11-.51.111-.11.248-.29.372-.435.124-.145.165-.25.248-.415.083-.166.042-.31-.02-.436-.062-.125-.559-1.347-.765-1.848-.2-.487-.402-.42-.559-.428-.144-.007-.31-.008-.475-.008a.91.91 0 0 0-.66.31c-.227.25-.867.85-.867 2.07 0 1.22.888 2.4 1.012 2.56.124.167 1.748 2.668 4.234 3.74.59.255 1.052.408 1.411.521.593.189 1.133.162 1.559.098.476-.07 1.472-.601 1.678-1.182.207-.58.207-1.077.145-1.182-.062-.104-.228-.166-.476-.29z"/>
        </svg>
      </a>
    </div>
  );
}
