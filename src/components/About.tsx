
import React from 'react';

const stats = [
  { value: '25+', label: 'Years of Experience' },
  { value: '500+', label: 'Successful Projects' },
  { value: '120+', label: 'Global Clients' },
  { value: '$3.5B', label: 'Cost Savings Delivered' },
];

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-fusion-dark mb-6">About Fusion Sourcing</h2>
            <p className="text-fusion-gray mb-6 text-lg">
              Founded in 1998, Fusion Sourcing has been a trusted advisor to Fortune 500 companies, 
              helping them navigate complex supply chain challenges and capitalize on emerging opportunities.
            </p>
            <p className="text-fusion-gray mb-6 text-lg">
              Our team of experienced consultants combines deep industry knowledge with cutting-edge 
              analytical capabilities to deliver tailored solutions that drive measurable business outcomes.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-fusion-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-fusion-gray">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-fusion-secondary opacity-10 rounded-lg"></div>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80" 
                alt="Team meeting" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-fusion-primary opacity-10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
