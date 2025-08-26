import { HiOutlineTruck, HiOutlineArrowPath, HiOutlineCheckCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import StatCard from "./StatCard";

const DeliveryInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-lg shadow p-6"
  >
    <h2 className="text-lg font-semibold mb-4 flex items-center">
      <HiOutlineTruck className="mr-2 text-blue-600" />
      Delivery Information
    </h2>
    <div className="grid grid-cols-3 gap-4">
      <StatCard value="0" label="In Progress" icon={<HiOutlineTruck className="text-orange-500" />} />
      <StatCard value="0" label="Return in Progress" icon={<HiOutlineArrowPath className="text-yellow-500" />} />
      <StatCard value="0" label="Returned" icon={<HiOutlineCheckCircle className="text-green-500" />} />
    </div>
  </motion.div>
);

export default DeliveryInfo;
