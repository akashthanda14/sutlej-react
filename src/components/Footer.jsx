import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Globe, Phone, Mail, ArrowUp, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-6 h-6" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    {
      icon: <Globe className="w-6 h-6 text-[#fbca01] flex-shrink-0" />,
      content: (
        <>
          Sutlej Industrial Corporation - Noormahal Road Phillaur<br />
          Near Friends Charitable Hospital, 144410
        </>
      ),
    },
    {
      icon: <Phone className="w-6 h-6 text-[#fbca01] flex-shrink-0" />,
      content: (
        <>
          +91 99993 63465<br />
          +91 97815 10504
        </>
      ),
    },
    {
      icon: <Mail className="w-6 h-6 text-[#fbca01] flex-shrink-0" />,
      content: "sutlejindustrialcorp@gmail.com",
    },
  ];

  return (
    <footer className="bg-[#10263a] text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.img
              src="https://i.ibb.co/ymBMYrB9/logo.png"
              alt="Sutlej Industrial Corporation"
              className="h-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            />
            <p className="text-gray-300 max-w-md text-lg leading-relaxed">
              Sutlej Industrial Corporation specializes in manufacturing
              precision valve guides and generator wheels, delivering
              high-quality, durable products.
            </p>
            <div className="space-y-4">
              <p className="text-[#fbca01] font-semibold text-lg">Follow us:</p>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    whileHover={{ scale: 1.1, color: '#fbca01' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-[#fbca01] transition-all duration-300"
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold text-[#fbca01]">Contact us</h4>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-1">{info.icon}</div>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {info.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-400 text-sm"
          >
            © {new Date().getFullYear()} Sutlej Industrial Corporation. All rights reserved.
          </motion.p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#fbca01] text-[#10263a] p-4 rounded-full shadow-lg hover:bg-white transition-colors duration-300"
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