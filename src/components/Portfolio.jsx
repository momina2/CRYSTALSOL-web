import React from 'react';

// Sample data for portfolio projects
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    category: 'Web Development',
    description: 'Developed a modern, responsive e-commerce site with enhanced UX, leading to a 30% increase in sales.',
    imageUrl: 'https://via.placeholder.com/400x250/fca5a5/7f1d1d?text=Project+1', // Placeholder image
    link: '#', // Link to actual case study or project page
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    category: 'Mobile App Development',
    description: 'Built a secure and user-friendly mobile banking application for iOS and Android platforms.',
    imageUrl: 'https://via.placeholder.com/400x250/fca5a5/7f1d1d?text=Project+2', // Placeholder image
    link: '#',
  },
  {
    id: 3,
    title: 'AI-Powered Analytics Dashboard',
    category: 'Data & AI Solutions',
    description: 'Designed an intuitive dashboard for visualizing complex data with AI-driven insights.',
    imageUrl: 'https://via.placeholder.com/400x250/fca5a5/7f1d1d?text=Project+3', // Placeholder image
    link: '#',
  },
  {
    id: 4,
    title: 'SaaS CRM Integration',
    category: 'Enterprise Solutions',
    description: 'Integrated a custom CRM solution with existing enterprise systems, streamlining workflows.',
    imageUrl: 'https://via.placeholder.com/400x250/fca5a5/7f1d1d?text=Project+4', // Placeholder image
    link: '#',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-red-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center text-red-800 mb-6">
          Portfolio / Case Studies
        </h2>
        
        {/* Sub-heading/Description */}
        <p className="text-xl text-center text-gray-700 mb-12 max-w-4xl mx-auto">
            project
        </p>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl shadow-2xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02] hover:shadow-red-300"
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-56 object-cover group-hover:opacity-90 transition duration-300"
              />
              <div className="p-6">
                <span className="text-red-600 text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-red-700 font-semibold hover:text-red-900 transition duration-300"
                >
                  View Case Study
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Portfolio */}
        <div className="text-center mt-16">
            <p className="text-lg text-gray-700 mb-4">
                summary
            </p>
            <button className="bg-red-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition duration-300">
                contact
            </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;