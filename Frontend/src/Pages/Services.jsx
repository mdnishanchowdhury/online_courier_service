import { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../Components/Services/ServiceCard";
import ServiceDetail from "../Components/Services/ServiceDetail";

const servicesData = [
  {
    id: 1,
    title: "Express Delivery",
    description: "Same-day delivery for urgent packages within the city",
    price: "$12.99",
    deliveryTime: "2-4 hours",
    rating: 4.8,
    category: "express",
    features: ["Real-time tracking", "Instant booking", "Dedicated courier"],
  },
  {
    id: 2,
    title: "Standard Delivery",
    description: "Reliable next-day delivery for all your packages",
    price: "$8.99",
    deliveryTime: "24 hours",
    rating: 4.5,
    category: "standard",
    features: ["Package insurance", "Email notifications", "Multiple drop-offs"],
  },
  {
    id: 3,
    title: "International Shipping",
    description: "Global delivery with customs handling included",
    price: "$29.99",
    deliveryTime: "3-5 days",
    rating: 4.7,
    category: "international",
    features: ["Customs clearance", "Tracking updates", "Duty calculator"],
  },
  {
    id: 4,
    title: "Large Item Delivery",
    description: "Special handling for bulky and heavy items",
    price: "$45.99",
    deliveryTime: "1-2 days",
    rating: 4.6,
    category: "special",
    features: ["White glove service", "Assembly available", "Two-person team"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Delivery Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable, and secure delivery solutions tailored to your needs
          </p>
        </div>

        {!selectedService ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService}
                index={index}
              ></ServiceCard>
            ))}
          </div>
        ) : (
          <ServiceDetail service={selectedService} onBack={() => setSelectedService(null)} ></ServiceDetail>
        )}

        {!selectedService && (
          <motion.div
            className="mt-16 bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-8 text-center text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              We offer tailored delivery services for businesses and special requirements.
            </p>
            <motion.button
              className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              Request a Quote
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Services;
