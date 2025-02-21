import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Settings, History, Users, Award } from 'lucide-react';

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      number: "01",
      title: "Expertise",
      description: "Specializing in valve guides generator wheels with decades of experience",
      icon: Shield
    },
    {
      id: 2,
      number: "02",
      title: "Quality",
      description: "Rigorous quality control ensures durable, high-performance products",
      icon: Award
    },
    {
      id: 3,
      number: "03",
      title: "Customization",
      description: "Tailored solutions to meet specific industrial needs",
      icon: Settings
    },
    {
      id: 4,
      number: "04",
      title: "Legacy",
      description: "Trusted brand founded by Mr. Bhandari, known for reliability and excellence",
      icon: History
    },
    {
      id: 5,
      number: "05",
      title: "Experienced",
      description: "Decades of expertise in delivering customized, top-tier industrial components",
      icon: Users
    },
    {
      id: 6,
      number: "06",
      title: "Innovation",
      description: "Consistent product excellence backed by cutting-edge technology",
      icon: Zap
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

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

  return (
    <section className="relative min-h-screen bg-[#0a1825] text-white overflow-hidden py-12 md:py-24">
      {/* Background Title */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute -left-10 top-0 text-[80px] md:text-[150px] font-bold text-white/5 select-none"
      >
        Features
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[#10263a]/10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block"
          >
            <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full border border-white/10 bg-[#10263a]/30 backdrop-blur-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#fbca01] animate-pulse mr-2" />
              <span className="text-sm text-white/80">Why Choose Us</span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Excellence in Every Component
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-0 left-0 h-1 bg-[#fbca01]"
            />
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover why industry leaders trust us for their precision engineering needs
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
                className="relative group"
              >
                <motion.div
                  variants={cardVariants}
                  className="bg-[#10263a]/30 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-[#fbca01]/30 transition-colors p-6 md:p-8"
                >
                  <motion.div
                    variants={iconVariants}
                    className="flex items-center mb-6"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#fbca01]/10 flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-[#fbca01]" />
                    </div>
                    <span className="text-[#fbca01] text-4xl font-bold opacity-30">
                      {feature.number}
                    </span>
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300">
                    {feature.description}
                  </p>

                  <motion.div
                    className="absolute inset-0 border-2 border-[#fbca01]/20 rounded-lg opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;