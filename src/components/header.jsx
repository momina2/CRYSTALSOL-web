import React, { useState } from "react";
import {
  Monitor,
  ShoppingBag,
  Globe,
  ShieldCheck,
  DollarSign,
  MessageSquare,
  ChevronDown,
  MousePointer,
  Scale,
  Menu,
} from "lucide-react";

// Placeholder for the logo URL.
import LOGO_PLACEHOLDER_URL from "../assets/cs-logo.png";

// Products array (data for the dropdown)
const products = [
  {
    name: "Electronics Software",
    color: "text-blue-900 group-hover:text-blue-500",
    Icon: Monitor,
    description: "Comprehensive IT management and consulting.",
    href: "/services/electronics-software",
  },
  {
    name: "Installment",
    color: "text-green-600 group-hover:text-green-500",
    Icon: ShoppingBag,
    description: "Build, launch, and scale your online store.",
    href: "/services/installment-software",
  },
  {
    name: "Complaint Management",
    color: "text-red-600 group-hover:text-red-500",
    Icon: Globe,
    description: "Fast, reliable, and secure global hosting.",
    href: "/services/complaint-management",
  },
  {
    name: "Gym Management",
    color: "text-blue-900 group-hover:text-blue-500",
    Icon: Scale,
    description: "Membership, booking, and staff management.",
    href: "/services/gym-management",
  },
  {
    name: "Restaurant Management",
    color: "text-yellow-600 group-hover:text-yellow-500",
    Icon: ShieldCheck,
    description: "Protecting your data from modern cyber threats.",
    href: "/services/restaurant-management",
  },
];

// Dropdown Component (ServicesDropdown)
const ServicesDropdown = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // We only show the first 6 items in the main dropdown list
  const dropdownItems = products.slice(0, 6);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(true)}
      onMouseLeave={() => setOpenMenu(false)}
    >
      <button
        className="flex items-center bg-white gap-1 text-slate-600 hover:text-blue-700 transition duration-150 font-medium text-base"
        aria-expanded={openMenu}
      >
        Services{" "}
        <ChevronDown
          strokeWidth={2.5}
          className={`h-4 w-4 transition-transform duration-300 ${
            openMenu ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu List */}
      <div
        className={`absolute z-50 mt-2 w-[40rem] -left-60 p-4 bg-white border border-gray-100 rounded-xl shadow-2xl transition-all duration-300 transform origin-top
          ${
            openMenu
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible translate-y-2 pointer-events-none"
          }`}
      >
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 bg-blue-50/50 p-4 rounded-xl flex flex-col items-center justify-center text-center">
            <MousePointer className="h-8 w-8 text-blue-900 mb-3" />
            <p className="font-bold text-blue-900 text-lg">Dedicated Support</p>
            <p className="text-sm text-gray-500 mt-1">
              24/7 expert assistance for all your business needs.
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-2">
            {dropdownItems.map((item) => {
              // Refactored to use 'item' parameter
              // Destructuring done inside the function body to satisfy strict linters
              const { name, color, description, href, Icon } = item;

              return (
                <a
                  href={href}
                  key={name}
                  // *** REMOVED target="_blank" and rel="noopener noreferrer" ***
                  className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <Icon
                    className={`h-5 w-5 mr-3 mt-1 ${color} shrink-0`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">
                      {name}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="pt-3 border-t border-gray-100 mt-4">
          <a
            href="#"
            className="block text-center text-sm font-medium text-blue-700 hover:text-blue-900 transition-colors"
          >
            View All Solutions &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

// Navbar Component (Header)
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="h-12 w-25"
              src={LOGO_PLACEHOLDER_URL}
              alt="Crystal Solutions"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = LOGO_PLACEHOLDER_URL;
              }}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Home", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "/home"
                    : link === "Team"
                    ? "#team"
                    : link === "Contact"
                    ? "#contact-us"
                    : "#"
                }
                className="text-slate-600 hover:text-blue-700 transition duration-150 font-medium text-base"
              >
                {link}
              </a>
            ))}
            {/* SERVICES DROPDOWN HERE */}
            <ServicesDropdown />
          </div>

          {/* Login Button/Current Page Indicator */}
          <div className="hidden md:block">
            <a
              href="#login"
              className="px-4 py-2 text-sm font-bold rounded-full bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-800 transition duration-300"
            >
              Client Login
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-100 p-2 rounded-md text-gray-400 hover:text-gray-600"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Team", "Contact"].map((link) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "#Home"
                    : link === "Team"
                    ? "#team"
                    : link === "Contact"
                    ? "#contact-us"
                    : "#"
                }
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="#login"
                className="block text-center mt-2 mx-3 px-4 py-2 text-sm font-bold rounded-full bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-800 transition duration-300"
              >
                Client Login
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
