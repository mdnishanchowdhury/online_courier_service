import { motion } from "framer-motion";

const ContactHeader = () => (
  <motion.div 
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="text-center mb-12"
  >
    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact CourierX</h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      We're here to help with all your shipping and delivery questions
    </p>
  </motion.div>
);

export default ContactHeader;
