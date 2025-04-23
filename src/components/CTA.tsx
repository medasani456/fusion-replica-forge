
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-fusion-primary text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-fusion-primary opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Supply Chain?</h2>
          <p className="text-lg mb-8 opacity-90">
            Speak with our experts today to discover how we can help you optimize operations, 
            reduce costs, and gain a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-fusion-primary hover:bg-opacity-90 transition-all duration-200 px-6 py-3 text-base">
              Schedule a Consultation
            </Button>
            <Button className="bg-transparent border border-white hover:bg-white hover:text-fusion-primary transition-all duration-200 px-6 py-3 text-base">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
