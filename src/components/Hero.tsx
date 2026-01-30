const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('free-offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-padding">
      <div className="container-narrow text-center">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-[42px] leading-tight text-heading mb-6 animate-fade-in">
          I Thought My 'Brain Fog' and Constant Exhaustion Were Just 'Aging'.{" "}
          <span className="italic">I Was Wrong.</span>
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          From an Elite Yacht Chef to a vibrant life at 55. Discover the Gentle Keto Protocol 
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
    </section>
  );
};

export default Hero;
