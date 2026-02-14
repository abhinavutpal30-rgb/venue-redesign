import { motion } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="gradient-wine-deep rounded-[2rem] p-14 md:p-20 text-center relative overflow-hidden shadow-wine"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 40%, hsl(38 70% 55%), transparent 50%), radial-gradient(circle at 80% 60%, hsl(38 60% 75%), transparent 50%)" }} />

          {/* Decorative sparkles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 right-8 text-gold/20"
          >
            <Sparkles className="w-8 h-8" />
          </motion.div>

          <div className="relative z-10">
            <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase mb-5">Expert Guidance</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-5 leading-tight">
              Need Help Planning?
            </h2>
            <p className="text-primary-foreground/60 font-body text-lg max-w-lg mx-auto mb-10">
              Talk to our wedding experts and get personalized venue recommendations — absolutely free.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919065645111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gradient-gold text-accent-foreground font-body font-bold px-10 py-5 rounded-full hover:opacity-90 transition-all shadow-gold text-lg"
            >
              <Phone className="w-5 h-5" />
              Schedule a Free Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
