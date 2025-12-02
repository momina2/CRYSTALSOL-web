
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_SPEED = 5000; 


const LaptopMockup = ({ children }) => {
  return (
    <div className="relative w-[700px] h-[450px] bg-black rounded-2xl shadow-2xl flex items-center justify-center p-2">
      {/* Screen area */}
      <div className="relative w-full h-full bg-gray-800 rounded-lg overflow-hidden">
        {children}
      </div>
      {/* Keyboard base */}
      <div className="absolute bottom-0 w-[720px] h-10 bg-gray-700 rounded-b-2xl transform translate-y-full -z-10" />
      <div className="absolute bottom-[-15px] w-[600px] h-4 bg-gray-600 rounded-b-lg transform translate-y-full -z-10" />{" "}
      {/* Feet/base */}
    </div>
  );
};

const LaptopCarousel = ({ slides, mockupTitle = "Web Application Demo" }) => {
  const validSlides =
    slides && slides.length > 0
      ? slides
      : [
          {
            name: "Placeholder Screen",
            src: `https://placehold.co/700x450/334155/ffffff?text=Add+Slides+to+Props`,
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
      <h1 className="text-xl font-normal mb-12 text-gray-800">{mockupTitle}</h1>

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

        {/* Laptop Mockup Container */}
        <div className={`flex justify-center flex-shrink-0`}>
          <LaptopMockup>
            <div className="h-full relative transition-opacity duration-300 flex items-center justify-center">
              <img
                key={currentSlide.name}
                src={currentSlide.src}
                alt={`Laptop demonstration for ${currentSlide.name}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://placehold.co/700x450/1f2937/ffffff?text=${currentSlide.name}`;
                  e.target.classList.remove("object-contain");
                  e.target.classList.add(
                    "p-8",
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                }}
              />
            </div>
          </LaptopMockup>
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

export default LaptopCarousel;
