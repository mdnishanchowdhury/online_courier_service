import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ContactCTA from '../Components/Contacts/ContactCTA';
import ContactForm from '../Components/Contacts/ContactForm';
import ContactCard from '../Components/Contacts/ContactCard';
import ContactHeader from '../Components/Contacts/ContactHeader';
import SocialMedia from '../Components/Contacts/SocialMedia';

const Contact = () => {
  const contactInfo = [
    { icon: <FiMail />, title: "Email Us", desc: "Our team will get back to you within 24 hours", link: "mailto:support@courierx.com", text: "support@courierx.com", bg: "bg-amber-100" },
    { icon: <FiPhone />, title: "Call Us", desc: "Sunday-Thursday from 9am to 6pm", link: "tel:+8801912345678", text: "+880 1912 345678", bg: "bg-blue-100" },
    { icon: <FiMapPin />, title: "Visit Us", desc: "Our headquarters in Dhaka", link: null, text: "123 Shipping Street, Gulshan-1, Dhaka 1212, Bangladesh", bg: "bg-green-100" }
  ];

  const socialIcons = [
    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-600 transition-colors"><FaFacebook /></a>,
    <a href="#" className="bg-gray-100 hover:bg-sky-100 p-3 rounded-full text-sky-500 transition-colors"><FaTwitter /></a>,
    <a href="#" className="bg-gray-100 hover:bg-pink-100 p-3 rounded-full text-pink-600 transition-colors"><FaInstagram /></a>,
    <a href="#" className="bg-gray-100 hover:bg-blue-100 p-3 rounded-full text-blue-700 transition-colors"><FaLinkedin /></a>
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ContactHeader></ContactHeader>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {
              contactInfo.map((item, i) => <ContactCard key={i} {...item} index={i}></ContactCard>)
            }
            <SocialMedia icons={socialIcons} index={3}></SocialMedia>
          </div>
          <ContactForm></ContactForm>
        </div>
        <ContactCTA></ContactCTA>
      </div>
    </div>
  );
};

export default Contact;
