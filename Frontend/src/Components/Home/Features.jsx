import { FiTruck, FiPackage, FiClock, FiShield } from 'react-icons/fi';
import { motion } from "framer-motion";

const features = [
  { icon: <FiTruck className="text-3xl text-blue-500" />, title: "Fast Delivery", description: "Same-day and next-day delivery options available" },
  { icon: <FiPackage className="text-3xl text-green-500" />, title: "Secure Packaging", description: "Professional packaging to ensure item safety" },
  { icon: <FiClock className="text-3xl text-amber-500" />, title: "Real-Time Tracking", description: "Monitor your package every step of the way" },
  { icon: <FiShield className="text-3xl text-purple-500" />, title: "Insurance Options", description: "Protect your valuable shipments" },
];

const Features = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Service
        </h2>
        <p className="text-lg text-gray-600">
          We combine speed, security, and outstanding service to provide a delivery experience you can trust.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-500 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
