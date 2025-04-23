
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-fusion-light via-white to-fusion-secondary/20 relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent"></div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fusion-dark mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-fusion-dark via-fusion-dark to-fusion-primary">
            Strategic Supply Chain Solutions for Modern Business
          </h1>
          <p className="text-xl text-fusion-gray mb-8 leading-relaxed">
            We help businesses transform their supply chains through innovative sourcing strategies, 
            technology implementation, and operational excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-fusion-primary text-fusion-dark hover:bg-fusion-secondary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
            <Button 
              className="bg-white border-2 border-fusion-primary text-fusion-dark hover:bg-fusion-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute -bottom-16 right-0 w-full h-32 bg-white transform rotate-3 origin-bottom-right"></div>
    </section>
  );
};

export default Hero;
