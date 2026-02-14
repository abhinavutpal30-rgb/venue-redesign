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
    <section id="how-it-works" className="py-28 px-6 bg-secondary relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Simple Process</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            How It <span className="text-gradient-gold">Works</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="text-center group"
            >
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full gradient-wine mb-8 shadow-wine group-hover:scale-110 transition-all duration-500">
                <item.icon className="w-10 h-10 text-primary-foreground" />
                <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full gradient-gold flex items-center justify-center text-xs font-bold font-body text-accent-foreground shadow-gold">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-xs mx-auto">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
