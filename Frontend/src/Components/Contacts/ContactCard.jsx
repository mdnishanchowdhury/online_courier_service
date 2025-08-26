import { motion } from "framer-motion";

const ContactCard = ({ icon, title, desc, link, text, bg, index }) => {
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
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start">
        <div className={`${bg} p-3 rounded-lg mr-4`}>{icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 mb-2">{desc}</p>
          {link ? (
            <a href={link} className="text-amber-600 hover:text-amber-700 font-medium">{text}</a>
          ) : (
            <address className="not-italic text-gray-800">{text}</address>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
