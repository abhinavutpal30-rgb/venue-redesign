import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Users, Star, ArrowRight, Phone, Shield, Clock, Award, X, Sparkles, Camera, Palette, Heart, Flower2, ChevronRight, CheckCircle, BookOpen, Eye, CalendarCheck, UserCheck, Plus, Minus, SlidersHorizontal, BedDouble, Utensils, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InquiryFormPopup from "@/components/InquiryFormPopup";
import Footer from "@/components/Footer";

const patnaVenues = [
  { id: "the-grand-palace", name: "The Grand Palace", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600", price: "₹1,50,000", priceLabel: "onwards", address: "Boring Road, Patna", locality: "Boring Road", capacity: "200-800", capacityMin: 200, capacityMax: 800, rating: 4.8, reviews: 124, type: "Banquet Hall", space: "Indoor", rooms: 0, pricePerPlate: 1200, rentalCost: 150000, veg: true, featured: true },
  { id: "royal-heritage-resort", name: "Royal Heritage Resort", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600", price: "₹2,00,000", priceLabel: "onwards", address: "NH-30, Patna", locality: "NH-30", capacity: "500-1500", capacityMin: 500, capacityMax: 1500, rating: 4.9, reviews: 89, type: "Resort", space: "Both", rooms: 45, pricePerPlate: 1500, rentalCost: 200000, veg: false, featured: true },
  { id: "majestic-banquets", name: "Majestic Banquets", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600", price: "₹80,000", priceLabel: "onwards", address: "Fraser Road, Patna", locality: "Fraser Road", capacity: "100-400", capacityMin: 100, capacityMax: 400, rating: 4.6, reviews: 56, type: "Banquet Hall", space: "Indoor", rooms: 0, pricePerPlate: 800, rentalCost: 80000, veg: true, featured: false },
  { id: "the-vedic-resort", name: "The Vedic Resort", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600", price: "₹3,00,000", priceLabel: "onwards", address: "Rajgir Road, Patna", locality: "Rajgir Road", capacity: "300-1000", capacityMin: 300, capacityMax: 1000, rating: 4.7, reviews: 67, type: "Resort", space: "Outdoor", rooms: 60, pricePerPlate: 1800, rentalCost: 300000, veg: false, featured: true },
  { id: "patna-marriott", name: "Hotel Chanakya", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600", price: "₹1,80,000", priceLabel: "onwards", address: "Beer Chand Patel Marg, Patna", locality: "Beer Chand Patel Marg", capacity: "150-600", capacityMin: 150, capacityMax: 600, rating: 4.5, reviews: 98, type: "Hotel", space: "Indoor", rooms: 80, pricePerPlate: 1400, rentalCost: 180000, veg: false, featured: false },
  { id: "rajdhani-lawn", name: "Rajdhani Party Lawn", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=600", price: "₹60,000", priceLabel: "onwards", address: "Bailey Road, Patna", locality: "Bailey Road", capacity: "200-800", capacityMin: 200, capacityMax: 800, rating: 4.4, reviews: 72, type: "Lawn", space: "Outdoor", rooms: 0, pricePerPlate: 600, rentalCost: 60000, veg: true, featured: false },
  { id: "lemon-tree-patna", name: "Lemon Tree Hotel", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600", price: "₹1,20,000", priceLabel: "onwards", address: "Exhibition Road, Patna", locality: "Exhibition Road", capacity: "100-350", capacityMin: 100, capacityMax: 350, rating: 4.6, reviews: 83, type: "Hotel", space: "Indoor", rooms: 55, pricePerPlate: 1100, rentalCost: 120000, veg: false, featured: false },
  { id: "shagun-garden", name: "Shagun Garden", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600", price: "₹45,000", priceLabel: "onwards", address: "Kankarbagh, Patna", locality: "Kankarbagh", capacity: "200-600", capacityMin: 200, capacityMax: 600, rating: 4.3, reviews: 45, type: "Lawn", space: "Outdoor", rooms: 0, pricePerPlate: 500, rentalCost: 45000, veg: true, featured: false },
];

const venueCategories = [
  { label: "Banquet Halls", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300", type: "Banquet Hall" },
  { label: "Marriage Halls", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=300", type: "Banquet Hall" },
  { label: "Hotels", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300", type: "Hotel" },
  { label: "Resorts", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=300", type: "Resort" },
  { label: "Party Lawns", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=300", type: "Lawn" },
];

const venueTypes = ["All", "Banquet Hall", "Hotel", "Resort", "Lawn"];
const localities = ["All", "Boring Road", "NH-30", "Fraser Road", "Rajgir Road", "Beer Chand Patel Marg", "Bailey Road", "Exhibition Road", "Kankarbagh"];
const guestRanges = [
  { label: "Any Guests", value: "all" },
  { label: "Up to 200", value: "200" },
  { label: "200 - 500", value: "500" },
  { label: "500 - 1000", value: "1000" },
  { label: "1000+", value: "1000+" },
];
const roomOptions = [
  { label: "Any Rooms", value: "all" },
  { label: "No Rooms", value: "0" },
  { label: "1 - 50", value: "50" },
  { label: "50+", value: "50+" },
];
const plateRanges = [
  { label: "Any Price/Plate", value: "all" },
  { label: "Under ₹800", value: "under800" },
  { label: "₹800 - ₹1200", value: "800to1200" },
  { label: "₹1200+", value: "1200+" },
];
const rentalRanges = [
  { label: "Any Rental", value: "all" },
  { label: "Under ₹1L", value: "under1" },
  { label: "₹1L - ₹2L", value: "1to2" },
  { label: "₹2L+", value: "above2" },
];
const spaceOptions = ["All", "Indoor", "Outdoor", "Both"];
const ratingOptions = [
  { label: "Any Rating", value: "all" },
  { label: "4.5+", value: "4.5" },
  { label: "4.0+", value: "4.0" },
];

const blogs = [
  { title: "Top 10 Wedding Trends in Patna 2025", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400", date: "Mar 15, 2025" },
  { title: "How to Choose the Perfect Wedding Venue", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400", date: "Mar 10, 2025" },
  { title: "Budget Wedding Planning Tips", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400", date: "Mar 5, 2025" },
];

const realWeddings = [
  { names: "Priya & Rahul", venue: "The Grand Palace", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400" },
  { names: "Anjali & Vikram", venue: "Royal Heritage Resort", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400" },
  { names: "Sneha & Amit", venue: "The Vedic Resort", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=400" },
];

const vendors = [
  { label: "Photographers", icon: Camera, count: 45 },
  { label: "Makeup Artists", icon: Palette, count: 32 },
  { label: "Mehendi Artists", icon: Flower2, count: 28 },
  { label: "Decorators", icon: Sparkles, count: 38 },
];

const howItWorks = [
  { step: 1, title: "Discover & Shortlist Venues", desc: "Input your requirements & see our recommendations & prices.", icon: Eye },
  { step: 2, title: "Guided Visits", desc: "Visit venues on your own or with our venue expert.", icon: CalendarCheck },
  { step: 3, title: "Book Venue", desc: "Get final quotes (upto 30% off) and book your venue.", icon: BookOpen },
  { step: 4, title: "Book Vendors", desc: "Meet our trusted vendors and book them at your ease.", icon: UserCheck },
];

const whyBookReasons = [
  { title: "Delivery of Commitments", desc: "Our team ensures that all the services are delivered as committed to ensure a hassle-free experience for you." },
  { title: "One-Stop Shop", desc: "No need to run around for your wedding services - Book our trusted vendors under one roof." },
  { title: "Guaranteed Best Prices", desc: "We guarantee our prices for venue and non-venue services. Upto 30% off." },
];

const faqs = [
  { q: "What is Venue by Choice?", a: "Venue by Choice is a wedding venue discovery and booking platform. We help couples and families explore, compare, and book banquet halls, lawns, and resorts across Kolkata and Patna — easily, quickly, and all in one place." },
  { q: "Is there any cost to use Venue by Choice?", a: "No, it's completely free for users. You can browse, filter, check venue availability, request callbacks, and compare venues — all without paying anything to us." },
  { q: "Which locations does Venue by Choice cover?", a: "We currently focus on Patna, Kolkata, and surrounding regions. We are adding more cities soon." },
  { q: "Can I find venues by my guest count and budget?", a: "Yes! Just enter your estimated guest count and budget in the filters. Our listings will adjust to show venues that can handle your event size and fall within your price range." },
  { q: "Can I get help after I book the venue?", a: "Yes! Even after you book, our support team is here to help with follow-ups, changes, or clarifying any doubts. We're with you till your big day." },
  { q: "Why should I use Venue by Choice instead of calling venues directly?", a: "With Venue by Choice, you get verified information, photos, FAQs, filters, and quick availability updates all in one place." },
];

const PatnaVenues = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [locality, setLocality] = useState("All");
  const [guests, setGuests] = useState("all");
  const [roomFilter, setRoomFilter] = useState("all");
  const [plateFilter, setPlateFilter] = useState("all");
  const [rentalFilter, setRentalFilter] = useState("all");
  const [spaceFilter, setSpaceFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState<string | undefined>(undefined);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitShown, setExitShown] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShown) {
        setShowExitPopup(true);
        setExitShown(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    const timer = setTimeout(() => {
      if (!exitShown) { setShowExitPopup(true); setExitShown(true); }
    }, 15000);
    return () => { document.removeEventListener("mouseleave", handleMouseLeave); clearTimeout(timer); };
  }, [exitShown]);

  const filtered = patnaVenues.filter((v) => {
    if (type !== "All" && v.type !== type) return false;
    if (locality !== "All" && v.locality !== locality) return false;
    if (spaceFilter !== "All" && v.space !== spaceFilter) return false;
    if (search && !v.name.toLowerCase().includes(search.toLowerCase()) && !v.address.toLowerCase().includes(search.toLowerCase())) return false;

    // Guests
    if (guests === "200") { if (v.capacityMax > 200) return false; }
    else if (guests === "500") { if (v.capacityMin > 500 || v.capacityMax < 200) return false; }
    else if (guests === "1000") { if (v.capacityMin > 1000 || v.capacityMax < 500) return false; }
    else if (guests === "1000+") { if (v.capacityMax < 1000) return false; }

    // Rooms
    if (roomFilter === "0") { if (v.rooms !== 0) return false; }
    else if (roomFilter === "50") { if (v.rooms === 0 || v.rooms > 50) return false; }
    else if (roomFilter === "50+") { if (v.rooms < 50) return false; }

    // Price per plate
    if (plateFilter === "under800") { if (v.pricePerPlate >= 800) return false; }
    else if (plateFilter === "800to1200") { if (v.pricePerPlate < 800 || v.pricePerPlate > 1200) return false; }
    else if (plateFilter === "1200+") { if (v.pricePerPlate < 1200) return false; }

    // Rental cost
    if (rentalFilter === "under1") { if (v.rentalCost >= 100000) return false; }
    else if (rentalFilter === "1to2") { if (v.rentalCost < 100000 || v.rentalCost > 200000) return false; }
    else if (rentalFilter === "above2") { if (v.rentalCost < 200000) return false; }

    // Rating
    if (ratingFilter === "4.5") { if (v.rating < 4.5) return false; }
    else if (ratingFilter === "4.0") { if (v.rating < 4.0) return false; }

    return true;
  });

  const activeFilterCount = [type !== "All", locality !== "All", guests !== "all", roomFilter !== "all", plateFilter !== "all", rentalFilter !== "all", spaceFilter !== "All", ratingFilter !== "all", !!search].filter(Boolean).length;

  const openInquiry = (venueName?: string) => {
    setSelectedVenue(venueName);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Hero */}
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
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-primary-foreground/70">
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

      {/* Browse by Venue Categories */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Browse by Venue Categories</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {venueCategories.map((cat) => (
            <motion.button
              key={cat.label}
              whileHover={{ y: -4 }}
              onClick={() => setType(cat.type)}
              className={`shrink-0 w-36 md:w-44 rounded-2xl overflow-hidden border transition-all duration-300 ${type === cat.type ? "border-accent shadow-gold" : "border-border/50 hover:border-accent/30"}`}
            >
              <div className="h-24 md:h-28 overflow-hidden">
                <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" />
              </div>
              <div className="p-3 bg-card">
                <p className="font-body text-sm font-semibold text-foreground text-center">{cat.label}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-[52px] z-40 bg-card border-y border-border/50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Row 1: Search + primary filters */}
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full md:w-auto relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by venue name or area..." className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
              <select value={locality} onChange={(e) => setLocality(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 min-w-[120px]">
                {localities.map((l) => (<option key={l} value={l}>{l === "All" ? "All Localities" : l}</option>))}
              </select>
              <select value={type} onChange={(e) => setType(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 min-w-[120px]">
                {venueTypes.map((t) => (<option key={t} value={t}>{t === "All" ? "Venue Type" : t}</option>))}
              </select>
              <select value={guests} onChange={(e) => setGuests(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 min-w-[120px]">
                {guestRanges.map((g) => (<option key={g.value} value={g.value}>{g.label}</option>))}
              </select>
              <button onClick={() => setShowMoreFilters(!showMoreFilters)} className={`flex items-center gap-1.5 px-3 py-2.5 rounded-xl border font-body text-sm transition-all whitespace-nowrap ${showMoreFilters || activeFilterCount > 3 ? "border-accent bg-accent/10 text-accent-foreground" : "border-border/50 bg-secondary/50 text-foreground"}`}>
                <SlidersHorizontal className="w-4 h-4" />
                More Filters
                {activeFilterCount > 3 && <span className="w-5 h-5 rounded-full gradient-gold text-accent-foreground text-[10px] font-bold flex items-center justify-center">{activeFilterCount - 3}</span>}
              </button>
            </div>
            <button onClick={() => openInquiry()} className="hidden md:flex gradient-wine text-primary-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-all items-center gap-2 whitespace-nowrap">
              <Sparkles className="w-4 h-4" /> Get Expert Help
            </button>
          </div>

          {/* Row 2: Extended filters (collapsible) */}
          <AnimatePresence>
            {showMoreFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 pt-3 mt-3 border-t border-border/30">
                  <select value={roomFilter} onChange={(e) => setRoomFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                    {roomOptions.map((r) => (<option key={r.value} value={r.value}>{r.label}</option>))}
                  </select>
                  <select value={plateFilter} onChange={(e) => setPlateFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                    {plateRanges.map((p) => (<option key={p.value} value={p.value}>{p.label}</option>))}
                  </select>
                  <select value={rentalFilter} onChange={(e) => setRentalFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                    {rentalRanges.map((r) => (<option key={r.value} value={r.value}>{r.label}</option>))}
                  </select>
                  <select value={spaceFilter} onChange={(e) => setSpaceFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                    {spaceOptions.map((s) => (<option key={s} value={s}>{s === "All" ? "All Spaces" : s}</option>))}
                  </select>
                  <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30">
                    {ratingOptions.map((r) => (<option key={r.value} value={r.value}>{r.label}</option>))}
                  </select>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Popular Wedding Venues - Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Popular Wedding Venues</h2>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span> venues in Patna
            </p>
          </div>
          {activeFilterCount > 0 && (
            <button onClick={() => { setType("All"); setLocality("All"); setGuests("all"); setRoomFilter("all"); setPlateFilter("all"); setRentalFilter("all"); setSpaceFilter("All"); setRatingFilter("all"); setSearch(""); }} className="flex items-center gap-1 text-sm font-body text-wine hover:text-wine-light transition-colors">
              <X className="w-3.5 h-3.5" /> Clear all ({activeFilterCount})
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((venue, i) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-300 border border-border/50"
              >
                <div className="relative h-40 md:h-48 overflow-hidden cursor-pointer" onClick={() => navigate(`/venue/${venue.id}`)}>
                  <img src={venue.image} alt={venue.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {venue.featured && (
                    <span className="absolute top-2 left-2 gradient-gold text-accent-foreground font-body text-[9px] md:text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Featured</span>
                  )}
                  <div className="absolute top-2 right-2 glass rounded-lg px-1.5 py-0.5 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold text-gold" />
                    <span className="text-[10px] font-bold font-body text-foreground">{venue.rating}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 glass rounded-lg px-2 py-1">
                    <span className="text-xs font-bold font-body text-foreground">{venue.price}</span>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="font-display text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors cursor-pointer line-clamp-1" onClick={() => navigate(`/venue/${venue.id}`)}>
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1.5">
                    <MapPin className="w-3 h-3 text-accent shrink-0" />
                    <span className="font-body text-xs text-muted-foreground line-clamp-1">{venue.address}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center gap-1 bg-secondary/60 rounded-md px-1.5 py-0.5 font-body text-[10px] text-muted-foreground">
                      <Users className="w-2.5 h-2.5" /> {venue.capacity}
                    </span>
                    <span className="bg-secondary/60 rounded-md px-1.5 py-0.5 font-body text-[10px] text-muted-foreground">{venue.type}</span>
                  </div>
                  <button
                    onClick={() => openInquiry(venue.name)}
                    className="w-full mt-3 gradient-gold text-accent-foreground font-body text-xs font-semibold py-2 rounded-lg hover:opacity-90 transition-all shadow-gold text-center"
                  >
                    Send Enquiry
                  </button>
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

        <div className="text-center mt-8">
          <button onClick={() => navigate("/venues")} className="inline-flex items-center gap-2 font-body text-sm font-semibold text-wine hover:text-wine-light transition-colors">
            View all Venues <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Latest Blogs on Weddings */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Latest Blogs On Weddings</h2>
          <button className="flex items-center gap-1 font-body text-sm font-semibold text-wine hover:text-wine-light transition-colors">See all <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {blogs.map((blog, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-elevated transition-all cursor-pointer">
              <div className="h-44 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <p className="font-body text-xs text-muted-foreground mb-2">{blog.date}</p>
                <h3 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Real Weddings */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Real Weddings</h2>
          <button className="flex items-center gap-1 font-body text-sm font-semibold text-wine hover:text-wine-light transition-colors">See all <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {realWeddings.map((w, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer">
              <img src={w.image} alt={w.names} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <Heart className="w-4 h-4 text-gold fill-gold" />
                  <p className="font-display text-base font-bold text-primary-foreground">{w.names}</p>
                </div>
                <p className="font-body text-xs text-primary-foreground/70">{w.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Explore Vendors */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Explore Vendors</h2>
          <button className="flex items-center gap-1 font-body text-sm font-semibold text-wine hover:text-wine-light transition-colors">See all <ChevronRight className="w-4 h-4" /></button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {vendors.map(({ label, icon: Icon, count }, i) => (
            <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -4 }} className="bg-card rounded-2xl border border-border/50 p-6 text-center hover:shadow-elevated hover:border-accent/30 transition-all cursor-pointer">
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">{label}</h3>
              <p className="font-body text-xs text-muted-foreground">{count}+ in Patna</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 gradient-wine-deep relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 80% 30%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-primary-foreground text-center mb-12">
            How it <span className="text-gradient-gold">Works</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howItWorks.map(({ step, title, desc, icon: Icon }, i) => (
              <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="text-center relative">
                <div className="w-16 h-16 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <Icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="absolute top-8 left-[60%] hidden md:block w-[calc(100%-2rem)] h-px bg-gold-light/30" style={{ display: i === 3 ? "none" : undefined }} />
                <h3 className="font-display text-sm font-bold text-primary-foreground mb-2">{title}</h3>
                <p className="font-body text-xs text-primary-foreground/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Why book with <span className="text-gradient-gold">Venue by Choice</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyBookReasons.map(({ title, desc }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl border border-border/50 p-8 text-center hover:shadow-elevated hover:border-accent/30 transition-all">
              <div className="w-12 h-12 mx-auto rounded-full gradient-gold flex items-center justify-center mb-4 shadow-gold">
                <CheckCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-3">{title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wedding Photos / Your Wedding Website */}
      <section className="max-w-7xl mx-auto px-4 py-12 border-t border-border/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border/50 p-8 flex flex-col justify-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Wedding Photos</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Manage your guests and keep them updated real time. Don't miss out on a single moment captured by everyone & cherish them forever!
            </p>
            <button onClick={() => openInquiry()} className="self-start gradient-gold text-accent-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-gold">
              Learn More
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl border border-border/50 p-8 flex flex-col justify-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-3">Your Wedding Website</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
              Create a buzz of your wedding much before the wedding day. Let the guests get to know each other even before they come to the wedding.
            </p>
            <button onClick={() => openInquiry()} className="self-start gradient-gold text-accent-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-gold">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Got Questions?</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`bg-card rounded-2xl border overflow-hidden transition-all duration-300 ${faqOpen === i ? "border-accent/30 shadow-gold" : "border-border/50"}`}>
              <button onClick={() => setFaqOpen(faqOpen === i ? null : i)} className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
                <span className="font-display font-semibold text-sm text-foreground">{faq.q}</span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${faqOpen === i ? "gradient-gold" : "bg-secondary"}`}>
                  {faqOpen === i ? <Minus className="w-3.5 h-3.5 text-accent-foreground" /> : <Plus className="w-3.5 h-3.5 text-muted-foreground" />}
                </div>
              </button>
              <AnimatePresence>
                {faqOpen === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mobile bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden glass border-t border-border/50 shadow-elevated px-4 py-3 flex items-center gap-3">
        <button onClick={() => openInquiry()} className="flex-1 gradient-gold text-accent-foreground font-body text-sm font-bold py-3 rounded-xl shadow-gold text-center">
          Get Free Quotes
        </button>
        <a href="tel:+919065645111" className="gradient-wine text-primary-foreground p-3 rounded-xl">
          <Phone className="w-5 h-5" />
        </a>
      </div>
      <div className="h-20 md:hidden" />

      <Footer />

      <InquiryFormPopup open={inquiryOpen} onClose={() => setInquiryOpen(false)} venueName={selectedVenue} />
      <InquiryFormPopup open={showExitPopup && !inquiryOpen} onClose={() => setShowExitPopup(false)} />
    </div>
  );
};

export default PatnaVenues;
