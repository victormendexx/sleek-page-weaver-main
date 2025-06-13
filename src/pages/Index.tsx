import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Advantages from "@/components/Advantages";
import LiveFeature from "@/components/LiveFeature";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Mobile from "@/components/Mobile";
import SignupButton from "@/components/ui/signup-button";
import { LivePhotos } from "@/components/LivePhotos";

const Index = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col bg-[#E6E6E6]">
      <Navbar />

      {/* Navbar and Hero for mobile */}
      <div className="w-full relative aspect-[375/379] overflow-hidden md:hidden">
        <img
          src="../../hero-mobile.svg"
          className="absolute top-0 left-0 w-full h-full object-fill z-0"
          alt="Hero"
        />
        <div className="relative z-10 flex flex-col h-full">
          <Hero />
          <div className="mt-auto">
            <SignupButton
              extraClasses="bg-[#363BB4] flex items-center justify-center text-[3.5vw] h-[10vw] w-[47vw] mx-auto text-white border-none"
              buttonExtraClasses="h-[7.5vw] w-[7.5vw]"
              iconExtraClasses="text-[#363BB4]"
              arrowSize="5vw"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <Hero />
      </div>

      <Features />
      <About />
      <Advantages />
      <LiveFeature />
      <LivePhotos />
      <FAQ />
      <Mobile />
      <Footer />
    </div>
  );
};

export default Index;
