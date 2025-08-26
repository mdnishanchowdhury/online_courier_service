import { HiOutlineCurrencyDollar, HiOutlineArrowPath, HiOutlineCheckCircle } from "react-icons/hi2";
import { motion } from "framer-motion";
import StatCard from "./StatCard";

const PaymentInfo = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white rounded-lg shadow p-6"
  >
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold flex items-center">
        <HiOutlineCurrencyDollar className="mr-2 text-blue-600" />
        Payment Information
      </h2>
      <span className="text-sm text-gray-500">Showing payment information considering invoice</span>
    </div>
    <div className="grid grid-cols-3 gap-4">
      <StatCard value="৳0.00" label="Disbursement due" icon={<HiOutlineCurrencyDollar className="text-red-500" />} />
      <StatCard value="0" label="In progress" icon={<HiOutlineCurrencyDollar className="text-blue-500" />} />
      <StatCard value="0" label="Return in Progress" icon={<HiOutlineArrowPath className="text-purple-500" />} />
      <StatCard value="৳0.00" label="Payment disbursed already" icon={<HiOutlineCheckCircle className="text-green-500" />} />
      <StatCard value="৳0.00" label="Payment in process" icon={<HiOutlineCurrencyDollar className="text-yellow-500" />} />
    </div>
    <button className="mt-4 text-blue-600 font-medium flex items-center">
      Details <span className="ml-1">›</span>
    </button>
  </motion.div>
);

export default PaymentInfo;
