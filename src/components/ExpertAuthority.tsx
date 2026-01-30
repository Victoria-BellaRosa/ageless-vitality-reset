const ExpertAuthority = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h3 className="font-heading text-2xl md:text-3xl text-heading text-center mb-4">
          Two Decades of Expertise, One Powerful Protocol
        </h3>
        
        <p className="text-center text-foreground mb-12 max-w-xl mx-auto">
          My unique background gave me the tools to solve a problem that stumped 
          conventional medicine.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* The Culinary Expert */}
          <div className="bg-card p-8 md:p-10">
            <div className="text-5xl mb-6">👨‍🍳</div>
            <h4 className="font-heading text-xl md:text-2xl text-heading mb-4">
              The Culinary Expert
            </h4>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>12 years as an Elite Yacht Chef</strong> serving the world's most 
              discerning palates. From Monaco to the Caribbean, I've cooked for billionaires, 
              celebrities, and royalty who expect nothing but perfection.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Mastery of flavor, texture, and nutrition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Deep understanding of food science</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Ability to create healthy food that tastes extraordinary</span>
              </li>
            </ul>
          </div>
          
          {/* The Mindset Expert */}
          <div className="bg-card p-8 md:p-10">
            <div className="text-5xl mb-6">🧠</div>
            <h4 className="font-heading text-xl md:text-2xl text-heading mb-4">
              The Mindset Expert
            </h4>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>11 years as a trained Psychologist</strong> specializing in behavioral 
              change and the mental barriers that prevent people from achieving their 
              health goals.
            </p>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Understanding of habit formation and breaking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Expertise in motivation and sustainable change</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">→</span>
                <span>Tools to overcome emotional eating and self-sabotage</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-foreground max-w-xl mx-auto">
            This rare combination of skills allowed me to create something that neither 
            a nutritionist nor a psychologist alone could develop—a truly holistic 
            approach to reclaiming your health and vitality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertAuthority;
