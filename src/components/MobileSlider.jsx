import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_SPEED = 5000; // 5 seconds

const PhoneMockup = ({ children }) => {
  return (
    <div className="relative w-[300px] h-[600px] border-[10px] border-gray-900 rounded-[40px] shadow-2xl bg-black mx-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-white rounded-b-xl z-10" />
      <div className="w-full h-full p-1 overflow-hidden rounded-[30px]">
        {children}
      </div>
      <div className="absolute right-0 top-1/3 w-1 h-16 bg-gray-900 rounded-r-md" />
      <div className="absolute left-0 top-1/4 w-1 h-10 bg-gray-900 rounded-l-md" />
      <div className="absolute left-0 top-[35%] w-1 h-10 bg-gray-900 rounded-l-md" />
    </div>
  );
};

const MobileMockup = ({ slides, mockupTitle = "Device Demo" }) => {
  const validSlides =
    slides && slides.length > 0
      ? slides
      : [
          {
            name: "Placeholder",
            src: "https://placehold.co/300x600/334155/ffffff?text=Add+Slides",
          },
        ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalSlides = validSlides.length;

  // --- Carousel Navigation Logic ---
  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // --- Autoplay Logic ---
  React.useEffect(() => {
    const interval = setInterval(handleNext, AUTOPLAY_SPEED);
    return () => clearInterval(interval);
  }, [handleNext]);

  const currentSlide = validSlides[currentIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-inter">
      <h1 className="text-xl font-normal mb-12 text-gray-800">
        {mockupTitle}
      </h1>

      <div className="flex items-center justify-center w-full max-w-4xl">
        {/* Previous Button */}
        <div className="flex items-center mr-4">
          <button
            onClick={handlePrev}
            className="p-3 bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Mockup Container with Tilt Effect and Custom Carousel */}
        <div className={`flex justify-center flex-shrink-0 bg-white`}>
          <PhoneMockup>
            <div className="h-full relative transition-opacity duration-300">
              <img
                key={currentSlide.name}
                src={currentSlide.src}
                alt={`Demonstration for ${currentSlide.name}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/300x600/1f2937/ffffff?text=${currentSlide.name}`;
                  e.target.classList.remove("object-cover");
                  e.target.classList.add(
                    "p-8",
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                }}
              />
            </div>
          </PhoneMockup>
        </div>

        {/* Next Button */}
        <div className="flex items-center ml-4">
          <button
            onClick={handleNext}
            className="p-3 bg-white text-indigo-600 rounded-full shadow-lg hover:bg-indigo-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMockup;
