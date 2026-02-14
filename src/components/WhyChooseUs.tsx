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
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Why Choose <span className="text-gradient-gold italic">Venue by Choice?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center border border-border/50 hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-gold mb-5">
                <r.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
