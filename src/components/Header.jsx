import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Anchor, PhoneCall, MapPin, Facebook, Twitter, Linkedin, Dribbble } from "lucide-react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top Bar */}
      <div className="bg-[#071726] py-2 lg:py-3">
        <div className="container mx-auto px-4">
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex space-x-8">
              <div className="flex items-center text-gray-300 hover:text-[#FBCA00] transition-colors">
                <Anchor className="w-4 h-4 mr-2" />
                <span className="text-sm">Leading Provider Of Valve Guides</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-[#FBCA00] transition-colors">
                <PhoneCall className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 99994 3678</span>
              </div>
              <div className="flex items-center text-gray-300 hover:text-[#FBCA00] transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Near Friends Hospital, Phillaur-144410</span>
              </div>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Dribbble].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-[#FBCA00] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`bg-[#0F263A] ${scrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img src="/src/images/logo/logo.svg" alt="Logo" className="h-16" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="/" className="text-white hover:text-[#FBCA00] transition-colors">Home</a>
              <a href="/about" className="text-white hover:text-[#FBCA00] transition-colors">About Us</a>
              <a href="/products" className="text-white hover:text-[#FBCA00] transition-colors">Products</a>
              <a href="/contact" className="text-white hover:text-[#FBCA00] transition-colors">Contact Us</a>
              <a
                href="tel:+919999363465"
                className="bg-[#FBCA00] text-[#071726] px-6 py-2 rounded-full font-medium hover:bg-[#EECA1D] transition-colors"
              >
                Call Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default App;