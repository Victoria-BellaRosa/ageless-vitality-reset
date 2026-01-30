import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RockBottomSection from "@/components/RockBottomSection";
import ExpertiseBlock from "@/components/ExpertiseBlock";
import FreeOffer from "@/components/FreeOffer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <RockBottomSection />
        <ExpertiseBlock />
        <FreeOffer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
