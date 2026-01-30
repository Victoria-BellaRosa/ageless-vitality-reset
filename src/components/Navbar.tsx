const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow py-4 flex items-center justify-between">
        <h1 className="font-heading text-xl md:text-2xl text-heading">
          Ageless Vitality
        </h1>
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          Free Guide
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
