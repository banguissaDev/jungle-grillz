"use client";

import { useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Gitifu Eric",
    role: "Local Guide",
    text: "had an amazing experience at Jungle Grill! From the moment I walked in, the atmosphere was warm and welcoming, with a vibrant setup that truly matches the name. The staff were very friendly, attentive, and made sure everything was perfect throughout my visit."
  },
  {
    name: "Official Victor Cesar",
    role: "Customer Review",
    text: "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes like chicken cordon bleu, beautiful presentation, unmatched ribs nyamacoma! I recommend to everyone! I would like to come back here again and again."
  },
  {
    name: "Shikama Prayer Ministry",
    role: "Customer Review",
    text: "The food was so delicious. Presentation was impeccable, and customer service was outstanding."
  },
  {
    name: "Umuganwa T. Kelly",
    role: "Customer Review",
    text: "Jungle grill is definitely the place for a good time, an exquisite meal and the best service."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto border-t border-darkBrown/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 flex flex-col h-full">
          <h2 className="text-xs font-bold tracking-[0.15em] uppercase text-darkBrown/60 mb-12">TESTIMONIALS</h2>
          <div className="w-full h-[400px] relative overflow-hidden rounded-sm">
             <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Customer" fill className="object-cover" />
          </div>
        </div>
        <div className="lg:col-span-8 flex flex-col justify-center lg:pl-16 mt-8 lg:mt-0">
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 text-darkBrown font-sans min-h-[120px]">
             "{reviews[currentIndex].text}"
          </p>
          <div className="flex justify-between items-end">
            <div>
              <p className="font-bold text-lg text-darkBrown mb-1 font-sans">{reviews[currentIndex].name}</p>
              <p className="text-sm text-darkBrown/60 font-sans">{reviews[currentIndex].role}</p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={prevReview}
                className="w-12 h-12 rounded-full border border-darkBrown/20 text-darkBrown/50 flex items-center justify-center hover:bg-darkBrown/5 hover:text-darkBrown transition"
              >
                &larr;
              </button>
              <button 
                onClick={nextReview}
                className="w-12 h-12 rounded-full border border-darkBrown/20 text-darkBrown/50 flex items-center justify-center hover:bg-darkBrown/5 hover:text-darkBrown transition"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
