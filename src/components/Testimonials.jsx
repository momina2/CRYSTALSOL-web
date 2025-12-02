import React from 'react';

// Sample data for client testimonials
const clientReviews = [
  {
    id: 1,
    quote: "review 1",
    name: 'Faisal Mehmood',
    title: 'CEO, TechSolutions',
    rating: 5,
  },
  {
    id: 2,
    quote: "review 2",
    name: 'Aisha Malik',
    title: 'Founder, CreativeFlow',
    rating: 5,
  },
  {
    id: 3,
    quote: "review 3",
    name: 'Zahid Hussain',
    title: 'Marketing Head, GlobalTrade',
    rating: 4,
  },
];

// Helper component for star rating display
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.817-2.042a1 1 0 00-1.175 0l-2.817 2.042c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.721c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex justify-center mb-4">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-yellow-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center text-yellow-800 mb-4">
          Testimonials / Reviews
        </h2>
        
        {/* Sub-heading/Description */}
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            summary
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-yellow-500 transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl"
            >
              <StarRating rating={review.rating} />
              
              <blockquote className="text-lg italic text-gray-700 mb-6 relative">
                <svg className="w-8 h-8 text-yellow-300 absolute -top-4 -left-3 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>
                <p className="z-10 relative">"{review.quote}"</p>
              </blockquote>
              
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {review.name}
                </h4>
                <p className="text-yellow-600 font-semibold text-sm">
                  {review.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;