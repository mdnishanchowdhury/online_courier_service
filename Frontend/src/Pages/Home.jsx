import Hero from '../Components/Home/Hero';
import Features from '../Components/Home/Features';
import HowItWorks from '../Components/Home/HowItWorks';
import Testimonials from '../Components/Home/Testimonials';
import CTA from '../Components/Home/CTA';

const Home = () => (
  <div className="bg-white px-6 lg:px-12 pt-6 pb-6">
    <Hero></Hero>
    <Features></Features>
    <HowItWorks></HowItWorks>
    <Testimonials></Testimonials>
    <CTA></CTA>
  </div>
);

export default Home;
