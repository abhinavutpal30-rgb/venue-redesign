import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Users, Star, ArrowRight, Phone, Shield, Clock, Award, ChevronDown, X, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InquiryFormPopup from "@/components/InquiryFormPopup";
import Footer from "@/components/Footer";

const patnaVenues = [
  { id: "the-grand-palace", name: "The Grand Palace", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600", price: "₹1,50,000", priceLabel: "onwards", address: "Boring Road, Patna", capacity: "200-800", rating: 4.8, reviews: 124, type: "Banquet Hall", veg: true, featured: true },
  { id: "royal-heritage-resort", name: "Royal Heritage Resort", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600", price: "₹2,00,000", priceLabel: "onwards", address: "NH-30, Patna", capacity: "500-1500", rating: 4.9, reviews: 89, type: "Resort", veg: false, featured: true },
  { id: "majestic-banquets", name: "Majestic Banquets", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", price: "₹80,000", priceLabel: "onwards", address: "Fraser Road, Patna", capacity: "100-400", rating: 4.6, reviews: 56, type: "Banquet Hall", veg: true, featured: false },
  { id: "the-vedic-resort", name: "The Vedic Resort", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600", price: "₹3,00,000", priceLabel: "onwards", address: "Rajgir Road, Patna", capacity: "300-1000", rating: 4.7, reviews: 67, type: "Resort", veg: false, featured: true },
  { id: "patna-marriott", name: "Hotel Chanakya", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", price: "₹1,80,000", priceLabel: "onwards", address: "Beer Chand Patel Marg, Patna", capacity: "150-600", rating: 4.5, reviews: 98, type: "Hotel", veg: false, featured: false },
  { id: "rajdhani-lawn", name: "Rajdhani Party Lawn", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", price: "₹60,000", priceLabel: "onwards", address: "Bailey Road, Patna", capacity: "200-800", rating: 4.4, reviews: 72, type: "Lawn", veg: true, featured: false },
  { id: "lemon-tree-patna", name: "Lemon Tree Hotel", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600", price: "₹1,20,000", priceLabel: "onwards", address: "Exhibition Road, Patna", capacity: "100-350", rating: 4.6, reviews: 83, type: "Hotel", veg: false, featured: false },
  { id: "shagun-garden", name: "Shagun Garden", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", price: "₹45,000", priceLabel: "onwards", address: "Kankarbagh, Patna", capacity: "200-600", rating: 4.3, reviews: 45, type: "Lawn", veg: true, featured: false },
];

const venueTypes = ["All", "Banquet Hall", "Hotel", "Resort", "Lawn"];
const budgetRanges = [
  { label: "All Budgets", value: "all" },
  { label: "Under ₹1L", value: "under1" },
  { label: "₹1L - ₹2L", value: "1to2" },
  { label: "₹2L+", value: "above2" },
];

const PatnaVenues = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("all");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<string | undefined>(undefined);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitShown, setExitShown] = useState(false);

  // Exit-intent popup (desktop) & scroll-triggered (mobile)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown) {
        setShowExitPopup(true);
        setExitShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    // Auto-show inquiry after 15s for engagement
    const timer = setTimeout(() => {
      if (!exitShown) {
        setShowExitPopup(true);
        setExitShown(true);
      }
    }, 15000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timer);
    };
  }, [exitShown]);

  const getBudgetValue = (price: string) => {
    const num = parseInt(price.replace(/[₹,]/g, ""));
    if (num < 100000) return "under1";
    if (num <= 200000) return "1to2";
    return "above2";
  };

  const filtered = patnaVenues.filter((v) => {
    if (type !== "All" && v.type !== type) return false;
    if (budget !== "all" && getBudgetValue(v.price) !== budget) return false;
    if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.address.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const openInquiry = (venueName?: string) => {
    setSelectedVenue(venueName);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Slim Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass shadow-elevated border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="font-display text-lg font-bold">
            <span className="text-gradient-gold">Venue</span>
            <span className="text-foreground"> by Choice</span>
          </button>
          <div className="hidden md:flex items-center gap-6">
            <span className="flex items-center gap-2 text-sm font-body text-muted-foreground">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+919065645111" className="hover:text-foreground transition-colors font-semibold">+91 90656 45111</a>
            </span>
            <button onClick={() => openInquiry()} className="gradient-gold text-accent-foreground font-body text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition-all shadow-gold">
              Get Free Quote
            </button>
          </div>
          <button onClick={() => openInquiry()} className="md:hidden gradient-gold text-accent-foreground font-body text-xs font-semibold px-4 py-2 rounded-full shadow-gold">
            Free Quote
          </button>
        </div>
      </header>

      {/* Hero - Compact, Conversion Focused */}
      <section className="relative pt-20 pb-6 md:pt-24 md:pb-10 px-4 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center py-8 md:py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-gold-light font-body text-xs md:text-sm tracking-[0.25em] uppercase mb-3">Patna's #1 Wedding Venue Platform</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-4 leading-tight">
              Best Wedding Venues in <span className="text-gradient-gold">Patna</span>
            </h1>
            <p className="text-primary-foreground/60 font-body text-sm md:text-lg max-w-xl mx-auto mb-6">
              Compare prices, check availability & book the perfect venue for your dream wedding.
            </p>
          </motion.div>

          {/* Trust Signals */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-foreground/70"
          >
            {[
              { icon: Shield, text: "Best Price Guarantee" },
              { icon: Clock, text: "Instant Availability" },
              { icon: Award, text: "Verified Venues Only" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 font-body text-xs md:text-sm">
                <Icon className="w-4 h-4 text-gold" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sticky Inquiry Bar (constant form strip) */}
      <section className="sticky top-[52px] z-40 bg-card border-b border-border/50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center gap-3">
          <div className="flex-1 w-full md:w-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by venue name or area..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 min-w-[130px]"
            >
              {venueTypes.map((t) => (
                <option key={t} value={t}>{t === "All" ? "All Types" : t}</option>
              ))}
            </select>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 min-w-[130px]"
            >
              {budgetRanges.map((b) => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>
          <button
            onClick={() => openInquiry()}
            className="hidden md:flex gradient-wine text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all items-center gap-2 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            Get Expert Help
          </button>
        </div>
      </section>

      {/* Venue Listing */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="font-body text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> venues in Patna
          </p>
          {(type !== "All" || budget !== "all" || search) && (
            <button onClick={() => { setType("All"); setBudget("all"); setSearch(""); }} className="flex items-center gap-1 text-sm font-body text-wine hover:text-wine-light transition-colors">
              <X className="w-3.5 h-3.5" /> Clear
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="space-y-4">
            {filtered.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-300 border border-border/50 flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto shrink-0 overflow-hidden cursor-pointer" onClick={() => navigate(`/venue/${venue.id}`)}>
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {venue.featured && (
                    <span className="absolute top-3 left-3 gradient-gold text-accent-foreground font-body text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Featured</span>
                  )}
                  <div className="absolute top-3 right-3 glass rounded-lg px-2 py-1 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-xs font-bold font-body text-foreground">{venue.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer" onClick={() => navigate(`/venue/${venue.id}`)}>
                          {venue.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          <span className="font-body text-sm text-muted-foreground">{venue.address}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-display text-lg font-bold text-foreground">{venue.price}</p>
                        <p className="font-body text-[11px] text-muted-foreground">{venue.priceLabel}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <span className="inline-flex items-center gap-1 bg-secondary/60 rounded-lg px-2.5 py-1 font-body text-xs text-muted-foreground">
                        <Users className="w-3 h-3" /> {venue.capacity} guests
                      </span>
                      <span className="inline-flex items-center bg-secondary/60 rounded-lg px-2.5 py-1 font-body text-xs text-muted-foreground">
                        {venue.type}
                      </span>
                      {venue.veg && (
                        <span className="inline-flex items-center bg-accent/10 text-accent-foreground rounded-lg px-2.5 py-1 font-body text-xs font-medium">
                          Veg Available
                        </span>
                      )}
                      <span className="font-body text-xs text-muted-foreground">{venue.reviews} reviews</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                    <button
                      onClick={() => openInquiry(venue.name)}
                      className="flex-1 gradient-gold text-accent-foreground font-body text-sm font-semibold py-2.5 rounded-xl hover:opacity-90 transition-all shadow-gold text-center"
                    >
                      Send Enquiry
                    </button>
                    <button
                      onClick={() => navigate(`/venue/${venue.id}`)}
                      className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border hover:bg-secondary/50 font-body text-sm text-foreground transition-colors"
                    >
                      View <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapPin className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="font-display text-xl text-foreground mb-2">No venues match your filters</p>
            <p className="font-body text-muted-foreground text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </section>

      {/* Constant bottom inquiry bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass border-t border-border/50 shadow-elevated px-4 py-3 flex items-center gap-3">
        <button onClick={() => openInquiry()} className="flex-1 gradient-gold text-accent-foreground font-body text-sm font-bold py-3 rounded-xl shadow-gold text-center">
          Get Free Quotes
        </button>
        <a href="tel:+919065645111" className="gradient-wine text-primary-foreground p-3 rounded-xl">
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Bottom spacer for mobile CTA */}
      <div className="h-20 md:hidden" />

      <Footer />

      {/* Inquiry Popup */}
      <InquiryFormPopup open={inquiryOpen} onClose={() => setInquiryOpen(false)} venueName={selectedVenue} />

      {/* Exit-Intent / Timed Popup */}
      <InquiryFormPopup open={showExitPopup && !inquiryOpen} onClose={() => setShowExitPopup(false)} />
    </div>
  );
};

export default PatnaVenues;
