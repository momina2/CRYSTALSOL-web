import React from "react";
import { Users, Clock, Zap, BarChart2, Calendar } from "lucide-react";
import LaptopCarousel from "../components/laptopslider";
import MobileMockup from "../components/MobileSlider";
import PricingFaq from "../components/Pricing";
import dashboardGym from "../assets/Dashboard-gym.jpeg";
import feeCollection from "../assets/fee-collection.jpeg";
import memberMaintenance from "../assets/member-maintenance-gym.jpeg";
import trainerMaintenance from "../assets/trainer-maintenance.jpeg";
import billGeneration from "../assets/Bill-Generation-gym.jpeg";
import LaptopBillGeneration from "../assets/bg.jpeg";
import LaptopMemberMaintenance from "../assets/mm.jpeg";
import LaptopFeeCollection from "../assets/fcg.jpeg";

const Card = ({ title, subtitle, Icon, href }) => (
  <a
    href={href}
    className="w-full p-6 rounded-xl border-[1px] border-slate-300 relative overflow-hidden group bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 rounded-xl" />
    <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200 opacity-50 group-hover:text-blue-700 group-hover:rotate-12 transition-transform duration-300" />
    <Icon className="mb-4 text-3xl text-blue-600 group-hover:text-white transition-colors relative z-10 duration-300" />
    <h3 className="font-semibold text-lg text-slate-950 group-hover:text-white relative z-10 duration-300 mb-1">
      {title}
    </h3>
    <p className="text-slate-500 group-hover:text-blue-200 relative z-10 duration-300 text-sm">
      {subtitle}
    </p>
  </a>
);

const myPhoneSlides = [
  { name: "Gym Dashboard", src: dashboardGym },
  { name: "Fee Collection", src: feeCollection },
  { name: "Member Maintenance", src: memberMaintenance },
  { name: "Trainer Maintenance", src: trainerMaintenance },
  { name: "Bill Generation", src: billGeneration },
];

const myLaptopSlides = [
  { name: "Bill Generation", src: LaptopBillGeneration },
  { name: "Fee Collection", src: LaptopFeeCollection },
  { name: "Member Maintenance", src: LaptopMemberMaintenance },
];

