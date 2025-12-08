

import React from 'react';
import { Facebook, Instagram, Linkedin, Rss } from 'lucide-react';
import CSLogo from '../assets/cs-logo.png';

const LOGO_PLACEHOLDER_URL = CSLogo

// --- UPDATED LINKS AS REQUESTED ---
const utilityLinks = [
  // The requested links, ordered logically:
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Condition", href: "/terms-and-conditions" },
  { name: "Refund Policy", href: "/refund-policy" },
  { name: "Cancellation Policy", href: "/cancellation-policy" },
];

const socialLinks = [
  // Using Lucide icons as replacements for Fa icons in a single-file environment.
  { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/' },
  { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/crystalsolutions.official?igsh=amVlbXdnZms3dnJh' },
  { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 md:py-16 mt-12 shadow-inner rounded-t-xl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex-shrink-0 flex items-center mb-3">
              <img
                className="h-12 w-auto rounded-md shadow-lg"
                src={LOGO_PLACEHOLDER_URL}
                alt="Crystal Solutions"
                // Fallback for image loading error
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x48/1d4ed8/ffffff?text=CS+Logo";
                }}
              />
            </div>
            <p className="text-sm text-gray-400">
              Innovative solutions for a digital world. We build the future.
            </p>
          </div>

          {/* Column 2: Utility Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal & Policies</h4>
            <ul className="space-y-2">
              {utilityLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-gray-700 transition duration-300 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Placeholder) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-1">
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Email:</span> info@crystalsolutions.com
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Phone:</span> +92 304 4770075
                </p>
                <p className="text-sm text-gray-400">
                  <span className="font-medium text-white">Address</span> 15-D Al-Makkah Cly, Town ship, Lhr.
                </p>
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-5">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-xl text-gray-400 hover:text-green-400 transition duration-300 transform hover:scale-110 p-2 bg-gray-700 rounded-full"
                >
                  {link.icon}{" "}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs md:text-sm pt-4">
          &copy; {currentYear} CrystalSolutions. All rights reserved. 
        </div>
      </div>
    </footer>
  );
};
export default Footer;