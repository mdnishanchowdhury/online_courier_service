import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-400 to-amber-500 text-black rounded-2xl overflow-hidden">
      <div className="container mx-auto px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-12">

        {/* Left section */}
        <motion.div
          className="lg:w-1/2 space-y-8"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Fast & Reliable{" "}
            <motion.span
              className="text-blue-300 inline-block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
            >
              Courier
            </motion.span>{" "}
            Service
          </h1>
          <p className="text-xl text-black">
            Experience fast, safe, and reliable courier services with real-time tracking and secure delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-medium shadow-lg transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>

        {/* Right section */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="https://i.ibb.co.com/pjxQwsLc/offline-courier-service.png"
            alt="Courier service"
            className="rounded-xl shadow-2xl w-full"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
