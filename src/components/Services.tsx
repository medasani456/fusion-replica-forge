
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Procurement Transformation',
    description: 'Streamline your procurement processes and achieve cost savings through strategic sourcing initiatives.',
    icon: '📊',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'Enhance visibility, flexibility, and resilience across your entire supply chain network.',
    icon: '🔄',
  },
  {
    title: 'Manufacturing Excellence',
    description: 'Improve production efficiency, quality, and capacity utilization through lean methodologies.',
    icon: '⚙️',
  },
  {
    title: 'Sustainable Sourcing',
    description: 'Develop and implement eco-friendly practices to reduce environmental impact and meet sustainability goals.',
    icon: '🌱',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-fusion-light/30 relative">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fusion-dark via-fusion-dark to-fusion-primary">
            Our Solutions
          </h2>
          <p className="text-xl text-fusion-gray max-w-3xl mx-auto">
            We provide end-to-end solutions to optimize your supply chain operations
            and drive measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-white/80 backdrop-blur-sm border border-fusion-primary/10 hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-fusion-dark group-hover:text-fusion-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-fusion-gray mb-4">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-fusion-primary font-medium group-hover:translate-x-2 transition-all duration-300">
                  Learn more <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
