import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import LiveFeature from "@/components/LiveFeature";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Advantages />
      <LiveFeature />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
