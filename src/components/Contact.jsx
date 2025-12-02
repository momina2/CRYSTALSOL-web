import React from 'react';

const Contact = () => {
  // Yahan form submission logic aayega (React state management aur backend integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (This is a placeholder action)');
  };

  return (
    <section id="contact" className="bg-yellow-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-center text-yellow-800 mb-6">
          Contact / Get in touch
        </h2>
        
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            contact
        </p>

        <div className="flex flex-wrap -mx-4">
          
          {/* Contact Form (Left Side) */}
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-2xl border-t-4 border-yellow-500">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" rows="4" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-200"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-yellow-600 text-white font-semibold py-3 rounded-lg hover:bg-yellow-700 transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details (Right Side) */}
          <div className="w-full lg:w-1/2 px-4 self-center">
            <div className="space-y-6 text-gray-700">
                <div className="flex items-center space-x-4">
                    <span className="text-yellow-600 text-3xl">📧</span>
                    <div>
                        <h4 className="font-bold text-lg">Email</h4>
                        <p>info@yourbrand.com</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-yellow-600 text-3xl">📞</span>
                    <div>
                        <h4 className="font-bold text-lg">Phone</h4>
                        <p>+92 (XXX) YYY-ZZZZ</p>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span className="text-yellow-600 text-3xl">📍</span>
                    <div>
                        <h4 className="font-bold text-lg">Office Address</h4>
                        <p>Lahore, Pakistan</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;