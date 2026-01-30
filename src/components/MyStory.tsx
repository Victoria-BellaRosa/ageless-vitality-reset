import { Image } from "lucide-react";

const MyStory = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <h2 className="font-heading text-2xl md:text-3xl text-heading text-center mb-10">
          My Story: The Day I Almost Lost Everything
        </h2>
        
        <div className="space-y-6 text-lg leading-relaxed text-foreground">
          <p>
            It was 6 AM on a pristine 30-meter yacht off the coast of Bodrum, Turkey. The guests were 
            expecting a five-course breakfast, and I—the solo chef responsible for feeding some 
            of the world's wealthiest families—couldn't open my eyes.
          </p>
          
          <p>
            The pain was <em>excruciating</em>. It felt like someone had inserted needles behind 
            my eyeballs and was slowly twisting them. My sinuses were so blocked, so inflamed, 
            that even the slightest movement of my eyes sent shockwaves of agony through my skull. 
            I had experienced headaches before, but this was different. This was debilitating.
          </p>
          
          <p className="text-xl font-medium text-heading">
            I couldn't think. I couldn't cook. I couldn't function.
          </p>
          
          <p>
            For weeks, I had been pushing through. Popping painkillers like candy. Using 
            prescription nasal sprays gave me brief relief but always made things worse 
            in the long run. I was exhausted, foggy, and my once-sharp culinary instincts 
            were dulled by constant, unrelenting pain.
          </p>
          
          <div className="bg-background p-8 md:p-10 my-10">
            <p className="text-xl text-heading font-heading italic text-center">
              "Is this too much for you?"
            </p>
            <p className="text-center mt-4 text-foreground">
              Those words from my boss cut deeper than any migraine. After 12 years of 
              excellence, of being the person they trusted to impress billionaires and 
              royalty, I was being asked if I could still do my job.
            </p>
          </div>
          
          {/* Yacht Image Placeholder */}
          <div className="image-placeholder w-full h-64 md:h-80 my-10">
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <Image className="w-16 h-16 text-muted-foreground/60 mb-2" />
              <span className="text-sm text-muted-foreground">Luxury Yacht in Bodrum / Chef's Kitchen</span>
            </div>
          </div>
          
          <p>
            Standing there in that galley kitchen, gripping the stainless steel counter for 
            balance because my vestibular system was so compromised, I felt like I was on 
            a ship even when docked, I made a decision.
          </p>
          
          <p className="text-xl font-medium text-heading">
            I refused to accept that this was my new normal. I refused to believe that at 
            50 years old, my best days were behind me.
          </p>
          
          <p>
            What happened next wasn't an overnight miracle. It was a methodical, research-driven 
            journey that drew on everything I knew—11 years as a trained psychologist understanding 
            behavior change, 12 years as an elite chef understanding nutrition and food science, 
            and a desperate, burning desire to reclaim my life.
          </p>
          
          <p>
            Within three months, I had lost 8 kilograms without feeling deprived. My sinuses 
            cleared for the first time in years. The headaches that had been my constant 
            companion simply... stopped. And my balance, my vestibular health, returned to 
            a level I hadn't experienced since my 30s.
          </p>
          
          <p className="text-center text-xl font-medium text-heading pt-6">
            This is the protocol I used. And now, I want to share it with you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
