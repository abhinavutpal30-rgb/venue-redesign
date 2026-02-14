import { motion } from "framer-motion";

const eventTypes = [
  "Engagements", "Mehendi & Sangeet", "Wedding Day", "Reception Parties",
  "Anniversaries & Birthdays", "Cultural Gatherings", "Corporate Events",
];

const CelebrationMarquee = () => {
  return (
    <section className="py-16 overflow-hidden bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
          Plan Your <span className="text-gold-light">Celebration</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...eventTypes, ...eventTypes].map((event, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-4 px-6 py-3 rounded-full border border-primary-foreground/20 text-primary-foreground/80 font-body text-sm hover:bg-primary-foreground/10 transition-colors cursor-default"
            >
              {event}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CelebrationMarquee;
