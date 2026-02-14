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
    <section id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Love Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            What Couples <span className="text-gradient-gold">Say</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="w-8 h-8 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <span className="font-display font-semibold text-foreground text-sm">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
