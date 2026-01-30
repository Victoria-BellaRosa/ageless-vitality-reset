const Footer = () => {
  return (
    <footer className="bg-footer py-12 md:py-16">
      <div className="container-narrow text-center">
        <h4 className="font-heading text-xl text-footer-foreground mb-6">
          Ageless Vitality
        </h4>
        
        <button className="btn-primary mb-10">
          Get My Free Reset Guide
        </button>
        
        <p className="text-sm text-footer-foreground/70 leading-relaxed max-w-lg mx-auto">
          <strong>Medical Disclaimer:</strong> Consult your physician before starting 
          any new diet protocol. The information provided is for educational purposes 
          only and is not intended as medical advice.
        </p>
        
        <div className="mt-8 pt-8 border-t border-footer-foreground/20">
          <p className="text-xs text-footer-foreground/50">
            © {new Date().getFullYear()} Ageless Vitality. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
