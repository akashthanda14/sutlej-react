import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CounterItem = ({ icon, endCount, title }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
  }, [endCount]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/2 p-4"
    >
      <div className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors duration-300" style={{ borderBottom: '4px solid rgb(251, 202, 1)' }}>
        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl" style={{ color: 'rgb(251, 202, 1)' }}>{icon}</span>
          <motion.div
            initial={{ scale: 1 }}
            animate={isVisible ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-white"
          >
            {count}+
          </motion.div>
          <h5 className="text-lg font-medium" style={{ color: 'rgb(251, 202, 1)' }}>{title}</h5>
        </div>
      </div>
    </motion.div>
  );
};

const CounterSection = () => {
  const counterData = [
    {
      icon: "👥",
      endCount: 319,
      title: "Happy Customers"
    },
    {
      icon: "⭐",
      endCount: 350,
      title: "Positive Feedback"
    },
    {
      icon: "🚚",
      endCount: 937,
      title: "Timely Delivery"
    },
    {
      icon: "⚡",
      endCount: 262,
      title: "Working Hours"
    }
  ];

  return (
    <div className="right-side py-16" style={{ backgroundColor: 'rgb(16, 38, 58)' }}>
      <div className="content-inner container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Our Core <span style={{ color: 'rgb(251, 202, 1)' }}>Values</span>
          </h2>
        </motion.div>
        
        <div className="mf-counter columns-1 style-1 pt20 flex flex-wrap -mx-4">
          {counterData.map((item, index) => (
            <CounterItem
              key={index}
              icon={item.icon}
              endCount={item.endCount}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;