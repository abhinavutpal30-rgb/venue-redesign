import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const cities = ["Patna", "Kolkata"];

const HeroSection = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/90" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-gold opacity-30"
      />
      <motion.div
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[20%] w-3 h-3 rounded-full bg-gold-light opacity-20"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="text-gold-light font-body text-sm tracking-wide">Venue by Choice</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground leading-[1.1] mb-6"
        >
          Where Finding Your
          <br />
          <span className="text-gradient-gold">Dream Venue</span>
          <br />
          Is Effortless
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-primary-foreground/70 text-lg md:text-xl font-body max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Discover curated banquet halls, hotels & resorts across Patna and Kolkata — handpicked for your perfect celebration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative max-w-md mx-auto"
        >
          <div
            className="glass rounded-2xl px-6 py-4 flex items-center gap-4 cursor-pointer shadow-elevated border border-border/20 hover:shadow-gold transition-shadow duration-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shrink-0">
              <Search className="w-5 h-5 text-accent-foreground" />
            </div>
            <span className={`flex-1 text-left font-body ${selectedCity ? "text-foreground font-medium" : "text-muted-foreground"}`}>
              {selectedCity || "Select Your City"}
            </span>
            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-3 w-full glass rounded-2xl shadow-elevated border border-border/20 overflow-hidden z-20"
              >
                {cities.map((city, i) => (
                  <motion.button
                    key={city}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => { setSelectedCity(city); setIsOpen(false); }}
                    className="w-full px-6 py-4 text-left font-body text-foreground hover:bg-accent/30 transition-colors flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    {city}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center gap-12 mt-16"
        >
          {[
            { value: "200+", label: "Venues" },
            { value: "5000+", label: "Happy Couples" },
            { value: "2", label: "Cities" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-gold">{stat.value}</p>
              <p className="text-primary-foreground/50 font-body text-xs uppercase tracking-wider mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
