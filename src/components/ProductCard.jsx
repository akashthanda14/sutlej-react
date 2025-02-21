import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';

function ProductCard() {
  const [expandedId, setExpandedId] = React.useState(null);

  const products = [
    {
      id: 1,
      image: "/src/images/gallery/products/08.png",
      title: "Wheel Bush",
      description: "The Sewing Machine Wheel Bush reduces friction, ensure smooth hand wheel rotation.",
      fullDescription: "The Sewing Machine Wheel Bush reduces friction, ensure smooth hand wheel rotation Made from durable materials. Our wheel bushes are precision-engineered to provide optimal performance and longevity."
    },
    {
      id: 2,
      image: "/src/images/gallery/products/09.png",
      title: "Sham Bush",
      description: "The Sham Bush reduces friction and ensures smooth hand wheel rotation.",
      fullDescription: "The Sham Bush reduces friction and ensures smooth hand wheel rotation, made from durable materials for long-lasting performance. Each bush is carefully manufactured to meet strict quality standards."
    },
    {
      id: 3,
      image: "/src/images/gallery/products/010.png",
      title: "Kneck Bush",
      description: "A sewing machine neck bush supports the needle bar, allowing smooth vertical movement during sewing.",
      fullDescription: "A sewing machine neck bush supports the needle bar, allowing smooth vertical movement during sewing. It connects the needle mechanism to the machine's body. Our neck bushes are designed for precision and durability."
    },
    {
      id: 4,
      image: "/src/images/gallery/products/wheek.png",
      title: "Valve Guide",
      description: "The Valve Guide ensures proper valve alignment and smooth movement.",
      fullDescription: "The Valve Guide ensures proper valve alignment and smooth movement, reducing wear and maintaining engine performance. Made from durable materials for long-lasting use. Our valve guides are engineered to precise specifications."
    },
    {
      id: 5,
      image: "/src/images/gallery/products/valve.png",
      title: "Valve Guide Pro",
      description: "Advanced Valve Guide for professional applications and heavy-duty use.",
      fullDescription: "Advanced Valve Guide designed for professional applications and heavy-duty use. Features enhanced durability and precision engineering for optimal performance in demanding environments."
    },
    {
      id: 6,
      image: "/src/images/gallery/products/wheek.png",
      title: "Generator Wheel",
      description: "The Generator Wheel is designed for both air and water-cooled generators.",
      fullDescription: "The Generator Wheel is designed for both air and water-cooled generators, ensuring smooth operation and reliable performance. Built with premium materials for extended service life and optimal efficiency."
    }
  ];

  return (
    <section className="relative min-h-screen bg-[#0a1a27] overflow-hidden py-16">
      <div className="absolute inset-0 bg-[#0a1a27]"></div>
      <div className="relative z-10 container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: product.id * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
            >
              <motion.div 
                className="relative aspect-square overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold text-white mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {product.title}
                </motion.h3>
                
                <AnimatePresence mode="wait">
                  <motion.p
                    key={expandedId === product.id ? 'full' : 'summary'}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-yellow-400 mb-4"
                  >
                    {expandedId === product.id ? product.fullDescription : product.description}
                  </motion.p>
                </AnimatePresence>

                <motion.button
                  onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {expandedId === product.id ? 'Read Less' : 'Read More'}
                  <motion.div
                    initial={false}
                    animate={{ rotate: expandedId === product.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedId === product.id ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;