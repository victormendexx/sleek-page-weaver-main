import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import LiveFeature from "@/components/LiveFeature";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Mobile from "@/components/Mobile";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-[#E6E6E6]">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Advantages />
      <LiveFeature />
      <FAQ />
      <CallToAction />
      <Mobile />
      <Footer />
    </div>
  );
};

export default Index;
