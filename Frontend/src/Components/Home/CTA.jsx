import { motion } from "framer-motion";

const CTA = () => (
  <section className="py-16 sm:py-24 bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-2xl overflow-hidden">
    <div className="container mx-auto px-6 text-center">
      
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Ready to Experience Better Delivery?
      </motion.h2>

      {/* Sub text */}
      <motion.p
        className="text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Join thousands of satisfied customers who trust us with their shipments.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all hover:scale-[1.05]">
          Get Started
        </button>
        <button className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all hover:scale-[1.05]">
          Contact Us
        </button>
      </motion.div>
    </div>
  </section>
);

export default CTA;
