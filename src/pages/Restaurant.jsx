import React from "react";
import { Users, Calendar, Clock, BarChart2, Zap } from "lucide-react"; // Icons ke liye

const RestaurantPortfolio = () => {
  // Mockup component jo mobile ya web screen ko dikhata hai
  const Mockup = ({ type, title, children }) => (
    <div
      className={`relative ${
        type === "mobile" ? "w-full max-w-xs" : "w-full max-w-4xl"
      }`}
    >
      <div
        className={`shadow-2xl mx-auto ${
          type === "mobile"
            ? "rounded-3xl border-[10px] border-black bg-gray-100 h-[600px] overflow-hidden"
            : "rounded-xl border border-gray-200 bg-white p-6 h-[400px]"
        }`}
      >
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 ${
            type === "mobile"
              ? "w-1/3 h-6 bg-black rounded-b-xl z-10"
              : "hidden"
          }`}
        ></div>
        {/* Mockup content */}
        <div className="text-gray-700 h-full p-2 flex flex-col justify-center items-center">
          <div className="text-2xl font-semibold mb-4 text-center">{title}</div>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* 1. HERO SECTION - Jaise AirPods Max ka Top Section */}
      <section className="pt-20 pb-20 md:pb-32 px-4 md:px-12 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-none">
          Restaurant Management
        </h1>
        <h2 className="text-xl sm:text-2xl mt-4 font-light text-gray-600 max-w-3xl">
          Restaurant Management <br />
          for Mobile and Web Application .
        </h2>

        {/* Product Visual Mockup Placeholder */}
        <div className="mt-16 w-full max-w-6xl">
          {/* Placeholder for a combined mobile/web dashboard visual */}
          <div className="relative flex justify-center items-center p-8 bg-gray-100 rounded-3xl shadow-xl">
            <Clock className="w-16 h-16 text-blue-600 opacity-20 absolute top-4 left-4" />
            <Users className="w-16 h-16 text-blue-600 opacity-20 absolute bottom-4 right-4" />
            <div className="w-3/4 h-80 bg-gray-200 rounded-xl shadow-inner flex items-center justify-center">
              <span className="text-lg text-gray-500 font-medium">
                Dashboard and Mobile View
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button className="px-8 py-3 text-lg bg-gray-900 text-white rounded-full font-medium transition duration-300 hover:bg-blue-600 shadow-lg">
            Complete Case Study Dekhein
          </button>
        </div>
      </section>

      {/* 2. SECTION - Member Management (Jaise "Sounds like an epiphany") */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* Text/Content Side */}
          <div className="md:w-1/2 text-left">
            <p className="text-blue-800 text-sm font-semibold uppercase tracking-widest mb-2">
              CORE FUNCTIONALITY
            </p>
            <h3 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Instruction
            </h3>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              profile, fees, attendance, and training plan history. User can
              himself update his information.
            </p>
            <div className="mt-8">
              <button className="flex items-center text-white font-medium group">
                <span className="mr-3">Features </span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mockup Side */}
          <div className="md:w-1/2 flex justify-center">
            <Mockup type="mobile" title="Member Profile Screen">
              <Users className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-sm">User Data</span>
            </Mockup>
          </div>
        </div>
      </section>

      {/* 3. SECTION - Class Scheduling (Jaise "Magical experience") */}
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          {/* Mockup Side */}
          <div className="md:w-1/2 flex justify-center">
            <Mockup type="web" title="Class Scheduling Dashboard">
              <Calendar className="w-12 h-12 text-gray-400 mb-2" />
              <div className="w-full h-2 bg-blue-200 rounded mb-1"></div>
              <div className="w-full h-2 bg-blue-300 rounded mb-1"></div>
              <div className="w-1/2 h-2 bg-blue-400 rounded"></div>
            </Mockup>
          </div>

          {/* Text/Content Side */}
          <div className="md:w-1/2 text-left md:text-right">
            <p className="text-blue-800 text-sm font-semibold uppercase tracking-widest mb-2">
              STREAMLINED OPERATIONS
            </p>
            <h3 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              Class Schedule
            </h3>
            <p className="mt-6 text-lg text-gray-600 max-w-lg ml-auto">
              Effortless booking and management for trainers and classes. Save
              time with real-time updates and attendance tracking.
            </p>
            <div className="mt-8">
              <button className="flex items-center text-white font-medium group ml-auto">
                <span className="mr-3">Demo Video</span>
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL SECTION - Performance Tracking & CTA */}
      <section className="py-20 md:py-32 px-4 md:px-12 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <BarChart2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
          <h3 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Performance Tracking
          </h3>
          <p className="mt-6 text-xl font-light text-gray-300 max-w-3xl mx-auto">
            Monitor Installment growth and revenue through detailed analytics and
            reporting. Make data-driven decisions.
          </p>

          <div className="mt-10">
            <button className="px-10 py-4 text-xl bg-blue-800 text-white rounded-full font-bold transition duration-300 hover:bg-blue-700 shadow-xl shadow-blue-500/50">
              See next project <Zap className="inline w-6 h-6 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-100">
        <p>© 2025 Crystal Solutions | Restaurant Management</p>
      </footer>
    </div>
  );
};

export default RestaurantPortfolio;
