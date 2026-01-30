import { Check } from "lucide-react";

const WhatYouWillDiscover = () => {
  const discoveries = [
    {
      title: "How I Lost 8kg and Saved My Joints",
      description: "The exact protocol that helped me shed stubborn weight without extreme restriction, while reducing the inflammation that was destroying my joint health."
    },
    {
      title: "The Secret to Breathing Freely Without Hormonal Sprays",
      description: "Discover the natural approach that cleared my chronic sinus blockages—ending my dependence on prescription nasal sprays that were making things worse."
    },
    {
      title: "Why Vestibular Health is the Key to Feeling 20 Years Younger",
      description: "Learn how improving your balance and inner ear function can transform your energy, mental clarity, and overall sense of vitality."
    },
    {
      title: "The 3 'Hidden' Ingredients Ruining Your Focus",
      description: "Uncover the common foods that are secretly triggering inflammation and brain fog—even foods you think are healthy."
    },
    {
      title: "The Morning Ritual That Changed Everything",
      description: "A simple 10-minute practice that primes your body for the day, supports sinus drainage, and enhances mental clarity."
    },
    {
      title: "How to Break the Inflammation Cycle for Good",
      description: "Understand the science behind chronic inflammation and the step-by-step approach to finally calming your overactive immune system."
    }
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <h3 className="font-heading text-2xl md:text-3xl text-heading text-center mb-4">
          What You'll Discover Inside the Free Guide
        </h3>
        
        <p className="text-center text-foreground mb-12 max-w-xl mx-auto">
          "The Breath & Balance Reset" is your introduction to the Gentle Keto Protocol—
          packed with actionable insights you can start using today.
        </p>
        
        <div className="space-y-6">
          {discoveries.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 bg-background p-6 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary flex items-center justify-center">
                <Check className="w-5 h-5 text-primary-foreground" strokeWidth={3} />
              </div>
              <div>
                <h4 className="font-heading text-lg text-heading mb-2">
                  {item.title}
                </h4>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-10 py-5">
            Get My Free Reset Guide
          </button>
          <p className="mt-4 text-sm text-muted-foreground">
            Instant download • No spam • Your privacy is protected
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillDiscover;