const GymPortfolio = () => {
  const features = [
    {
      title: "Attendance Management",
      subtitle:
        "Barcode/QR-based check-in for memebers One-tap attendacne marking by trainers & admins Detailed attendance reports for members staff Track punctuality & gym usage patterns",
      Icon: Users,
    },
    {
      title: "Time Slot Management",
      subtitle:
        "Schedule members into specific time slots Reduce overcrowding & gym rush Smooth gym experience for everyone Better time control, better workouts.",
      Icon: Clock,
    },
    {
      title: "Smart Notifications",
      subtitle:
        "Automatic welcome emails for new members Bill generation & payment reminders set instantly Real-time alerts for trainers, members, and owners Stay connected, Stay updated",
      Icon: Zap,
    },
    {
      title: "Billing & Payments",
      subtitle:
        " Automatic bill generation for every member Easy bill collection & tracking Complete billing history anytime No stress. No delays",
      Icon: BarChart2,
    },
    {
      title: "Admin Dashboard",
      subtitle:
        "Easy-to-use, modern & secure dashboard Real-time analytics & reports Designed for owners, trainers, and members Run your gym smarter, not harder",
      Icon: Users,
    },
    {
      title: "Facility Management",
      subtitle:
        "Assign specific facilities to members Track who uses which equipment & service Ensure fair use and organized management More control, less chaos",
      Icon: Clock,
    },
    {
      title: "Mobile & Web Admin Panel",
      subtitle:
        "Full-featured Admin Panel in Mobile App Powerful Web Application for complete control Trainers, owners & members - all connected in one system Real-time sync between web & mobile",
      Icon: Calendar,
    },
    {
      title: "Complete Solution",
      subtitle: "One-stop gym management platform.",
      Icon: Zap,
    },
  ];

  // return (
  //   <div className="min-h-screen bg-white text-gray-900 font-sans">
  //     {/* HEADING ON TOP */}
  //     <h1 className="text-5xl font-extrabold text-center mt-16">
  //       Gym Management System
  //     </h1>
  //     <p className="text-center text-lg text-gray-600 mt-2">
  //       Mobile & Web Based Complete Solution
  //     </p>

  //     {/* MOCKUP SECTION */}
  //     <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-20 bg-white">
  //       <div className="w-full flex justify-center">
  //         <MobileMockup slides={myPhoneSlides} mockupTitle="Mobile App Demo" />
  //       </div>

  //       <div className="w-full flex justify-center">
  //         <LaptopCarousel slides={myLaptopSlides} mockupTitle="Web App Demo" />
  //       </div>
  //     </div>

  //     {/* FEATURES SECTION */}
  //     <section className="py-20 md:py-32 px-4 md:px-12 bg-gray-50 mt-10">
  //       <div className="max-w-7xl mx-auto">
  //         <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
  //           {features.map((f, i) => (
  //             <Card
  //               key={i}
  //               title={f.title}
  //               subtitle={f.subtitle}
  //               Icon={f.Icon}
  //               href="#"
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </section>

  //     {/* PRICING & FAQ SECTION */}
  //     <section className="py-20 md:py-32 px-4 md:px-12 bg-gray-100">
  //       <PricingFaq />
  //     </section>

  //     {/* FINAL CTA */}
  //     <section className="py-20 md:py-32 px-4 md:px-12 bg-gray-900 text-white">
  //       <div className="max-w-5xl mx-auto text-center">
  //         <h3 className="text-4xl sm:text-6xl font-extrabold leading-tight">
  //           Interested in your own App?
  //         </h3>
  //         <p className="mt-6 text-xl font-light text-gray-300">
  //           Contact us today to upgrade your gym with our powerful app.
  //         </p>

  //         <div className="mt-10">
  //           <p className="text-2xl font-bold text-blue-400 mb-4">
  //             03028427221 | 03044770075
  //           </p>
  //           <button className="px-10 py-4 text-xl bg-blue-800 text-white rounded-full font-bold hover:bg-blue-700 shadow-xl shadow-blue-500/50">
  //             Contact Now <Zap className="inline w-6 h-6 ml-2" />
  //           </button>
  //         </div>
  //       </div>
  //     </section>

  //     <footer className="py-8 text-center text-gray-500 border-t border-gray-100">
  //       <p>© 2025 Crystal Solutions | Gym Management System</p>
  //       <p>Email: crystalgym2025@gmail.com</p>
  //     </footer>
  //   </div>
  // );
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HERO SECTION */}
      <section className="p-20 text-center bg-white">
        <h1 className="text-5xl font-extrabold">Gym Management System</h1>
        <p className="text-lg text-gray-600 mt-3">
          Mobile & Web Based Complete Solution
        </p>
      </section>

      {/* MOCKUPS */}
      <section className="py-6 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 lg:px-2 max-w-7xl mx-auto">
          <MobileMockup slides={myPhoneSlides} mockupTitle="Mobile App Demo" />
          <LaptopCarousel slides={myLaptopSlides} mockupTitle="Web App Demo" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 text-slate-900">
            Everything Your Gym Needs — In One Place
          </h2>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Card
                key={i}
                title={f.title}
                subtitle={f.subtitle}
                Icon={f.Icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <PricingFaq />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-5xl font-extrabold">
            Interested in your own App?
          </h3>

          <p className="mt-6 text-xl text-gray-300">
            Contact us today to upgrade your gym with our powerful app.
          </p>

          <p className="mt-10 text-2xl font-bold text-blue-400">
            03028427221 | 03044770075
          </p>

          <button className="mt-6 px-10 py-4 text-xl bg-blue-600 hover:bg-blue-500 rounded-full font-bold shadow-xl">
            Contact Now <Zap className="inline w-6 h-6 ml-2" />
          </button>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 bg-white border-t border-gray-200">
        © 2025 Crystal Solutions | Gym Management System <br />
        crystalgym2025@gmail.com
      </footer>
    </div>
  );
};

export default GymPortfolio;
