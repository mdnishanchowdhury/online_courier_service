import { motion } from "framer-motion";

export const Newsletter = () => (
  <motion.div
    className="mt-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-8 text-center text-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    <h2 className="text-2xl font-bold mb-4">Stay Updated with Shipping Insights</h2>
    <p className="mb-6 max-w-2xl mx-auto">
      Subscribe to our newsletter for the latest delivery tips and industry trends.
    </p>
    <div className="max-w-md mx-auto flex border-2 border-amber-400 rounded-lg overflow-hidden shadow-sm">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 text-white px-4 py-3 focus:outline-none"
      />
      <button className="bg-white hover:bg-amber-200 px-6 py-3 font-medium transition-colors">
        Subscribe
      </button>
    </div>

  </motion.div>
);
