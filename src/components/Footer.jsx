import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Globe, Phone, Mail, ArrowUp, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-primary text-white relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="-ml-5">
              <motion.img
                src="https://placehold.co/200x60?text=Logo"
                alt="Sutlej Industrial Corporation"
                className="h-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
            </div>
            <p className="text-white max-w-md">
              Sutlej Industrial Corporation specializes in manufacturing
              precision valve guides and generator wheels, delivering
              high-quality, durable products.
            </p>
            <div className="space-y-2">
              <p className="text-white font-medium">Follow us:</p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-secondary transition-colors"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Contact us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Globe className="w-5 h-5 text-white mt-1" />
                <p className="text-white">
                  Sutlej Industrial Corporation - Noormahal Road Phillaur<br />
                  Near Friends Charitable Hospital, 144410
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <p className="text-white">+91 99993 63465</p>
                  <p className="text-white">+91 97815 10504</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <p className="text-white">sutlejindustrialcorp@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white text-sm">
            Copyright Reserved to Sutlej Industrial Corp 2024
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-secondary text-primary p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
