import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", target: "hero" },
  { label: "Venues", target: "venues" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Real Weddings", target: "real-weddings" },
  { label: "Testimonials", target: "testimonials" },
  { label: "Blog", target: "blog" },
  { label: "FAQ", target: "faq" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="font-display text-xl font-bold text-foreground">
          <span className="text-gradient-gold">Venue</span> by Choice
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.target)}
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("cta")}
            className="gradient-wine text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            List Your Venue
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/30 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => { scrollTo(link.target); setIsOpen(false); }}
                  className="block font-body text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { scrollTo("cta"); setIsOpen(false); }}
                className="inline-block gradient-wine text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
              >
                List Your Venue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
