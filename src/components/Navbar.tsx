import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

type NavLink = { label: string; target?: string; href?: string };

const navLinks: NavLink[] = [
  { label: "Home", target: "hero" },
  { label: "Venues", href: "/venues" },
  { label: "How It Works", target: "how-it-works" },
  { label: "Real Weddings", target: "real-weddings" },
  { label: "Testimonials", target: "testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (link: NavLink) => {
    if (link.href) {
      navigate(link.href);
    } else if (link.target) {
      if (isHome) {
        scrollTo(link.target);
      } else {
        navigate("/");
        setTimeout(() => scrollTo(link.target!), 300);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "glass shadow-elevated border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="font-display text-xl font-bold">
          <span className={`text-gradient-gold`}>Venue</span>
          <span className={scrolled || !isHome ? "text-foreground" : "text-primary-foreground"}> by Choice</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className={`font-body text-sm px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent/20 ${
                link.href && location.pathname === link.href
                  ? "text-gold font-semibold"
                  : scrolled || !isHome
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo("cta")}
            className="gradient-gold text-accent-foreground font-body text-sm font-semibold px-6 py-2.5 rounded-full hover:opacity-90 transition-all shadow-gold hover:shadow-lg hover:scale-105 duration-300"
          >
            List Your Venue
          </button>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className={`lg:hidden ${scrolled || !isHome ? "text-foreground" : "text-primary-foreground"}`}>
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
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => { handleNavClick(link); setIsOpen(false); }}
                  className="block w-full text-left font-body text-sm text-muted-foreground hover:text-foreground py-2 px-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => { scrollTo("cta"); setIsOpen(false); }}
                className="inline-block gradient-gold text-accent-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full mt-3"
              >
                List Your Venue
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
