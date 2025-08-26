import { FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  { name: "Sarah Johnson", role: "Small Business Owner", content: "The delivery service is incredibly reliable. My packages always arrive on time and in perfect condition.", rating: 5 },
  { name: "Michael Chen", role: "E-commerce Manager", content: "Their tracking system is the best I've used. Customers love the real-time updates.", rating: 4 },
  { name: "Emily Rodriguez", role: "Frequent Shipper", content: "Customer service is outstanding. They resolved an issue for me within minutes!", rating: 5 }
];

const Testimonials = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Thousands</h2>
        <p className="text-lg text-gray-600">Don't just take our word for it - hear what our customers say about our service.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex mb-4">
                {
                  [...Array(5)].map((_, i) => (
                    i < t.rating ? <FaStar key={i} className="text-yellow-400" /> : <FaRegStar key={i} className="text-gray-300" />
                  ))
                }
              </div>
              <blockquote className="text-lg text-gray-600 mb-6">"{t.content}"</blockquote>
              <div className="flex items-center">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  </section>
);

export default Testimonials;
