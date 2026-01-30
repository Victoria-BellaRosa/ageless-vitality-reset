import { User } from "lucide-react";

const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('free-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] leading-tight text-heading mb-6 animate-fade-in">
              I Thought My 'Brain Fog' and Constant Exhaustion Were Just 'Aging'.{" "}
              <span className="italic">I Was Wrong.</span>
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              From an Elite Solo Yacht Chef to a vibrant life at 55. Discover the Gentle Keto Protocol 
              that cleared my sinus blockages, stopped blinding headaches, and helped me lose 8kg 
              without hormonal meds.
            </p>
            
            <button 
              onClick={scrollToOffer}
              className="btn-primary animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Get My Free Reset Guide
            </button>
          </div>
          
          {/* Author Photo Placeholder */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="image-placeholder w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
              <div className="flex flex-col items-center justify-center h-full text-center p-4">
                <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground/60 mb-2" />
                <span className="text-xs text-muted-foreground">Author Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
