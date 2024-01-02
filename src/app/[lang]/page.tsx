import Navbar from "./_components/Navbar";
import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/Services";
import TestimonialsSection from "./_components/Testimonials";
import ContactSection from "./_components/Contact";
import FaqSection from "./_components/Faq";
import Footer from "./_components/Footer";

const getLandingPageData = async (lang: string) => {
  const token = process.env.SB_DATA_TOKEN;
  const version = process.env.SB_VERSION;
  const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?version=${version}&token=${token}&cv=1701903822&language=${lang}`
  // const req = await fetch(url, {cache: "no-store"});
  const req = await fetch(url, {next: {revalidate: 10}}); //refetches data from storyblok every 10secs
  const res = await req.json();
  const {nav_section, hero_section, contact_section, service_section, testimonials_section, faq_section, footer} = res.story.content; 

  return {
    nav_section: nav_section[0],
    hero_section: hero_section[0],
    service_section: service_section[0],
    testimonials_section: testimonials_section[0],
    contact_section: contact_section[0],
    faq_section: faq_section[0],
    footer: footer[0]
  }

}

export default async function Home({params: {lang}}: {params: {lang: string}}) {
  const storyData = await getLandingPageData(lang);
  const { nav_section, hero_section, service_section, testimonials_section, contact_section, faq_section, footer} = storyData; // Destructure nav_section from storyData
  return (
    <>
      <Navbar data={nav_section} />
      <HeroSection data={hero_section}/>
      <ServicesSection  data={service_section}/>
      <TestimonialsSection data={testimonials_section}/>
      <ContactSection data={contact_section}/>
      <FaqSection data={faq_section}/>
      <Footer data={footer}/>
    </>
  );
}
