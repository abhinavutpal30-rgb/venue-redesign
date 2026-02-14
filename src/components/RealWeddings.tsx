import { motion } from "framer-motion";

const RealWeddings = () => {
  const weddings = [
    { couple: "Dr. Nijarth & Dr. Swarna", city: "Patna", image: "https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png", photos: 20 },
    { couple: "Naveen & Karishma", city: "Ranchi", image: "https://venuebychoice.com/wp-content/uploads/2025/07/naveen-Karishma.png", photos: 20 },
  ];

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Inspiration</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Real <span className="text-gradient-gold">Weddings</span>
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-lg mx-auto">
            From our venues to their vows — explore stories that inspire yours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {weddings.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={w.image}
                alt={w.couple}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block gradient-gold text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full mb-3">
                  + {w.photos} Photos
                </span>
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{w.couple}</h3>
                <p className="text-primary-foreground/70 font-body text-sm mt-1">{w.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWeddings;
