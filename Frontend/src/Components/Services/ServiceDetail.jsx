import { motion } from "framer-motion";
import { FiTruck, FiClock, FiDollarSign, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const ServiceDetail = ({ service, onBack }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-8">
        <motion.button
          onClick={onBack}
          className="flex items-center text-amber-600 mb-6 hover:text-amber-700 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          <FaArrowRight className="rotate-180 mr-2" />
          Back to services
        </motion.button>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <motion.div
              className="bg-amber-100 p-6 rounded-xl mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FiTruck className="text-amber-600 text-4xl mx-auto" />
            </motion.div>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiClock className="text-gray-500 mr-3" />
                <span className="text-gray-700">{service.deliveryTime} delivery</span>
              </div>
              <div className="flex items-center">
                <FiDollarSign className="text-gray-500 mr-3" />
                <span className="text-gray-700">{service.price}</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="text-gray-500 mr-3" />
                <span className="text-gray-700">
                  {service.category === "international" ? "Worldwide coverage" : "City-wide coverage"}
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>

            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Service Features</h3>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Book Now
              </motion.button>
              <motion.button
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contact Support
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
