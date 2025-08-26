import { motion } from "framer-motion";

const SocialMedia = ({ icons, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } })
  };

  return (
    <motion.div
      custom={index}
      variants={variants}
      initial="hidden"
      animate="visible"
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
      <div className="flex space-x-4">{icons}</div>
    </motion.div>
  );
};

export default SocialMedia;
