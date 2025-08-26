import { motion } from "framer-motion";
import { FiTruck, FiUsers, FiGlobe, FiBarChart2 } from "react-icons/fi";

const stats = [
  { value: "10M+", label: "Packages Delivered", icon: <FiTruck className="text-3xl" /> },
  { value: "500+", label: "Dedicated Couriers", icon: <FiUsers className="text-3xl" /> },
  { value: "95%", label: "On-Time Rate", icon: <FiBarChart2 className="text-3xl" /> },
  { value: "50+", label: "Cities Served", icon: <FiGlobe className="text-3xl" /> }
];

const Stats = () => {
  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }) };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">By The Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div key={index} custom={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once:true }}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="text-amber-500 mb-4 flex justify-center">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
