import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', subject:'', message:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name:'', email:'', phone:'', subject:'', message:'' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const formVariant = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const successVariant = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } };

  return (
    <motion.div variants={formVariant} initial="hidden" animate="visible" className="bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

      {isSubmitted ? (
        <motion.div variants={successVariant} initial="hidden" animate="visible" className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <FiCheckCircle className="text-green-500 text-4xl mx-auto mb-4"/>
          <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
          <p className="text-green-600">Thank you for contacting us. We'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {["name","email","phone"].map((field,i)=>(
            <motion.div key={i} initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:i*0.1 }}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                {field==="name"?"Full Name":field==="email"?"Email Address":"Phone Number"}
              </label>
              <input type={field==="email"?"email":field==="phone"?"tel":"text"} name={field} value={formData[field]} onChange={handleChange} required={field!=="phone"} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder={field==="name"?"John Doe":field==="email"?"john@example.com":"+880 1912 345678"} />
            </motion.div>
          ))}
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
              <option value="">Select a subject</option>
              <option value="delivery">Delivery Inquiry</option>
              <option value="tracking">Tracking Issue</option>
              <option value="business">Business Services</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
          </motion.div>
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 }}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all" placeholder="How can we help you?"></textarea>
          </motion.div>
          <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}>
            <button type="submit" disabled={isSubmitting} className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors ${isSubmitting ? 'bg-amber-400':'bg-amber-600 hover:bg-amber-700'}`}>
              {isSubmitting ? 'Sending...' : <><FiSend className="mr-2"/> Send Message</>}
            </button>
          </motion.div>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
