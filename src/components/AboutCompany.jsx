import React from 'react';
import { motion } from 'framer-motion';
import { Smiley, Package, Clock } from 'lucide-react'; // Ensure lucide-react is installed

const AboutCompany = () => {
  return (
    <section className="welcome bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800">Services</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-center"
        >
          <h2 className="text-xl uppercase font-semibold text-gray-700">About The Company</h2>
          <h3 className="mt-4 text-lg text-gray-600">
            Sutlej Industrial Corporation, based in Phillaur, Punjab, manufactures high-quality valve guides and generator wheels. Founded by Mr. Bhandari, the company remains dedicated to precision engineering and excellence in industrial components.
          </h3>
          <p className="mt-2 text-gray-500">
            Sutlej Industrial Corporation specializes in manufacturing precision valve guides and generator wheels. Committed to quality and innovation, we serve global industrial needs.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {[
            { icon: <Smiley size={48} className="text-yellow-500" />, count: 319, label: "Happy Customers" },
            { icon: <Package size={48} className="text-yellow-500" />, count: 350, label: "Orders Received" },
            { icon: <Clock size={48} className="text-yellow-500" />, count: 937, label: "Timely Delivery" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for staggered animation
              className="bg-white shadow-lg rounded-lg p-6 w-64 text-center"
            >
              <div className="flex justify-center">{item.icon}</div>
              <div className="mt-2 text-2xl font-bold">{item.count}+</div>
              <h5 className="text-gray-600 mt-1">{item.label}</h5>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
