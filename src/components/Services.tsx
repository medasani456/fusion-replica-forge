
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
    <section className="py-20 bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Solutions</h2>
          <p className="section-subtitle">
            We provide end-to-end solutions to optimize your supply chain operations
            and drive measurable business outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-fusion-dark group-hover:text-fusion-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-fusion-gray mb-4">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-fusion-primary font-medium group-hover:underline">
                  Learn more <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
