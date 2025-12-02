import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// --- 1. Pricing Card Component ---
const PricingCard = ({
  title,
  price,
  isFeatured,
  features,
  buttonText,
  buttonColor,
}) => {
  const cardClasses = isFeatured
    ? "bg-blue-600 text-white shadow-2xl scale-105"
    : "bg-white text-gray-900 border border-slate-300";

  const buttonClasses = `w-full py-3 rounded-lg font-semibold mt-6 transition duration-300 ${buttonColor}`;

  return (
    <div
      className={`p-8 rounded-xl text-center flex flex-col justify-between transform hover:scale-[1.02] transition-transform duration-300 ${cardClasses}`}
    >
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p
        className={`text-4xl font-extrabold mb-1 ${
          isFeatured ? "text-white" : "text-blue-600"
        }`}
      >
        ${price}
      </p>
      <p
        className={`text-sm mb-8 ${
          isFeatured ? "text-blue-200" : "text-gray-500"
        }`}
      >
        / Month
      </p>

      <ul className="space-y-3 text-left flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check
              className={`w-5 h-5 mr-3 ${
                isFeatured ? "text-blue-200" : "text-green-500"
              }`}
            />
            <span className={isFeatured ? "text-blue-100" : "text-gray-700"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button className={buttonClasses}>{buttonText}</button>
    </div>
  );
};

// --- 2. FAQ Item Component ---
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg text-gray-800">{question}</span>
        <ChevronDown
          className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-600 pr-6">{answer}</p>
      </div>
    </div>
  );
};

// --- 3. Main Pricing and FAQ Component ---
const PricingFaq = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "19",
      isFeatured: false,
      features: [
        "Member Management",
        "Attendance (QR/Barcode)",
        "Basic Reporting",
        "1 Staff Account",
      ],
      buttonText: "Start Free Trial",
      buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      title: "Standard",
      price: "49",
      isFeatured: true,
      features: [
        "All Basic Features",
        "Billing & Payments",
        "Time Slot Management",
        "Smart Notifications",
        "5 Staff Accounts",
      ],
      buttonText: "Choose Standard",
      buttonColor: "bg-white text-blue-600 hover:bg-gray-100",
    },
    {
      title: "Pro",
      price: "99",
      isFeatured: false,
      features: [
        "All Standard Features",
        "Admin Dashboard & Analytics",
        "Facility Management",
        "Expense & Product Management",
        "Unlimited Staff",
      ],
      buttonText: "Choose Pro",
      buttonColor: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      title: "Enterprise",
      price: "Custom",
      isFeatured: false,
      features: [
        "All Pro Features",
        "Custom Branding",
        "Dedicated Support",
        "API Integration",
        "On-Premise Option",
      ],
      buttonText: "Contact Sales",
      buttonColor: "bg-gray-700 text-white hover:bg-gray-800",
    },
  ];

  // Table Data (Comparison)
  const comparisonFeatures = [
    {
      name: "Mobile App Access",
      basic: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      standard: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      pro: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
    {
      name: "Time Slot Scheduling",
      basic: "-",
      standard: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      pro: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
    {
      name: "Smart Email/SMS Alerts",
      basic: "-",
      standard: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      pro: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
    {
      name: "Expense & Inventory",
      basic: "-",
      standard: "-",
      pro: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
    {
      name: "Custom Reporting",
      basic: "-",
      standard: "-",
      pro: <Check className="w-5 h-5 text-green-500 mx-auto" />,
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
    {
      name: "Priority Support",
      basic: "-",
      standard: "-",
      pro: "-",
      enterprise: <Check className="w-5 h-5 text-green-500 mx-auto" />,
    },
  ];

  return (
    <div className="bg-white font-sans">
      <section className="py-20 md:py-32 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Affordable Plans, Real Value
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            No contract. No surprise fees. Pay monthly.
          </p>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>

          {/* Comparison Table */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 mb-10">
              Compare Plans
            </h3>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Core Features
                    </th>
                    {pricingPlans.map((plan) => (
                      <th
                        key={plan.title}
                        className={`px-6 py-4 text-center text-sm font-bold uppercase tracking-wider ${
                          plan.isFeatured ? "text-blue-600" : "text-gray-900"
                        }`}
                      >
                        {plan.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-left font-medium text-gray-800">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {feature.basic}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {feature.standard}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {feature.pro}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        {feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingFaq;
