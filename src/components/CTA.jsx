import React from 'react';

const CTA = () => {
  return (
    <section className="bg-yellow-500 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Call to Action (CTA)
        </h2>
        <p className="text-xl mb-8">
            contact us
        </p>
        <button className="bg-white text-yellow-700 font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            start today
        </button>
      </div>
    </section>
  );
};

export default CTA;