import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, MapPin, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VenueCard from "@/components/VenueCard";

const allVenues = [
  { name: "The Grand Palace", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600", price: "₹1,50,000", address: "Boring Road, Patna, Bihar", capacity: "200-800 guests", rating: 4.8, reviews: 124, city: "Patna", type: "Banquet Hall", budget: "premium" },
  { name: "Royal Heritage Resort", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600", price: "₹2,00,000", address: "NH-30, Patna, Bihar", capacity: "500-1500 guests", rating: 4.9, reviews: 89, city: "Patna", type: "Resort", budget: "luxury" },
  { name: "Majestic Banquets", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", price: "₹80,000", address: "Fraser Road, Patna, Bihar", capacity: "100-400 guests", rating: 4.6, reviews: 56, city: "Patna", type: "Banquet Hall", budget: "budget" },
  { name: "The Vedic Resort", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600", price: "₹3,00,000", address: "Rajgir Road, Patna, Bihar", capacity: "300-1000 guests", rating: 4.7, reviews: 67, city: "Patna", type: "Resort", budget: "luxury" },
  { name: "ITC Sonar", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", price: "₹5,00,000", address: "JBS Haldane Ave, Kolkata", capacity: "200-1200 guests", rating: 4.9, reviews: 210, city: "Kolkata", type: "Hotel", budget: "luxury" },
  { name: "The Oberoi Grand", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600", price: "₹4,50,000", address: "Chowringhee, Kolkata", capacity: "150-800 guests", rating: 4.8, reviews: 178, city: "Kolkata", type: "Hotel", budget: "luxury" },
  { name: "Eden Gardens Banquet", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", price: "₹1,20,000", address: "Park Street, Kolkata", capacity: "200-600 guests", rating: 4.5, reviews: 92, city: "Kolkata", type: "Banquet Hall", budget: "premium" },
  { name: "Raichak on Ganges", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", price: "₹2,50,000", address: "Raichak, South 24 Parganas", capacity: "300-1000 guests", rating: 4.7, reviews: 143, city: "Kolkata", type: "Resort", budget: "premium" },
];

const cities = ["All", "Patna", "Kolkata"];
const types = ["All", "Banquet Hall", "Hotel", "Resort"];
const budgets = ["All", "budget", "premium", "luxury"];
const budgetLabels: Record<string, string> = { All: "All Budgets", budget: "Under ₹1L", premium: "₹1L - ₹3L", luxury: "₹3L+" };

const Venues = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All");
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = allVenues.filter((v) => {
    if (city !== "All" && v.city !== city) return false;
    if (type !== "All" && v.type !== type) return false;
    if (budget !== "All" && v.budget !== budget) return false;
    if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.address.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const activeFilters = [city, type, budget].filter((f) => f !== "All").length;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4"
          >
            Explore Our <span className="text-gradient-gold">Venues</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto"
          >
            Browse handpicked venues across Patna & Kolkata for your perfect celebration.
          </motion.p>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl shadow-elevated border border-border/30 p-4 md:p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search venues by name or location..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-body text-sm font-medium transition-all ${
                showFilters || activeFilters > 0
                  ? "gradient-gold text-accent-foreground shadow-gold"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary border border-border/50"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {activeFilters > 0 && (
                <span className="w-5 h-5 rounded-full bg-wine text-primary-foreground text-xs flex items-center justify-center">{activeFilters}</span>
              )}
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-4 pt-4 border-t border-border/30 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">City</label>
                <div className="flex flex-wrap gap-2">
                  {cities.map((c) => (
                    <button key={c} onClick={() => setCity(c)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${city === c ? "gradient-gold text-accent-foreground shadow-gold" : "bg-secondary/50 text-muted-foreground hover:bg-secondary"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <button key={t} onClick={() => setType(t)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${type === t ? "gradient-gold text-accent-foreground shadow-gold" : "bg-secondary/50 text-muted-foreground hover:bg-secondary"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Budget</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button key={b} onClick={() => setBudget(b)} className={`px-4 py-2 rounded-lg font-body text-sm transition-all ${budget === b ? "gradient-gold text-accent-foreground shadow-gold" : "bg-secondary/50 text-muted-foreground hover:bg-secondary"}`}>
                      {budgetLabels[b]}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>

      {/* Results */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="font-body text-muted-foreground text-sm">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> venues
          </p>
          {activeFilters > 0 && (
            <button onClick={() => { setCity("All"); setType("All"); setBudget("All"); setSearch(""); }} className="flex items-center gap-1 text-sm font-body text-wine hover:text-wine-light transition-colors">
              <X className="w-4 h-4" /> Clear all
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <VenueCard {...venue} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="font-display text-xl text-foreground mb-2">No venues found</p>
            <p className="font-body text-muted-foreground text-sm">Try adjusting your filters or search term.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Venues;
