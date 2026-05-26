'use client';

import { useInView } from "@/hooks/useInView";

export const AnimatedSection = ({ children, className = "", animationType = "fade-in-up", delay = 0 }) => {
  const [ref, inView] = useInView();
  
  const animationClass = {
    'fade-in-up': 'animate-fade-in-up',
    'fade-in-down': 'animate-fade-in-down',
    'fade-in-left': 'animate-fade-in-left',
    'fade-in-right': 'animate-fade-in-right',
    'scale-in': 'animate-scale-in',
    'fade-in': 'animate-fade-in',
    'slide-in-left': 'animate-slide-in-left',
    'slide-in-right': 'animate-slide-in-right',
  }[animationType] || 'animate-fade-in-up';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${inView ? animationClass : 'opacity-0'} ${className}`}
      style={{ transitionDelay: inView ? `${delay}s` : '0s' }}
    >
      {children}
    </div>
  );
};

export const AnimatedElement = ({ children, className = "", animationType = "fade-in-up" }) => {
  return (
    <AnimatedSection className={className} animationType={animationType}>
      {children}
    </AnimatedSection>
  );
};
