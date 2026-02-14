import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const RealWeddings = () => {
  const weddings = [
    { couple: "Dr. Nijarth & Dr. Swarna", city: "Patna", image: "https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png", photos: 20 },
    { couple: "Naveen & Karishma", city: "Ranchi", image: "https://venuebychoice.com/wp-content/uploads/2025/07/naveen-Karishma.png", photos: 20 },
  ];

  return (
    <section id="real-weddings" className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Inspiration</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer shadow-elevated hover:shadow-gold transition-all duration-500"
            >
              <img
                src={w.image}
                alt={w.couple}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="inline-flex items-center gap-2 gradient-gold text-accent-foreground text-xs font-body font-semibold px-4 py-1.5 rounded-full mb-4 shadow-gold">
                  <Camera className="w-3.5 h-3.5" />
                  {w.photos} Photos
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{w.couple}</h3>
                <p className="text-primary-foreground/60 font-body text-sm mt-1">{w.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealWeddings;
