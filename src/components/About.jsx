
// import React from "react";
// import {
//   Shield,
//   Zap,
//   Target,
//   Aperture,
//   Star,
//   Edit,
//   Expand,
//   Search,
//   Code,
//   ThumbsUp,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react"; // Using lucide-react for icons

// const About = () => {
//   // Data for the key values block in the About Us section
//   const keyValues = [
//     { name: "Safety", icon: Shield },
//     { name: "Efficient", icon: Zap },
//     { name: "Precision", icon: Target },
//     { name: "Innovation", icon: Aperture },
//   ];

//   // Data for the new "Why Choose Us" section features
//   const whyChooseUsFeatures = [
//     {
//       icon: Edit,
//       title: "Creative Expertise",
//       description:
//         "Unique designs tailored to your brand, captivating users with innovative visuals.",
//     },
//     {
//       icon: Expand,
//       title: "Responsive Designs",
//       description:
//         "Ensuring seamless experiences across all devices, maximizing user engagement and satisfaction.",
//     },
//     {
//       icon: Search,
//       title: "SEO Optimization",
//       description:
//         "Elevating your online presence with strategies that boost search engine rankings effectively.",
//     },
//     {
//       icon: Code,
//       title: "Custom Solutions",
//       description:
//         "Crafting bespoke websites that meet your specific needs, enhancing functionality and user experience.",
//     },
//     {
//       icon: ThumbsUp,
//       title: "Quick Turnaround",
//       description:
//         "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency.",
//     },
//     {
//       icon: CheckCircle,
//       title: "Exceptional Support",
//       description:
//         "Dedicated assistance during and after project completion, ensuring client satisfaction and success.",
//     },
//   ];

//   return (
//     // Outer container: Light background for the content
//     <section className="bg-white py-16 md:py-24 font-inter">
//       {/* About Us Content */}
//       <div className="max-w-6xl mx-auto px-4 md:px-12">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <p className="text-sm font-semibold uppercase tracking-widest text-blue-950 mb-2">
//             About Us
//           </p>
//           <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight">
//             Unveiling Our Identity, <br className="hidden sm:inline" />
//             Vision and Values
//           </h2>
//           <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-6">
//             We're passionate about chemical innovation. With years of experience
//             in the industry, we've established ourselves as leaders in providing
//             high-quality chemical solutions.
//           </p>
//         </div>

//         {/* Key Value Block (The middle section with icons) */}
//         <div className="relative z-10 -mt-4 mb-16">
//           <div className="bg-blue-950 text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//               {keyValues.map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center text-center p-2"
//                 >
//                   <item.icon
//                     className="w-8 h-8 md:w-10 md:h-10 text-white mb-2 opacity-90"
//                     strokeWidth={1.5}
//                   />
//                   <span className="text-sm md:text-base font-medium">
//                     {item.name}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Vision and Mission Section - CORRECTED for centering */}
//         <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-4">
//           {/* Vision Block */}
//           <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-xl bg-gray-50/50">
//             <div className="flex items-center text-blue-950 mb-4">
//               <Star className="w-6 h-6 mr-3" strokeWidth={2} />
//               <h3 className="text-2xl font-bold">Vision</h3>
//             </div>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               To lead the way in chemical manufacturing by delivering
//               innovative, sustainable, and cost-effective solutions that
//               contribute to a healthier planet.
//             </p>
//           </div>

//           {/* Mission Block */}
//           <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-xl bg-gray-50/50">
//             <div className="flex items-center text-blue-950 mb-4">
//               <Aperture className="w-6 h-6 mr-3" strokeWidth={2} />
//               <h3 className="text-2xl font-bold">Mission</h3>
//             </div>
//             <p className="text-gray-700 text-lg leading-relaxed">
//               To leverage our expertise, resources, and technology to
//               manufacture chemical products that exceed industry standards and
//               meet the evolving needs of our global customers.
//             </p>
//           </div>
//         </div>

//         {/* CTA Button
//         <div className="text-center mt-12">
//           <button className="bg-blue-950 text-white font-medium py-3 px-8 rounded-full transition duration-300 hover:bg-blue-800 shadow-xl transform hover:scale-[1.02]">
//             Know More About Us
//           </button>
//         </div> */}
//       </div>

