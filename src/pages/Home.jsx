import HeroSection from "../components/Hero";
import ProductCard from "../components/ProductCard";
import WhyChooseUs from "../components/WhyChooseUs";
import OurProcess from "../components/OurProcess";
import ContactForm from "../components/ContactForm";
import CounterSection from "../components/CounterSection";
import PackagingSection from "../components/PackagingSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductCard />
      <WhyChooseUs />
      <div className="min-h-screen bg-[#0a1825] text-white">
        <OurProcess />
      </div>
      <ContactForm />
      <CounterSection />
      <PackagingSection />
    </>
  );
};

export default Home;
