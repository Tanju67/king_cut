import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import PriceList from "./PriceList";
import Section from "./Section";
import Services from "./Services";

export default function LayoutContent({ setActiveSection }) {
  return (
    <div className="flex w-full flex-col md:max-w-[75%]">
      <Section id="home" onVisible={setActiveSection}>
        <Home />
      </Section>

      <Section id="about" onVisible={setActiveSection}>
        <About />
      </Section>

      <Section id="services" onVisible={setActiveSection}>
        <Services />
      </Section>

      <Section id="price" onVisible={setActiveSection}>
        <PriceList />
      </Section>

      <Section id="contact" onVisible={setActiveSection}>
        <Contact />
      </Section>
    </div>
  );
}
