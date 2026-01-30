const ExpertiseBlock = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* The Yacht Chef */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="text-4xl">👨‍🍳</span>
            </div>
            <h4 className="font-heading text-xl md:text-2xl text-heading mb-3">
              The Yacht Chef
            </h4>
            <p className="text-foreground leading-relaxed">
              12 years of high-performance culinary experience for the world's 1%.
            </p>
          </div>
          
          {/* The Psychologist */}
          <div className="text-center md:text-left">
            <div className="inline-block mb-4">
              <span className="text-4xl">🧠</span>
            </div>
            <h4 className="font-heading text-xl md:text-2xl text-heading mb-3">
              The Psychologist
            </h4>
            <p className="text-foreground leading-relaxed">
              11 years of understanding the mental barriers to health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseBlock;
