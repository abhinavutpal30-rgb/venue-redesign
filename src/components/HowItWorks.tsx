import { motion } from "framer-motion";
import { Search, ListChecks, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search Vendors",
    description: "Browse through our curated collection of verified venues filtered by location, budget, and guest capacity.",
  },
  {
    icon: ListChecks,
    step: "02",
    title: "Shortlist & Enquire",
    description: "Compare your favorites side by side, check availability, and send enquiries directly to venue teams.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Book & Plan",
    description: "Confirm your perfect venue and start planning your dream celebration with our dedicated support team.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Simple Process</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full gradient-wine mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-xs font-bold font-body text-accent-foreground shadow">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
