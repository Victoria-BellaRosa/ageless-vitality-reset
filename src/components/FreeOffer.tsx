import guideMockup from "@/assets/guide-mockup.png";

const FreeOffer = () => {
  return (
    <section id="free-offer" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* PDF Mockup */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img 
              src={guideMockup} 
              alt="The Breath & Balance Reset Guide" 
              className="w-full max-w-[280px] md:max-w-[320px] drop-shadow-xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              Your Free Download
            </span>
            
            <h3 className="font-heading text-2xl md:text-3xl text-heading mb-6">
              The Breath & Balance Reset
            </h3>
            
            <ul className="space-y-4 mb-8 text-left">
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5">✓</span>
                <span className="text-foreground">How to stop sinus-related headaches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5">✓</span>
                <span className="text-foreground">The Morning Ritual for vestibular health</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-lg mt-0.5">✓</span>
                <span className="text-foreground">3 "Hidden" ingredients ruining your focus</span>
              </li>
            </ul>
            
            <button className="btn-primary w-full md:w-auto">
              Get My Free Reset Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeOffer;
