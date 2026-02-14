import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const cities = ["Patna", "Kolkata"];

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-4"
        >
          Venue by Choice
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6"
        >
          Where Finding Your
          <br />
          <span className="text-gradient-gold">Wedding Venue</span>
          <br />
          Is Effortless
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-primary-foreground/70 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10"
        >
          Discover curated banquet halls, hotels & resorts across Patna and Kolkata — handpicked for your perfect celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative max-w-md mx-auto"
        >
          <div
            className="glass rounded-xl px-6 py-4 flex items-center gap-4 cursor-pointer shadow-2xl border border-border/30"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Search className="w-5 h-5 text-muted-foreground" />
            <span className={`flex-1 text-left font-body ${selectedCity ? "text-foreground" : "text-muted-foreground"}`}>
              {selectedCity || "Select Your City"}
            </span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full mt-2 w-full glass rounded-xl shadow-2xl border border-border/30 overflow-hidden z-20"
            >
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => { setSelectedCity(city); setIsOpen(false); }}
                  className="w-full px-6 py-3 text-left font-body text-foreground hover:bg-accent/50 transition-colors"
                >
                  {city}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
