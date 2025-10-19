import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Specialties from "@/components/Specialties";
import Hospitals from "@/components/Hospitals";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Specialties />
      <Hospitals />
      <Testimonials />
      <Contact />
    </main>
  );
}
