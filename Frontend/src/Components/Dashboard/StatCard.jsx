import { motion } from "framer-motion";

const StatCard = ({ value, label, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-50 p-4 rounded-lg text-center"
  >
    <div className="flex justify-center text-2xl font-bold mb-1">{value}</div>
    <div className="flex items-center justify-center text-sm text-gray-600">
      {icon && <span className="mr-1">{icon}</span>}
      {label}
    </div>
  </motion.div>
);

export default StatCard;
