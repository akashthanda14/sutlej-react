import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "https://i.ibb.co/C3x8KqxG/claudio-schwarz-E6-O183w-B5zc-unsplash.jpg",
    
    alt: "Industrial manufacturing facility with modern machinery",
  },
  {
    url: "/src/images/gallery/products/generator-bg.png",
    alt: "Precision engineering workshop with advanced equipment",
  },
];


const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0
  })
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function HeroSection() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = Math.abs(page % images.length);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, page]);

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
            opacity: { duration: 0.2 }
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
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Premium Quality
              </motion.span>
              <motion.span 
                className="block text-[#FBCA00]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Valve Guides & Components
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Specialized in manufacturing high-precision valve guides, generator wheels, and sewing machine bushes.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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

      {/* Navigation Buttons */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          onClick={() => paginate(-1)}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={() => paginate(1)}
          className="p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div 
        className="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === imageIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </motion.div>
    </section>
  );
}