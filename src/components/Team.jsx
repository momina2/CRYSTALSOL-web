import React from 'react';

// Team Members ka sample data
const teamMembers = [
  {
    id: 1,
    name: 'Ahmed Khan',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years of industry experience.',
    // Image placeholder - aap yahan actual URL add kar sakte hain
    imageUrl: 'https://via.placeholder.com/150/fca5a5/7f1d1d?text=Ahmed' 
  },
  {
    id: 2,
    name: 'Sara Ali',
    role: 'Lead Developer',
    bio: 'Expert in React, Node.js, and scaling web applications.',
    imageUrl: 'https://via.placeholder.com/150/fca5a5/7f1d1d?text=Sara'
  },
  {
    id: 3,
    name: 'Usman Malik',
    role: 'Project Manager',
    bio: 'Ensuring on-time delivery and smooth client communication.',
    imageUrl: 'https://via.placeholder.com/150/fca5a5/7f1d1d?text=Usman'
  },
];

const Team = () => {
  return (
    <section id="team" className="bg-red-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center text-red-800 mb-6">
          Team / Culture
        </h2>
        
        {/* Culture Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-3xl font-semibold text-red-600 mb-4">
            Our Culture: Where Innovation Thrives
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            summary
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white p-6 rounded-xl shadow-2xl transition duration-500 transform hover:scale-[1.03] hover:shadow-red-300"
            >
              <div className="text-center">
                <img 
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-red-400 mb-4" 
                  src={member.imageUrl} 
                  alt={member.name}
                />
                <h4 className="text-2xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-red-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;