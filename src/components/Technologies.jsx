import React from 'react';

// Sample data for key technologies
const techStack = [
  { name: 'React', icon: '⚛️', description: 'Modern UI/UX development for complex applications.' },
  { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first framework for rapid and responsive styling.' },
  { name: 'Node.js', icon: '⚙️', description: 'Scalable and high-performance server-side development.' },
  { name: 'MongoDB', icon: '🗄️', description: 'Flexible NoSQL database for fast data storage.' },
  { name: 'AWS/Azure', icon: '☁️', description: 'Cloud infrastructure deployment and management.' },
  { name: 'Python/Django', icon: '🐍', description: 'Data science and backend business logic expertise.' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="bg-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center text-green-800 mb-6">
          Technologies / Expertise
        </h2>
        
        {/* Expertise Summary */}
        <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            Summary
        </p>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techStack.map((tech, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-xl text-center border-t-4 border-green-500 transition duration-300 hover:shadow-2xl hover:bg-green-100"
            >
              <div className="text-5xl mb-3">
                {tech.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {tech.name}
              </h3>
              <p className="text-gray-600 text-sm hidden sm:block">
                {/* Mobile mein description chupaya ja sakta hai */}
                {tech.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action for Tech */}
        <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-4">
                summary
            </p>
            <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition duration-300">
                contact
            </button>
        </div>

      </div>
    </section>
  );
};

export default Technologies;