//       {/* NEW SECTION: When people work with us - Added spacing (mt-20) */}
//       <div className="max-w-6xl mx-auto px-4 md:px-12 text-blue-950 mt-20">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 md:mb-0">
//             When people{" "}
//             <span className="inline-flex items-center">
//               do
//               {/* Toggle switch effect - visual only */}
//               <span className="relative w-16 h-8 rounded-full bg-gray-300 mx-3 p-1">
//                 <span className="block h-6 w-6 rounded-full bg-blue-950 shadow-md transform translate-x-7 transition-transform duration-300 ease-in-out"></span>
//               </span>
//             </span>
//             {/* Forced line break for "work with us." on smaller screens */}
//             <br />
//             <span className="inline-block mt-2 sm:mt-0">work with us.</span>
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {whyChooseUsFeatures.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-xl shadow-lg text-gray-800 border border-gray-100"
//             >
//               <feature.icon
//                 className="w-8 h-8 text-blue-950 mb-4"
//                 strokeWidth={1.5}
//               />
//               <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import {
  Shield,
  Zap,
  Target,
  Aperture,
  Star,
  Edit,
  Expand,
  Search,
  Code,
  ThumbsUp,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  // Data for the key values block in the About Us section
  const keyValues = [
    { name: "Safety", icon: Shield },
    { name: "Efficient", icon: Zap },
    { name: "Precision", icon: Target },
    { name: "Innovation", icon: Aperture },
  ];

  // Data for the new "Why Choose Us" section features
  const whyChooseUsFeatures = [
    {
      icon: Edit,
      title: "Creative Expertise",
      description:
        "Unique designs tailored to your brand, captivating users with innovative visuals.",
    },
    {
      icon: Expand,
      title: "Responsive Designs",
      description:
        "Ensuring seamless experiences across all devices, maximizing user engagement and satisfaction.",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Elevating your online presence with strategies that boost search engine rankings effectively.",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description:
        "Crafting bespoke websites that meet your specific needs, enhancing functionality and user experience.",
    },
    {
      icon: ThumbsUp,
      title: "Quick Turnaround",
      description:
        "Meeting deadlines consistently, providing reliable services without compromising quality or efficiency.",
    },
    {
      icon: CheckCircle,
      title: "Exceptional Support",
      description:
        "Dedicated assistance during and after project completion, ensuring client satisfaction and success.",
    },
  ];

  return (
    // Outer container: Light background for the content
    <section className="bg-white py-16 md:py-24 font-inter">
      {/* About Us Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-950 mb-2">
            About Us
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-blue-950 leading-tight">
            Unveiling Our Identity, <br className="hidden sm:inline" />
            Vision and Values
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-6">
            We're passionate about chemical innovation. With years of experience
            in the industry, we've established ourselves as leaders in providing
            high-quality chemical solutions.
          </p>
        </div>

        {/* Key Value Block (The middle section with icons) */}
        <div className="relative z-10 -mt-4 mb-16">
          <div className="bg-blue-950 text-white rounded-xl shadow-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {keyValues.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-2"
                >
                  <item.icon
                    className="w-8 h-8 md:w-10 md:h-10 text-white mb-2 opacity-90"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm md:text-base font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision and Mission Section - CORRECTED for centering */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 pt-4">
          {/* Vision Block */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-xl bg-gray-50/50">
            <div className="flex items-center justify-center text-blue-950 mb-4 w-full">
              <Star className="w-6 h-6 mr-3" strokeWidth={2} />
              <h3 className="text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To lead the way in chemical manufacturing by delivering
              innovative, sustainable, and cost-effective solutions that
              contribute to a healthier planet.
            </p>
          </div>

          {/* Mission Block */}
          <div className="flex flex-col items-center text-center p-4 shadow-lg rounded-xl bg-gray-50/50">
            <div className="flex items-center justify-center text-blue-950 mb-4 w-full">
              <Aperture className="w-6 h-6 mr-3" strokeWidth={2} />
              <h3 className="text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To leverage our expertise, resources, and technology to
              manufacture chemical products that exceed industry standards and
              meet the evolving needs of our global customers.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-950 text-white font-medium py-3 px-8 rounded-full transition duration-300 hover:bg-blue-800 shadow-xl transform hover:scale-[1.02]">
            Know More About Us
          </button>
        </div>
      </div>

      {/* NEW SECTION: When people work with us - UPDATED for image layout */}
      <div className="max-w-6xl mx-auto px-4 md:px-12 text-blue-950 mt-20">
        <div className="flex mb-10 text-left">
          {/* Using a larger font size and heavy weight to match the visual style */}
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            When people
            <br className="block" /> 
            {/* The 'do [Toggle] work with us.' section */}
            <span className="inline-flex items-center">
              <span className="text-blue-600">do</span>
              {/* Toggle switch effect - Visual matching the image */}
              <span className="relative w-16 h-10 rounded-full bg-blue-600 mx-3 p-2 shadow-inner">
                {/* The white knob, positioned to the right (transform: translate-x-7) */}
                <span className="block h-6 w-6 rounded-full bg-white shadow-md transform translate-x-7 transition-transform duration-300 ease-in-out"></span>
              </span>
            </span>
            
            <span className="inline-block">work with us.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-gray-800 border border-gray-100"
            >
              <feature.icon
                className="w-8 h-8 text-blue-950 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;