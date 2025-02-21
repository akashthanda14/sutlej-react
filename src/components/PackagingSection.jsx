import { motion } from 'framer-motion';

const PackageItem = ({ image, title }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full md:w-1/3 p-4"
    >
      <div className="bg-white/10 rounded-lg overflow-hidden" style={{ borderBottom: '4px solid rgb(251, 202, 1)' }}>
        <div className="aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            src={image}
            alt={title}
          />
        </div>
        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold" style={{ color: 'rgb(251, 202, 1)' }}>{title}</h2>
        </div>
      </div>
    </motion.div>
  );
};

const PackagingSection = () => {
  const packages = [
    {
      image: "/src/images/gallery/pack2.png",
      title: "Premium Packaging"
    },
    {
      image: "/src/images/gallery/pack3.png",
      title: "Premium Packaging"
    },
    {
      image: "/src/images/gallery/pack4.png",
      title: "Premium Packaging"
    }
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'rgb(16, 38, 58)' }}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-2">Packaging</h1>
          <h2 className="text-3xl font-bold mb-6">
            Premium <span style={{ color: 'rgb(251, 202, 1)' }}>Packaging</span>
          </h2>
          <p className="text-gray-300">
            Sutlej Industrial Corporation carefully selects high-quality materials, 
            then casts or forges valve guides and generator wheels. Precision machining, 
            heat treatment, and strict quality control ensure durability and performance. 
            The final products are inspected, cleaned, and packaged for delivery.
          </p>
        </motion.div>

        <div className="flex flex-wrap -mx-4">
          {packages.map((item, index) => (
            <PackageItem
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagingSection;