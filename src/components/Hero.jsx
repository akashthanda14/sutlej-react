import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://i.ibb.co/C3x8KqxG/claudio-schwarz-E6-O183w-B5zc-unsplash.jpg",
    alt: "Precision engineering workshop with advanced equipment",
  },
  {
    
    url: "https://i.ibb.co/GfytY75Y/generator-bg.png",
    alt: "Industrial manufacturing facility with modern machinery",
  }

];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.1
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.9
  })
};

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 0.4
    }
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const imageIndex = Math.abs(page % images.length);

  const paginate = useCallback((newDirection) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPage([page + newDirection, newDirection]);
    setTimeout(() => setIsTransitioning(false), 700); // Match transition duration
  }, [page, isTransitioning]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, paginate]);

  return (
    <section 
      className="relative w-full h-[100vh] overflow-hidden bg-[#071726]"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      role="region"
      aria-label="Hero Slideshow"
    >
      <AnimatePresence
        initial={false}
        custom={direction}
        mode="wait"
      >
        <motion.div
          key={page}
          className="absolute inset-0"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.7 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <motion.img
            src={images[imageIndex].url}
            alt={images[imageIndex].alt}
            className="w-full h-full object-cover"
            loading="eager"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={`content-${imageIndex}`}
          className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div variants={contentVariants}>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
                variants={contentVariants}
              >
                <motion.span 
                  className="block"
                  variants={contentVariants}
                >
                  Generator Wheels
                </motion.span>
                <motion.span 
                  className="block text-[#FBCA00]"
                  variants={contentVariants}
                >
                  Valve Guides & Sewing Machine Bushes
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
                variants={contentVariants}
              >
                Supplying across all districts of Punjab, we ensure durability, reliability, and superior performance in every product.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={contentVariants}
              >
                <motion.a
                  href="/products"
                  className="bg-[#FBCA00] text-[#071726] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#EECA1D] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Products
                </motion.a>
                <motion.a
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <motion.button
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === imageIndex ? 'w-8 bg-[#FBCA00]' : 'w-2 bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* Auto-play indicator */}
      <motion.div
        className="absolute top-4 right-4 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#FBCA00]' : 'bg-white/50'}`} />
        <span className="text-sm text-white/70">Auto-play {isAutoPlaying ? 'on' : 'off'}</span>
      </motion.div>
    </section>
  );
}