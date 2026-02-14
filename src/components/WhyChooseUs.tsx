import { motion } from "framer-motion";
import { Heart, UserCheck, LayoutGrid, HeadphonesIcon } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Personalized Venue Matching", description: "We understand your vision and match you with venues that fit your style, budget, and guest count perfectly." },
  { icon: UserCheck, title: "Dedicated Consultant", description: "A personal wedding consultant guides you from search to booking — no confusion, no stress." },
  { icon: LayoutGrid, title: "One Place for Everything", description: "Browse venues, compare options, check availability, and book — all on a single platform." },
  { icon: HeadphonesIcon, title: "Free Guidance, Real Support", description: "Our expert team is always available to answer your questions and help you plan your big day." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">The Difference</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Why Choose <span className="text-gradient-gold">Venue by Choice?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:shadow-elevated transition-all duration-500 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-6 shadow-gold group-hover:scale-110 transition-transform duration-500">
                <r.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
