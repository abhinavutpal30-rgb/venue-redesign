import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-wine rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(38 70% 55%), transparent 50%), radial-gradient(circle at 70% 50%, hsl(38 60% 75%), transparent 50%)" }} />
          <div className="relative z-10">
            <p className="text-gold-light font-body text-sm tracking-[0.2em] uppercase mb-4">Expert Guidance</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Need Help Planning?
            </h2>
            <p className="text-primary-foreground/70 font-body max-w-lg mx-auto mb-8">
              Talk to our wedding experts and get personalized venue recommendations — absolutely free.
            </p>
            <a
              href="https://wa.me/919065645111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gradient-gold text-accent-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Schedule a Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
