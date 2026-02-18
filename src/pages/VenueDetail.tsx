import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Users, Star, Phone, Mail, Calendar, Check, ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const venueImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1200",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
];

const amenities = [
  "Valet Parking", "DJ & Sound System", "Catering Available", "Bridal Suite",
  "Air Conditioning", "Power Backup", "Decoration Services", "Wi-Fi",
  "Stage Setup", "Changing Rooms", "In-house Decorator", "Multiple Cuisines",
];

const pricingTiers = [
  { name: "Silver", price: "₹1,50,000", guests: "Up to 300 guests", features: ["Basic decoration", "Veg menu", "DJ for 3 hours", "Valet parking"] },
  { name: "Gold", price: "₹2,50,000", guests: "Up to 600 guests", features: ["Premium decoration", "Veg + Non-veg menu", "DJ for 5 hours", "Bridal suite", "Photography area"] },
  { name: "Platinum", price: "₹4,00,000", guests: "Up to 1000 guests", features: ["Luxury decoration", "Multi-cuisine buffet", "Live band + DJ", "Bridal suite", "Fireworks", "Complimentary stay"] },
];

const VenueDetail = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);

  const nextImage = () => setCurrentImage((p) => (p + 1) % venueImages.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + venueImages.length) % venueImages.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Gallery */}
      <section className="pt-20">
        <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={venueImages[currentImage]}
            alt="Venue gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/20" />

          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>

          <button onClick={() => setLiked(!liked)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
            <Heart className={`w-6 h-6 ${liked ? "fill-wine text-wine" : "text-foreground"}`} />
          </button>

          {/* Thumbnails */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {venueImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentImage(i)} className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentImage ? "bg-gold w-8" : "bg-primary-foreground/50"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <button onClick={() => navigate("/venues")} className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground mb-4 transition-colors">
                <ChevronLeft className="w-4 h-4" /> Back to Venues
              </button>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-bold text-foreground mb-3">
                The Grand Palace
              </motion.h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-body text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gold" /> Boring Road, Patna, Bihar</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4 text-gold" /> 200–800 guests</span>
                <span className="flex items-center gap-1.5 bg-foreground/80 text-primary-foreground px-2.5 py-1 rounded-lg"><Star className="w-3.5 h-3.5 fill-gold text-gold" /> 4.8 (124 reviews)</span>
              </div>
            </div>

            {/* About */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">About This Venue</h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                The Grand Palace is a premier wedding destination in Patna, offering elegant banquet halls with a blend of modern luxury and traditional charm. With spacious lawns, grand ballrooms, and dedicated event planners, it's the ideal choice for weddings, receptions, and celebrations of all sizes.
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((a, i) => (
                  <motion.div
                    key={a}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2.5 bg-secondary/50 rounded-xl px-4 py-3 border border-border/30"
                  >
                    <Check className="w-4 h-4 text-gold shrink-0" />
                    <span className="font-body text-sm text-foreground">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">Pricing Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pricingTiers.map((tier, i) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-6 border transition-all hover:shadow-elevated ${
                      i === 1 ? "gradient-wine-deep text-primary-foreground border-transparent shadow-wine" : "bg-card border-border/50"
                    }`}
                  >
                    <h3 className={`font-display text-lg font-bold mb-1 ${i === 1 ? "text-gold" : "text-foreground"}`}>{tier.name}</h3>
                    <p className={`text-2xl font-display font-bold mb-1 ${i === 1 ? "text-primary-foreground" : "text-foreground"}`}>{tier.price}</p>
                    <p className={`text-xs font-body mb-4 ${i === 1 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{tier.guests}</p>
                    <ul className="space-y-2">
                      {tier.features.map((f) => (
                        <li key={f} className={`flex items-center gap-2 text-sm font-body ${i === 1 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          <Check className={`w-3.5 h-3.5 shrink-0 ${i === 1 ? "text-gold" : "text-gold"}`} /> {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Booking CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl shadow-elevated border border-border/30 p-6"
              >
                <p className="font-display text-sm uppercase tracking-wider text-muted-foreground mb-1">Starting from</p>
                <p className="font-display text-3xl font-bold text-foreground mb-6">₹1,50,000</p>

                <div className="space-y-3 mb-6">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" />
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30" />
                </div>

                <button className="w-full gradient-gold text-accent-foreground font-body font-semibold py-3.5 rounded-xl shadow-gold hover:opacity-90 hover:shadow-lg transition-all">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Book a Visit
                </button>

                <div className="mt-4 flex gap-2">
                  <a href="tel:+919065645111" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border/50 text-sm font-body text-foreground hover:bg-secondary/50 transition-colors">
                    <Phone className="w-4 h-4 text-gold" /> Call
                  </a>
                  <a href="mailto:info@venuebychoice.com" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-border/50 text-sm font-body text-foreground hover:bg-secondary/50 transition-colors">
                    <Mail className="w-4 h-4 text-gold" /> Email
                  </a>
                </div>
              </motion.div>

              <div className="rounded-2xl overflow-hidden border border-border/30 h-48 bg-muted flex items-center justify-center">
                <p className="font-body text-muted-foreground text-sm">📍 Map — Boring Road, Patna</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VenueDetail;
