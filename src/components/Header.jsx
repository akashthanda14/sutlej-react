import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Anchor, PhoneCall, MapPin, Facebook, Twitter, Linkedin, Dribbble } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
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
                <span className="text-sm">+91 99993 63465</span>
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
      <nav className={`bg-[#0F263A] ${scrolled ? 'py-0.5' : 'py-2'} transition-all duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <img
                src="https://i.ibb.co/ymBMYrB9/logo.png"
                alt="Logo"
                className="h-20"
              />
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
              className="lg:hidden text-white focus:outline-none z-50"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-[#0F263A] shadow-xl lg:hidden overflow-y-auto"
            >
              <motion.div
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="flex flex-col h-full"
              >
                <div className="p-6 space-y-6">
                  {/* Mobile Navigation Links */}
                  <motion.div className="space-y-4" variants={containerVariants}>
                    {['Home', 'About Us', 'Products', 'Contact Us'].map((item, index) => (
                      <motion.a
                        key={index}
                        href={`/${item.toLowerCase().replace(' ', '-')}`}
                        className="block text-lg text-white hover:text-[#FBCA00] transition-colors"
                        variants={menuItemVariants}
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Mobile Contact Info */}
                  <motion.div variants={menuItemVariants} className="pt-6 border-t border-white/10">
                    <a
                      href="tel:+919999363465"
                      className="block w-full bg-[#FBCA00] text-[#071726] px-6 py-3 rounded-full font-medium text-center hover:bg-[#EECA1D] transition-colors"
                    >
                      Call Us
                    </a>
                  </motion.div>

                  {/* Mobile Social Links */}
                  <motion.div variants={menuItemVariants} className="pt-6 border-t border-white/10">
                    <div className="flex justify-center space-x-6">
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
                  </motion.div>

                  {/* Mobile Contact Details */}
                  <motion.div variants={menuItemVariants} className="space-y-4 text-sm text-gray-300">
                    <div className="flex items-center">
                      <PhoneCall className="w-4 h-4 mr-2 text-[#FBCA00]" />
                      <span>+91 99993 63465</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#FBCA00]" />
                      <span>Near Friends Hospital, Phillaur-144410</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;