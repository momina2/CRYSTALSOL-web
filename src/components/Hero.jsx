

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "@untitledui/icons";

const slides = [
  {
    title: "Installment Software",
    tagline:
      "Our Installment and Trading Softwar provides robust tools for managing flexible payment plans and seamless asset trading for electronics and goods.",
    cta: "Request a Demo",
    imgSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172", // Placeholder for Electronics/Finance
  },
  {
    title: "Streamlined Complaint Management",
    tagline:
      "The Complaint Management System centralizes customer feedback, automates ticket routing, and ensures timely resolution to enhance client satisfaction.",
    cta: "View Case Studies",
    imgSrc:
      "https://i.pinimg.com/1200x/89/75/21/897521953de15f49906cf68f06f6ee66.jpg", // Placeholder for Customer Service/Ticketing
  },
  {
    title: "All-in-One Fitness Platform",
    tagline:
      "Our Gym Mobile and Web Application offers member management, class scheduling, and personalized workout tracking to grow your fitness business.",
    cta: "Explore Features",
    imgSrc:
      "https://i.pinimg.com/1200x/d8/5a/cd/d85acd4f9c396b959ea0258b1dee5c92.jpg", // Placeholder for Gym App
  },
  {
    title: "Digital Restaurant Ecosystem",
    tagline:
      "The Restaurant Mobile and Web Application simplifies ordering, reservations, and loyalty programs, enhancing the dining experience for modern eateries.",
    cta: "Book a Consultation",
    imgSrc:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder for Restaurant App
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = slides.length;

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const currentSlide = slides[activeIndex];

  return (
    // Set background to white
    <section className="bg-white text-gray-900 py-20 md:py-32 font-sans">
      <div className="container mx-auto px-4">
        {/* Main Grid: Divide into two equal halves */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Half: Dynamic Text Content (Professional Font) */}
          <div className="text-center md:text-left">
            {/* The key on the h1 forces React to re-render and apply the transition */}
            <h1
              key={activeIndex}
              className="text-6xl font-extrabold mb-4 leading-tight tracking-tight transition-opacity duration-700 ease-in-out"
            >
              {/* Removed emojis */}
              {currentSlide.title}
            </h1>
            <p className="text-xl text-gray-600 mb-10 transition-opacity duration-700 ease-in-out">
              {currentSlide.tagline}
            </p>

            {/* Call to Action Button: Using a professional primary color */}
            <button className="bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              {currentSlide.cta}
            </button>
          </div>

          {/* Right Half: Image Carousel */}
          <div className="relative aspect-[1.6] w-full mx-auto md:mx-0">
            {/* Carousel Content Container */}
            <div className="overflow-hidden rounded-xl shadow-2xl">
              {/* Carousel Track (uses flex and transform for sliding) */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      alt={`Slide ${index + 1}`}
                      src={slide.imgSrc}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Indicators - Refined Pill Shape */}
            <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex space-x-3 p-1.5 bg-black/30 backdrop-blur-xs rounded-full shadow-lg">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-2.5 // Fixed height
                    rounded-full 
                    transition-all duration-300 ease-in-out 
                    ${
                      index === activeIndex
                        ? "bg-white w-8" // Active: White, longer width (w-8)
                        : "bg-white/60 w-2.5 hover:bg-white/80" // Inactive: Shorter width (w-2.5)
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
