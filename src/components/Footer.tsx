import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(38 70% 55%), transparent 40%)" }} />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              <span className="text-gradient-gold">Venue</span> by Choice
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
              Your trusted partner in finding the perfect wedding venue. Curated, verified, and loved by thousands.
            </p>
            <div className="flex gap-3">
              {["📞", "📧", "📍"].map((icon, i) => (
                <span key={i} className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-sm hover:bg-border transition-colors cursor-pointer">
                  {icon}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Wedding Services</h4>
            <ul className="space-y-3">
              {["Venue", "Photography", "Videography", "Bridal Make Up"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground font-body text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Explore By City</h4>
            <ul className="space-y-3">
              {[
                "Wedding Services in Kolkata",
                "Wedding Services in Patna",
                "Venue By Patna",
                "Venue By Kolkata",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground font-body text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-5 text-sm uppercase tracking-wider">Services By City</h4>
            <ul className="space-y-3">
              {[
                "Photographer in Patna",
                "Videographer in Patna",
                "Makeup Artist in Patna",
                "Photographer in Kolkata",
                "Videographer in Kolkata",
                "Makeup Artist in Kolkata",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground font-body text-sm hover:text-gold transition-colors hover:translate-x-1 inline-block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} Venue by Choice. All rights reserved.
          </p>
          <p className="text-muted-foreground font-body text-sm flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-gold fill-gold" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
