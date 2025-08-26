import { HiOutlineMap, HiOutlineBookOpen, HiOutlineQuestionMarkCircle, HiOutlineShoppingBag, HiOutlinePhone } from "react-icons/hi2";
import { motion } from "framer-motion";

const QuickLink = ({ icon, label, description }) => (
    <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex items-start p-3 rounded-lg cursor-pointer"
    >
        <div className="mt-1 mr-3 text-xl">{icon}</div>
        <div>
            <h3 className="font-medium text-gray-800">{label}</h3>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
    </motion.div>
);

const QuickLinks = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white rounded-lg shadow p-6"
    >
        <h2 className="text-lg font-semibold mb-4">Quick links</h2>
        <div className="space-y-3">
            <QuickLink icon={<HiOutlineMap className="text-blue-500" />} label="Coverage area" description="See the largest countrywide coverage points" />
            <QuickLink icon={<HiOutlineBookOpen className="text-green-500" />} label="Tutorials" description="Learn about REDX panel and services" />
            <QuickLink icon={<HiOutlineQuestionMarkCircle className="text-purple-500" />} label="Frequently asked question" description="Find answers of your basic questions" />
            <QuickLink icon={<HiOutlineShoppingBag className="text-orange-500" />} label="Packaging service" description="Check our packaging service facilities" />
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center text-sm">
            <HiOutlinePhone className="text-gray-500 mr-2" />
            <span className="text-gray-600">Call our hotline to get 24/7 support</span>
            <span className="ml-2 font-medium">09410007339</span>
        </div>
    </motion.div>
);

export default QuickLinks;
