
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: 'Global Retailer Reduces Costs by 23%',
    category: 'Retail',
    description: 'Strategic sourcing initiative for a Fortune 500 retailer resulting in significant cost reduction and improved supplier relationships.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80'
  },
  {
    title: 'Manufacturing Plant Increases Efficiency by 35%',
    category: 'Manufacturing',
    description: 'Implemented lean manufacturing practices and optimized material flow to boost productivity and reduce waste.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'
  },
  {
    title: 'Healthcare Provider Streamlines Supply Chain',
    category: 'Healthcare',
    description: 'End-to-end supply chain optimization for a large healthcare network, resulting in improved service levels and reduced inventory costs.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80'
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 bg-fusion-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            See how we've helped leading organizations transform their supply chains and achieve exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-white overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="text-sm font-medium text-fusion-secondary px-3 py-1 bg-fusion-light rounded-full">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-fusion-dark">
                  {study.title}
                </h3>
                <p className="text-fusion-gray mb-6 flex-grow">
                  {study.description}
                </p>
                <Button variant="outline" className="mt-auto">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="button-primary">View All Case Studies</Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
