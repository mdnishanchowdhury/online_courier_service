import { motion } from "framer-motion";
import { FiTruck, FiClock } from "react-icons/fi";
import { FaStar, FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service, onSelect, index }) => {
  return (
    <motion.div
      onClick={() => onSelect(service)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
    >
      <motion.div
        className="h-48 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://i.ibb.co.com/MJZmvSF/goods-courier-service-500x500-1-large.jpg"
          alt="Courier Service"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-amber-100 p-3 rounded-lg">
            <FiTruck className="text-amber-600 text-xl" />
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <FaStar className="text-amber-400 mr-1" />
            <span className="text-sm font-medium">{service.rating}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center text-gray-700">
            <FiClock className="mr-2" />
            <span>{service.deliveryTime}</span>
          </div>
          <div className="text-lg font-bold text-amber-600">{service.price}</div>
        </div>

        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
          <motion.span className="text-sm text-gray-500" whileHover={{ x: 5 }}>
            View details
          </motion.span>
          <motion.div className="text-amber-500" whileHover={{ x: 5 }}>
            <FaArrowRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
