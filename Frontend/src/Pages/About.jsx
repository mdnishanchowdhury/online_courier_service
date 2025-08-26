import Hero from "../Components/About/Hero";
import OurStory from "../Components/About/OurStory";
import Stats from "../Components/About/Stats";
import Team from "../Components/About/Team";
import Values from "../Components/About/Values";
import CTA from "../Components/Home/CTA";

const About = () => (
  <div className="min-h-screen bg-gray-50 pb-6 pt-6 px-6 lg:px-12">
    <Hero></Hero>
    <OurStory></OurStory>
    <Stats></Stats>
    <Team></Team>
    <Values></Values>
    <CTA></CTA>
  </div>
);

export default About;
