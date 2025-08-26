import { motion } from "framer-motion";

const CTA = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-amber-400 to-amber-500 py-16 text-center rounded-2xl text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Better Delivery?</h2>
            <p className="text-xl mb-8">Join thousands of satisfied customers who trust us with their shipments</p>
            <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg shadow-xl transition-colors">
                Get Started Today
            </button>
        </div>
    </motion.div>
);

export default CTA;
