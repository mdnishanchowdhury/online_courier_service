import { motion } from "framer-motion";

const steps = [
  { step: 1, title: "Book Your Delivery", description: "Quick and easy online booking" },
  { step: 2, title: "We Collect Your Package", description: "Convenient pickup options" },
  { step: 3, title: "Safe Transportation", description: "Professional handling and tracking" },
  { step: 4, title: "Fast Delivery", description: "On-time delivery with confirmation" }
];

const HowItWorks = () => (
  <section className="py-16 sm:py-24">
    <div className="container mx-auto px-6">
      <div className="lg:flex items-center gap-12">

        <motion.div
          className="lg:w-1/2 mb-12 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Our Simple <span className="text-blue-600">Delivery Process</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our seamless delivery process ensures efficiency and reliability from start to finish.
          </p>

          <div className="space-y-8">
            {steps.map((item, i) => (
              <motion.div
                key={item.step}
                className="flex gap-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="https://i.ibb.co.com/9Hvj0g5q/top-10-on-demand-courier-delivery-apps.png"
            alt="Delivery process"
            className="rounded-xl shadow-xl w-full"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

      </div>
    </div>
  </section>
);

export default HowItWorks;
