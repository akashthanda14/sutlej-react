import React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Award, Clock, Truck, Users } from 'lucide-react';

const CounterItem = ({ icon, endCount, title, delay }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const startCounting = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = endCount / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= endCount) {
          setCount(endCount);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    };

    const timeout = setTimeout(startCounting, delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [inView, endCount, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="w-full md:w-1/2 lg:w-1/4 p-4"
    >
      <div 
        className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl" 
        style={{ borderBottom: '4px solid rgb(251, 202, 1)' }}
      >
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ scale: 1 }}
            animate={inView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: (delay + 500) / 1000 }}
            className="text-[rgb(251,202,1)] w-12 h-12 flex items-center justify-center"
          >
            {icon}
          </motion.div>
          
          <motion.div
            initial={{ scale: 1 }}
            animate={inView ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5, delay: (delay + 1000) / 1000 }}
            className="text-4xl font-bold text-white flex items-center gap-1"
          >
            <span className="tabular-nums">{count}</span>
            <span className="text-[rgb(251,202,1)]">+</span>
          </motion.div>
          
          <motion.h5
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: (delay + 1500) / 1000 }}
            className="text-lg font-medium text-[rgb(251,202,1)]"
          >
            {title}
          </motion.h5>
        </div>
      </div>
    </motion.div>
  );
};

const CounterSection = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const counterData = [
    {
      icon: <Users className="w-8 h-8" />,
      endCount: 319,
      title: "Happy Customers",
      delay: 0,
    },
    {
      icon: <Award className="w-8 h-8" />,
      endCount: 350,
      title: "Positive Feedback",
      delay: 200,
    },
    {
      icon: <Truck className="w-8 h-8" />,
      endCount: 937,
      title: "Timely Delivery",
      delay: 400,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      endCount: 262,
      title: "Working Hours",
      delay: 600,
    }
  ];

  return (
    <div ref={sectionRef} className="py-16 bg-[rgb(16,38,58)]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Core <span className="text-[rgb(251,202,1)]">Values</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={sectionInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-20 h-1 bg-[rgb(251,202,1)] mx-auto mt-4"
          />
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {counterData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              endCount={item.endCount}
              title={item.title}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;