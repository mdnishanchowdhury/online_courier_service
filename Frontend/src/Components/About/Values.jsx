import { motion } from "framer-motion";

const Values = () => {
    const values = [
        { title: "Reliability", desc: "We deliver on our promises, every time. Our 95% on-time rate speaks for itself." },
        { title: "Innovation", desc: "Continuously improving our technology to make shipping simpler and smarter." },
        { title: "Community", desc: "Supporting local businesses and giving back to the neighborhoods we serve." }
    ];

    const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2 } }) };

    return (
        <div className="bg-amber-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((v, index) => (
                        <motion.div key={index} custom={index} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{v.title}</h3>
                            <p className="text-gray-600">{v.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;
