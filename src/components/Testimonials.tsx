import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "We hosted our engagement ceremony here, and everything from the ambiance to the service was outstanding. Highly recommended!",
    name: "Muskaan Rathi",
    image: "https://venuebychoice.com/wp-content/uploads/2025/05/ffkefcd.jpeg",
    rating: 5,
  },
  {
    text: "Venue By Choice made our wedding unforgettable. Every detail was perfect, and the team was incredibly helpful and supportive throughout the planning.",
    name: "Aayush Choudhary",
    image: "https://venuebychoice.com/wp-content/uploads/2025/05/x3hbyjv.jpeg",
    rating: 5,
  },
  {
    text: "The decoration and coordination were top-notch. Our guests still talk about how beautiful and seamless our big day was. Highly recommended for any couple!",
    name: "Priya Sharma",
    image: "https://venuebychoice.com/wp-content/uploads/2025/05/ffkefcd.jpeg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Love Stories</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            What Couples <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-md hover:shadow-elevated transition-all duration-500 relative group"
            >
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-gold/50" />
              </div>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-gold/20" />
                <span className="font-display font-semibold text-foreground">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
