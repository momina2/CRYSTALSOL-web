import React from 'react';

const servicesList = [
  'Web Development',
  'Mobile Apps',
  'Cloud Solutions'
];

const Services = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Services / What we do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-600">Is service ki tafseel yahan shamil karein.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;