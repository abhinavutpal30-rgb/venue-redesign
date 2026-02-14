import { motion } from "framer-motion";

const eventTypes = [
  "Engagements", "Mehendi & Sangeet", "Wedding Day", "Reception Parties",
  "Anniversaries & Birthdays", "Cultural Gatherings", "Corporate Events",
];

const CelebrationMarquee = () => {
  return (
    <section className="py-20 overflow-hidden gradient-wine-deep relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(38 70% 55%), transparent 40%), radial-gradient(circle at 80% 50%, hsl(38 60% 75%), transparent 40%)" }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground">
          Plan Your <span className="text-gradient-gold">Celebration</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...eventTypes, ...eventTypes].map((event, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-3 px-7 py-3.5 rounded-full border border-primary-foreground/15 text-primary-foreground/80 font-body text-sm hover:bg-primary-foreground/10 hover:border-gold/30 transition-all duration-300 cursor-default backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3 opacity-60" />
              {event}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrationMarquee;
