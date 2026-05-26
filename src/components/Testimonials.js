"use client";

import { AnimatedSection } from "./AnimatedSection";

const reviews = [
  {
    name: "Gitifu Eric",
    role: "Local Guide",
    text: "Had an amazing experience at Jungle Grill! From the moment I walked in, the atmosphere was warm and welcoming, with a vibrant setup that truly matches the name. The staff were very friendly, attentive, and made sure everything was perfect throughout my visit."
  },
  {
    name: "Official Victor Cesar",
    role: "Customer Review",
    text: "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes like chicken cordon bleu, beautiful presentation, unmatched ribs nyamacoma! I recommend to everyone! I would like to come back here again and again."
  },
  {
    name: "Shikama Prayer",
    role: "Customer Review",
    text: "The food was so delicious. Presentation was impeccable, and customer service was outstanding. It's definitely the place for a good time, an exquisite meal and the best service."
  },
  {
    name: "Umuganwa T. Kelly",
    role: "Customer Review",
    text: "Jungle grill is definitely the place for a good time, an exquisite meal and the best service. Highly recommend the tomahawk steak!"
  },
  {
    name: "Sarah M.",
    role: "Food Blogger",
    text: "The signature cocktails are out of this world. Paired with the BBQ platter, it's a match made in heaven. The ambiance on a Sunday evening is unmatched."
  },
  {
    name: "James K.",
    role: "Local Guide",
    text: "A perfect spot for weekend hangouts. The customer service is fast and the grill flavors are incredibly authentic. Will definitely be returning soon!"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto border-t border-darkBrown/10">
      <AnimatedSection animationType="fade-in-down">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-darkBrown mb-16 font-sans">Happy Clients</h2>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <AnimatedSection 
            key={index} 
            animationType="fade-in-up" 
            delay={index * 0.1}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-darkBrown/5 flex flex-col h-full"
          >
            <div className="w-12 h-12 bg-[#F4F7FA] rounded-full flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#A2B5CA]">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            
            <p className="text-[#3B2F2F]/80 leading-relaxed text-[15px] mb-8 flex-grow">
              {review.text}
            </p>
            
            <div className="mt-auto">
              <p className="font-bold text-lg text-darkBrown mb-1">
                - {review.name}
              </p>
              <p className="text-sm text-slate-500">
                {review.role}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
