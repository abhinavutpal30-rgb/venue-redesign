const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold text-background mb-4">
              <span className="text-gold">Venue</span> by Choice
            </h3>
            <p className="text-background/50 font-body text-sm leading-relaxed">
              Your trusted partner in finding the perfect wedding venue. Curated, verified, and loved by thousands.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Venues", "Wedding Services", "Blog"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/50 font-body text-sm hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Tools</h4>
            <ul className="space-y-2">
              {["Compare Venues", "Budget Calculator", "Planning Checklist", "Real Weddings"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/50 font-body text-sm hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
            <ul className="space-y-2 text-background/50 font-body text-sm">
              <li>📞 +91 9065645111</li>
              <li>📧 info@venuebychoice.com</li>
              <li>📍 Patna & Kolkata, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 font-body text-sm">
            © {new Date().getFullYear()} Venue by Choice. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
