import { motion } from "framer-motion";
import { MapPin, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const destinations = [
  { name: "Puri", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400" },
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400" },
  { name: "Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400" },
  { name: "Mumbai", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400" },
  { name: "Jaipur", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400" },
  { name: "Darjeeling", image: "https://images.unsplash.com/photo-1622308644420-27c0d7bce884?w=400" },
  { name: "Kolkata", image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=400" },
  { name: "Mandarmoni", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400" },
  { name: "Digha", image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400" },
  { name: "Varanasi", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=400" },
  { name: "Rishikesh", image: "https://images.unsplash.com/photo-1600100397608-e4b0eae34c5e?w=400" },
  { name: "Vrindavan", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=400" },
  { name: "Ranchi", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400" },
  { name: "Deoghar", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=400" },
  { name: "Patna", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400" },
  { name: "Gaya Ji", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400" },
];

const DestinationWedding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 gradient-wine-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 40%, hsl(38 70% 55%), transparent 50%), radial-gradient(circle at 70% 60%, hsl(38 60% 75%), transparent 50%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 rounded-full px-5 py-2 mb-8">
              <Clock className="w-4 h-4 text-gold" />
              <span className="text-gold font-body text-sm font-semibold tracking-wide">COMING SOON</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Destination <span className="text-gradient-gold">Weddings</span>
            </h1>
            <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto mb-10">
              Dream weddings at India's most breathtaking locations. We're curating the finest destination venues just for you.
            </p>
          </motion.div>

          {/* Countdown-style teaser */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-6 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl px-8 py-5"
          >
            {[
              { value: "50+", label: "Venues" },
              { value: "16", label: "Cities" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <p className="text-2xl md:text-3xl font-display font-bold text-gold">{stat.value}</p>
                <p className="text-primary-foreground/60 font-body text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Explore</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Popular Destinations
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-primary-foreground font-display font-semibold text-lg">{dest.name}</span>
                </div>
                <div className="absolute top-3 right-3 bg-gold/90 text-accent-foreground text-xs font-body font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  Coming Soon
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify CTA */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-wine-deep rounded-3xl p-10 md:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(38 70% 55%), transparent 40%)" }} />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
                Get Notified When We Launch
              </h3>
              <p className="text-primary-foreground/60 font-body mb-8">
                Be the first to explore our handpicked destination wedding venues.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 font-body text-sm focus:outline-none focus:border-gold/50"
                />
                <button className="gradient-gold text-accent-foreground font-body font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-all shadow-gold whitespace-nowrap">
                  Notify Me
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back */}
      <div className="text-center pb-16">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationWedding;
