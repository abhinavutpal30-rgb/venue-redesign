import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Video, Palette, Music, Utensils, Flower2, MapPin, Star, ArrowRight, Phone, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceCategories = [
  { id: "all", label: "All Services", icon: Filter },
  { id: "photography", label: "Photography", icon: Camera },
  { id: "videography", label: "Videography", icon: Video },
  { id: "makeup", label: "Bridal Makeup", icon: Palette },
  { id: "dj", label: "DJ & Music", icon: Music },
  { id: "catering", label: "Catering", icon: Utensils },
  { id: "decoration", label: "Decoration", icon: Flower2 },
];

const services = [
  { id: 1, name: "Capture Moments Studio", category: "photography", city: "Patna", rating: 4.8, reviews: 89, price: "₹25,000", priceLabel: "per day", image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600", description: "Premium wedding photography with candid and traditional coverage.", tags: ["Candid", "Traditional", "Pre-wedding"] },
  { id: 2, name: "DreamFrame Photography", category: "photography", city: "Kolkata", rating: 4.9, reviews: 134, price: "₹35,000", priceLabel: "per day", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600", description: "Cinematic wedding photography and drone shots for your special day.", tags: ["Cinematic", "Drone", "Album"] },
  { id: 3, name: "WedFilms Production", category: "videography", city: "Patna", rating: 4.7, reviews: 56, price: "₹40,000", priceLabel: "per event", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600", description: "Cinematic wedding films with highlight reels and full-length coverage.", tags: ["Cinematic", "Highlight Reel", "4K"] },
  { id: 4, name: "Reel Stories", category: "videography", city: "Kolkata", rating: 4.8, reviews: 78, price: "₹50,000", priceLabel: "per event", image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?w=600", description: "Storytelling-focused wedding videography with emotional narratives.", tags: ["Documentary", "Drone", "Same-day Edit"] },
  { id: 5, name: "Glow & Grace Makeup", category: "makeup", city: "Patna", rating: 4.9, reviews: 112, price: "₹15,000", priceLabel: "per session", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600", description: "Expert bridal makeup with HD finish and long-lasting products.", tags: ["HD Makeup", "Airbrush", "Draping"] },
  { id: 6, name: "Bridal Aura", category: "makeup", city: "Kolkata", rating: 4.8, reviews: 95, price: "₹20,000", priceLabel: "per session", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600", description: "Celebrity-style bridal makeup with premium international products.", tags: ["Celebrity Style", "Trial Available", "Mehendi"] },
  { id: 7, name: "BeatDrop Entertainment", category: "dj", city: "Patna", rating: 4.6, reviews: 67, price: "₹18,000", priceLabel: "per night", image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=600", description: "High-energy DJ services with premium sound and lighting setup.", tags: ["LED Setup", "Fog Machine", "Bollywood"] },
  { id: 8, name: "Royal Caterers", category: "catering", city: "Patna", rating: 4.7, reviews: 145, price: "₹800", priceLabel: "per plate", image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600", description: "Multi-cuisine catering with live counters and customized menus.", tags: ["Veg & Non-Veg", "Live Counters", "Dessert Bar"] },
  { id: 9, name: "Kolkata Kitchen Caterers", category: "catering", city: "Kolkata", rating: 4.8, reviews: 189, price: "₹1,000", priceLabel: "per plate", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600", description: "Authentic Bengali and multi-cuisine wedding catering specialists.", tags: ["Bengali Cuisine", "Mughlai", "Chinese Counter"] },
  { id: 10, name: "Blossom Decor", category: "decoration", city: "Patna", rating: 4.8, reviews: 98, price: "₹50,000", priceLabel: "per event", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600", description: "Stunning floral and theme-based wedding decoration services.", tags: ["Floral", "Theme Decor", "Mandap"] },
  { id: 11, name: "Dream Décor Kolkata", category: "decoration", city: "Kolkata", rating: 4.9, reviews: 120, price: "₹65,000", priceLabel: "per event", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", description: "Luxury wedding decoration with imported flowers and custom installations.", tags: ["Luxury", "Imported Flowers", "LED Walls"] },
  { id: 12, name: "DJ Blaze", category: "dj", city: "Kolkata", rating: 4.7, reviews: 54, price: "₹22,000", priceLabel: "per night", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", description: "Premium DJ and entertainment services for grand wedding celebrations.", tags: ["Sound System", "Laser Show", "MC Service"] },
];

const cities = ["All", "Patna", "Kolkata"];

const WeddingServices = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeCity, setActiveCity] = useState("All");

  const filtered = services.filter((s) => {
    if (activeCategory !== "all" && s.category !== activeCategory) return false;
    if (activeCity !== "All" && s.city !== activeCity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Wedding Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto">
            Find the best photographers, makeup artists, decorators, caterers and more — all handpicked for your perfect wedding.
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="glass rounded-2xl shadow-elevated border border-border/30 p-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-body font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? "gradient-gold text-accent-foreground shadow-gold"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2 mt-3 pt-3 border-t border-border/30">
            <span className="font-body text-xs text-muted-foreground mr-2 self-center">City:</span>
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCity(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-body font-semibold transition-all ${
                  activeCity === c ? "bg-foreground text-primary-foreground" : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <p className="font-body text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-500 border border-border/50"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-3 right-3 glass rounded-xl px-3 py-1.5 shadow-lg">
                  <span className="text-sm font-body font-bold text-foreground">{service.price}</span>
                  <span className="text-xs font-body text-muted-foreground ml-1">/{service.priceLabel.replace("per ", "")}</span>
                </div>
                <div className="absolute top-3 left-3 flex items-center gap-1 bg-foreground/70 backdrop-blur-sm rounded-lg px-2.5 py-1">
                  <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                  <span className="text-xs font-bold font-body text-primary-foreground">{service.rating}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="flex items-center gap-1.5 text-xs font-body text-muted-foreground mb-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> {service.city}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{service.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs font-body bg-secondary text-muted-foreground rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted-foreground font-body">{service.reviews} reviews</span>
                  <button className="inline-flex items-center gap-1 text-sm font-body font-semibold text-primary hover:text-wine-light transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Camera className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="font-display text-xl text-foreground mb-2">No services found</p>
            <p className="font-body text-muted-foreground text-sm">Try adjusting your filters.</p>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="gradient-wine-deep rounded-2xl p-8 md:p-12 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">Are You a Wedding Vendor?</h2>
          <p className="font-body text-primary-foreground/70 mb-6 max-w-lg mx-auto">List your services on Venue By Choice and reach thousands of couples planning their dream wedding.</p>
          <button className="gradient-gold text-accent-foreground font-body font-semibold px-8 py-3 rounded-xl shadow-gold hover:opacity-90 transition-all">
            <Phone className="w-4 h-4 inline mr-2" /> Contact Us to List
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingServices;
