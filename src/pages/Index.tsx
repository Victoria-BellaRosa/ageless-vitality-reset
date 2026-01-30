import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MyStory from "@/components/MyStory";
import WhyItWorks from "@/components/WhyItWorks";
import ExpertAuthority from "@/components/ExpertAuthority";
import WhatYouWillDiscover from "@/components/WhatYouWillDiscover";
import FreeOffer from "@/components/FreeOffer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MyStory />
        <WhyItWorks />
        <ExpertAuthority />
        <WhatYouWillDiscover />
        <FreeOffer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
