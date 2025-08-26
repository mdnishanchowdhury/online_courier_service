import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO", bio: "Logistics expert...", image: "https://i.ibb.co.com/S7rNYs6N/360-F-321511245-l-Vwfaa-Zd-Hx-P8-YGFZaq-Q5-Py-Xei-Px5zwtb.jpg" },
    { name: "Michael Chen", role: "CTO", bio: "Tech innovator...", image: "https://i.ibb.co.com/S7rNYs6N/360-F-321511245-l-Vwfaa-Zd-Hx-P8-YGFZaq-Q5-Py-Xei-Px5zwtb.jpg" },
    { name: "Emma Rodriguez", role: "Operations Director", bio: "Supply chain professional", image: "https://i.ibb.co.com/S7rNYs6N/360-F-321511245-l-Vwfaa-Zd-Hx-P8-YGFZaq-Q5-Py-Xei-Px5zwtb.jpg" },
    { name: "David Kim", role: "Customer Experience", bio: "Client relations specialist", image: "https://i.ibb.co.com/S7rNYs6N/360-F-321511245-l-Vwfaa-Zd-Hx-P8-YGFZaq-Q5-Py-Xei-Px5zwtb.jpg" }
];

const Team = () => {
    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }) };

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Meet The Team</h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">The passionate people behind our delivery excellence</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <motion.div key={index} custom={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                        <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                            <p className="text-amber-600 font-medium mb-3">{member.role}</p>
                            <p className="text-gray-600 mb-4">{member.bio}</p>
                            <div className="flex space-x-3">
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><FaLinkedin /></a>
                                <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors"><FaTwitter /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-800 transition-colors"><FaFacebook /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Team;
