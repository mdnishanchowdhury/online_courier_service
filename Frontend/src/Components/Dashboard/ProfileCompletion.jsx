import { motion } from "framer-motion";

const ProfileCompletion = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="bg-white rounded-lg shadow p-6"
  >
    <h2 className="text-lg font-semibold mb-3">Complete your profile</h2>
    <p className="text-sm text-gray-600 mb-4">Add your bank or bKash details to receive payments from RedX</p>
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">Setup Payment</button>
  </motion.div>
);

export default ProfileCompletion;
