import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import FeaturedProjects from "./_components/featured-projects";
import TechSkills from "./_components/tech-skills";
import Certificates from "./_components/certificates";
import AboutMe from "./_components/about-me";
import ContactSection from "./_components/contact-section";
import Footer from "./_components/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] selection:bg-yellow-500 selection:text-black">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <TechSkills />
      <Certificates />
      <AboutMe />
      <ContactSection />
      <Footer />
    </main>
  );
}
