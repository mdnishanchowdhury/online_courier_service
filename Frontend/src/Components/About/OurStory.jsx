import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const OurStory = () => (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                    Founded in 2015, CourierX began as a small local delivery service in San Francisco...
                </p>
                <p className="text-lg text-gray-600 mb-6">
                    Today, we've grown into a national leader in logistics technology...
                </p>
                <div className="flex items-center bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <FiAward className="text-amber-600 text-2xl mr-4" />
                    <span className="font-medium text-gray-800">
                        Voted "Most Reliable Courier" by Shipping Times 3 years running
                    </span>
                </div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="rounded-xl overflow-hidden shadow-xl">
                <img src="https://i.ibb.co.com/wNp05B4T/Choosing-the-right-business-courier-service-1280x720.jpg" alt="Courier team working" className="w-full h-full object-cover" />
            </motion.div>
        </div>
    </motion.div>
);

export default OurStory;
