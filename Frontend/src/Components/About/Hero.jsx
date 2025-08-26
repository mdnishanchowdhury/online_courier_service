import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-r from-amber-400 to-amber-500 py-20 px-4 sm:px-6 lg:px-8 text-center text-white rounded-2xl">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Delivering More Than Just Packages</h1>
        <p className="text-xl md:text-2xl mb-8">
          We're building connections through reliable, innovative shipping solutions
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md transition-colors">
            Our Services
          </button>
          <button className="border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
            Join Our Team
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
