import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target } from 'lucide-react';

function OurProcess() {
  const processSteps = [
    {
      icon: <Award className="w-8 h-8 text-[#fbca01]" />,
      title: "Quality Standards",
      description: "Compliance with National and International regulations"
    },
    {
      icon: <Target className="w-8 h-8 text-[#fbca01]" />,
      title: "Precision Process",
      description: "Advanced machining and heat treatment processes"
    },
    {
      icon: <Users className="w-8 h-8 text-[#fbca01]" />,
      title: "Expert Team",
      description: "Skilled professionals ensuring top-notch quality"
    }
  ];

  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02,
      y: -5,
      transition: { type: "spring", stiffness: 300 }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { 
      rotate: 5,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  const imageVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.03,
      rotate: -1,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  return (
    
    <section className="relative py-12 md:py-20 overflow-hidden ">
      {/* Background Title */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -left-10 top-0 text-[80px] md:text-[150px] font-bold text-white/5 select-none"
      >
        Process
      </motion.div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block">
                Our Process
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute bottom-0 left-0 h-1 bg-[#fbca01]"
                />
              </h2>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="bg-[#10263a]/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-[#fbca01]/30 transition-colors"
                >
                  <motion.div variants={iconVariants}>
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mt-4">{step.title}</h3>
                  <p className="text-gray-300 mt-2">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-2/3"
          >
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-6">
              A high level Quality Control in compliance with National and International regulations and standards.
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Sutlej Industrial Corporation carefully selects high-quality materials, then casts or forges valve guides and generator wheels. Precision machining, heat treatment, and strict quality control ensure durability and performance. The final products are inspected, cleaned, and packaged for delivery.
            </p>
            
            <motion.div 
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
              className="mb-8 bg-[#10263a]/30 p-6 rounded-lg backdrop-blur-sm border border-white/10 hover:border-[#fbca01]/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white">Late Mr Anil Bhandari</h3>
              <h6 className="text-[#fbca01] font-medium mt-1">Founder (1986)</h6>
            </motion.div>

            <motion.div
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              className="relative w-48 md:w-64"
            >
              <img
                className="w-full h-auto rounded-lg shadow-xl"
                src="https://i.ibb.co/gZ1fg4Q9/Untitled-500-x-500-px.png"
                alt="Founder"
              />
              <div className="absolute inset-0 rounded-lg border-2 border-[#fbca01]/20"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;