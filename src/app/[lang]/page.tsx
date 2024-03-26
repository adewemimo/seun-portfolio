const fs = require('fs');
import path from 'path';
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/Services";
import TestimonialsSection from "./_components/Testimonials";
import ContactSection from "./_components/Contact";
import FaqSection from "./_components/Faq";
import Footer from "./_components/Footer";


const getLandingPageData = async (lang: string) => {
 // Path to the temporary file
 const filePath = path.join(process.cwd(), 'storyblok-data.json');

 // Read data from the temporary file
 const fileContents = fs.readFileSync(filePath, 'utf8');
 const data = JSON.parse(fileContents);

 // Assuming the structure of the data in the file matches the expected structure
 const {nav_section, hero_section, contact_section, service_section, testimonials_section, faq_section, footer} = data.story.content;

 return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    service_section: service_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer: footer[0]
 };
};

export default async function Home({params: {lang}}: {params: {lang: string}}) {
 const storyData = await getLandingPageData(lang);
 const { nav_section, hero_section, service_section, testimonials_section, contact_section, faq_section, footer} = storyData;
 return (
    <>
      <Navbar data={nav_section} />
      <HeroSection data={hero_section}/>
      <ServicesSection data={service_section}/>
      <TestimonialsSection data={testimonials_section}/>
      <ContactSection data={contact_section}/>
      <FaqSection data={faq_section}/>
      <Footer data={footer}/>
    </>
 );
}
