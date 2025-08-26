import { motion } from "framer-motion";

const ContactCTA = () => (
  <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="mt-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-8 text-center text-black">
    <h2 className="text-2xl font-bold mb-4">Need Immediate Help?</h2>
    <p className="mb-6 max-w-2xl mx-auto">Check out our FAQ section for quick answers to common questions about our services.</p>
    <button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
      Visit Help Center
    </button>
  </motion.div>
);

export default ContactCTA;
