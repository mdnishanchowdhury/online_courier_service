import { motion } from "framer-motion";

export const BlogHeader = () => (
  <motion.div
    className="text-center mb-12"
    initial={{ opacity: 0, y: -30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <h1 className="text-4xl font-bold text-gray-900 mb-4">CourierX Blog</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Insights, tips and industry news for smarter shipping decisions
    </p>
  </motion.div>
);
