'use client';

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const faqs = [
  {
    question: "Do you accept large group reservations?",
    answer: "Absolutely. We offer large tables and private sections for birthdays, corporate events, and special occasions. Please place your reservation at least 3-5 days in advance."
  },
  {
    question: "Do you grill fresh every day?",
    answer: "Yes, we prepare our ingredients and fire up the grills fresh every single morning to ensure the highest quality and best flavor for our guests."
  },
  {
    question: "Do you use authentic wood fire?",
    answer: "We proudly use carefully selected hardwood to fuel our grills. This gives our meats and vegetables that authentic, deep smoky flavor you can only get from real wood fire."
  },
  {
    question: "Can I place an order online?",
    answer: "Yes! You can order directly through our website or our partner delivery apps. We ensure your food is packed securely so it arrives hot and fresh."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <AnimatedSection className="py-32 px-8 md:px-16 max-w-4xl mx-auto" animationType="fade-in-up">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans text-darkBrown tracking-tight mb-4">
          Frequently <span className="font-serif italic">Asked Questions</span>
        </h2>
        <p className="text-sm text-darkBrown/70">Common questions, simple answers.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <AnimatedSection 
              key={index}
              className={`rounded-sm transition-all duration-300 ${isActive ? 'bg-[#3B231B] text-cream p-8' : 'bg-transparent border border-darkBrown/20 text-darkBrown p-8 hover:bg-darkBrown/5'}`} 
              animationType="fade-in-up" 
              delay={index * 0.1}
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="text-lg font-medium tracking-wide">{faq.question}</h4>
                <span className="text-xl">{isActive ? '^' : 'v'}</span>
              </div>
              
              {/* Only show the answer when the item is active */}
              {isActive && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-sm text-cream/80 leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </AnimatedSection>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
