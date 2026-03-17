import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin, Users, Star, Phone, Mail, Calendar, Check, ChevronLeft,
  ChevronRight, Heart, Clock, Utensils, Car, Music, Wifi, Zap,
  Shield, Camera, Sparkles, ChevronDown, MessageSquare, Eye,
  Ban, AlertTriangle, HelpCircle, Navigation
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const venueImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200",
  "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=1200",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200",
];

const venueTags = ["Banquet Hall", "Wedding Lawn", "Party Hall", "Convention Hall"];

const amenities = [
  { icon: Car, label: "Valet Parking" },
  { icon: Music, label: "DJ & Sound System" },
  { icon: Utensils, label: "Catering Available" },
  { icon: Sparkles, label: "Bridal Suite" },
  { icon: Zap, label: "Power Backup" },
  { icon: Wifi, label: "Wi-Fi" },
  { icon: Camera, label: "Photography Area" },
  { icon: Shield, label: "In-house Decorator" },
  { icon: Users, label: "Changing Rooms" },
  { icon: Utensils, label: "Multiple Cuisines" },
  { icon: Music, label: "Stage Setup" },
  { icon: Clock, label: "Air Conditioning" },
];

const partyAreas = [
  { name: "Grand Ballroom", type: "Indoor", seating: 800, floating: 1200, image: venueImages[0] },
  { name: "Garden Lawn", type: "Outdoor", seating: 500, floating: 800, image: venueImages[3] },
  { name: "Terrace Hall", type: "Indoor", seating: 200, floating: 350, image: venueImages[2] },
];

const foodPackages = [
  { name: "Vegetarian", price: "₹800", perPlate: true, items: ["Welcome Drinks", "4 Starters", "6 Main Course", "3 Desserts", "Live Chaat Counter"] },
  { name: "Non-Vegetarian", price: "₹1,000", perPlate: true, items: ["Welcome Drinks", "4 Starters (2 Non-Veg)", "6 Main Course (3 Non-Veg)", "3 Desserts", "Live Chaat Counter"] },
  { name: "Premium Buffet", price: "₹1,400", perPlate: true, items: ["Mocktails & Drinks", "6 Starters", "8 Main Course", "4 Desserts", "Live Counters (3)", "Ice Cream Station"] },
];

const reviews = [
  { name: "Rahul & Priya", date: "15 Jan 2026", rating: 5, text: "Absolutely stunning venue! The Grand Ballroom took our breath away. The staff was incredibly attentive and made our wedding day truly magical. Highly recommended!" },
  { name: "Amit Kumar", date: "28 Dec 2025", rating: 5, text: "Beautiful venue with lot of parking & well maintained. The decoration team did an amazing job. Our guests were thoroughly impressed." },
  { name: "Sneha Sharma", date: "10 Nov 2025", rating: 4, text: "Lovely hall! Pretty spacious and clean. The catering was excellent with great variety. Only wish they had more outdoor lighting options." },
  { name: "Vikash Gupta", date: "20 Sep 2025", rating: 5, text: "We had our reception here and it was a fantastic experience. The event coordinator handled everything seamlessly." },
  { name: "Anjali Devi", date: "05 Aug 2025", rating: 4, text: "Decent experience overall. Good food and nice ambiance. The AC could be a bit better in the lawn area during summer." },
];

const tabs = ["Overview", "Areas & Capacity", "Food Packages", "Reviews"];

const VenueDetail = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [liked, setLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("Overview");
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [showFullAbout, setShowFullAbout] = useState(false);

  const nextImage = () => setCurrentImage((p) => (p + 1) % venueImages.length);
  const prevImage = () => setCurrentImage((p) => (p - 1 + venueImages.length) % venueImages.length);

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Image Gallery */}
      <section className="pt-20">
        <div className="relative">
          {/* Main + Thumbnails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-1 h-[40vh] md:h-[55vh]">
            {/* Main Image */}
            <div className="relative md:col-span-2 md:row-span-2 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={venueImages[currentImage]}
                  alt="Venue gallery"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
              <div className="absolute bottom-3 left-3 glass px-3 py-1.5 rounded-lg text-xs font-body font-semibold text-foreground">
                {currentImage + 1}/{venueImages.length} Photos
              </div>
              <button onClick={() => setLiked(!liked)} className="absolute top-3 right-3 w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                <Heart className={`w-5 h-5 ${liked ? "fill-wine text-wine" : "text-foreground"}`} />
              </button>
            </div>

            {/* Side thumbnails - desktop only */}
            {venueImages.slice(1, 5).map((img, i) => (
              <div
                key={i}
                className="hidden md:block relative overflow-hidden cursor-pointer group"
                onClick={() => setCurrentImage(i + 1)}
              >
                <img src={img} alt={`View ${i + 2}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {i === 3 && venueImages.length > 5 && (
                  <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
                    <span className="text-primary-foreground font-body font-bold text-lg">+{venueImages.length - 5} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Header */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-6 pb-2">
        <button onClick={() => navigate("/venues")} className="inline-flex items-center gap-1 text-sm font-body text-muted-foreground hover:text-foreground mb-3 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to Venues
        </button>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-4xl font-display font-bold text-foreground mb-2">
              The Grand Palace, Patna
            </motion.h1>
            <p className="flex items-center gap-1.5 text-sm font-body text-muted-foreground mb-3">
              <MapPin className="w-4 h-4 text-accent" /> Boring Road, Patna, Bihar 800001
              <a href="#map" className="text-accent hover:underline ml-1">View on map</a>
            </p>
            <div className="flex flex-wrap gap-2">
              {venueTags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-body font-medium bg-secondary text-muted-foreground rounded-full border border-border/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-foreground/90 text-primary-foreground px-3 py-2 rounded-xl">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-display font-bold text-sm">{avgRating}/5</span>
              <span className="text-primary-foreground/60 text-xs font-body">| {reviews.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 mt-4">
        <div className="flex gap-0 border-b border-border overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-body font-semibold whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* About */}
            {(activeTab === "Overview") && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">About This Venue</h2>
                <div className="font-body text-muted-foreground leading-relaxed text-sm">
                  <p>
                    The Grand Palace is a premier wedding destination in Patna, offering elegant banquet halls with a blend of modern luxury and traditional charm. With spacious lawns, grand ballrooms, and dedicated event planners, it's the ideal choice for weddings, receptions, and celebrations of all sizes.
                  </p>
                  {showFullAbout && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-3 space-y-3">
                      <p>The venue features state-of-the-art sound systems, customizable lighting, and climate-controlled interiors. Whether you envision a grand wedding with 1000+ guests or an intimate celebration, our versatile spaces can be tailored to your needs.</p>
                      <p>Our experienced in-house team of decorators and event managers work closely with you to bring your dream wedding to life. From traditional Bihari themes to contemporary designs, we handle every detail with precision and care.</p>
                    </motion.div>
                  )}
                  <button onClick={() => setShowFullAbout(!showFullAbout)} className="text-accent font-semibold mt-2 inline-flex items-center gap-1 hover:underline">
                    {showFullAbout ? "Show less" : "Read more"} <ChevronDown className={`w-4 h-4 transition-transform ${showFullAbout ? "rotate-180" : ""}`} />
                  </button>
                </div>

                {/* Contact */}
                <div className="mt-6 flex items-center gap-4 p-4 bg-secondary/50 rounded-xl border border-border/30">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-body text-xs text-muted-foreground">Call The Grand Palace</p>
                    <a href="tel:+919065645111" className="font-body font-bold text-foreground hover:text-accent transition-colors">+91-9065645111</a>
                  </div>
                  <a href="tel:+919065645111" className="ml-auto gradient-gold text-accent-foreground px-4 py-2 rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity">
                    Call Now
                  </a>
                </div>

                {/* High Demand Banner */}
                <div className="mt-4 flex items-center gap-2 px-4 py-3 bg-accent/10 border border-accent/20 rounded-xl">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="font-body text-sm font-semibold text-accent">Hurry UP! This Venue Is In High Demand</span>
                </div>

                {/* Amenities */}
                <div className="mt-8">
                  <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-4">Amenities & Facilities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {amenities.map((a, i) => (
                      <motion.div
                        key={a.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-center gap-2.5 bg-card rounded-xl px-4 py-3 border border-border/30"
                      >
                        <a.icon className="w-4 h-4 text-accent shrink-0" />
                        <span className="font-body text-sm text-foreground">{a.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Areas & Capacity */}
            {(activeTab === "Areas & Capacity" || activeTab === "Overview") && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">Venue Specifications</h2>
                <p className="font-body text-sm text-muted-foreground mb-5">To check availability of a party area, please contact the venue</p>

                <div className="space-y-4">
                  {partyAreas.map((area) => (
                    <div key={area.name} className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-2xl border border-border/30 hover:shadow-elevated transition-shadow">
                      <div className="sm:w-40 h-28 rounded-xl overflow-hidden shrink-0">
                        <img src={area.image} alt={area.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display font-bold text-foreground">{area.name}</h3>
                          <span className="text-xs font-body px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{area.type}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-secondary/50 rounded-lg px-3 py-2">
                            <p className="text-xs font-body text-muted-foreground">Seating</p>
                            <p className="font-display font-bold text-foreground">{area.seating}</p>
                          </div>
                          <div className="bg-secondary/50 rounded-lg px-3 py-2">
                            <p className="text-xs font-body text-muted-foreground">Max Capacity</p>
                            <p className="font-display font-bold text-foreground">{area.floating}</p>
                          </div>
                        </div>
                      </div>
                      <button className="self-center px-4 py-2 border border-accent text-accent rounded-lg text-sm font-body font-semibold hover:bg-accent/10 transition-colors">
                        <Eye className="w-4 h-4 inline mr-1" /> View
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Food Packages */}
            {(activeTab === "Food Packages" || activeTab === "Overview") && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-6">Food Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {foodPackages.map((pkg, i) => (
                    <motion.div
                      key={pkg.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`rounded-2xl p-5 border transition-all hover:shadow-elevated ${
                        i === 2 ? "gradient-wine-deep text-primary-foreground border-transparent shadow-wine" : "bg-card border-border/50"
                      }`}
                    >
                      <h3 className={`font-display text-lg font-bold mb-1 ${i === 2 ? "text-gold-light" : "text-foreground"}`}>{pkg.name}</h3>
                      <p className={`text-2xl font-display font-bold mb-0.5 ${i === 2 ? "text-primary-foreground" : "text-foreground"}`}>{pkg.price}</p>
                      <p className={`text-xs font-body mb-4 ${i === 2 ? "text-primary-foreground/60" : "text-muted-foreground"}`}>per plate</p>
                      <ul className="space-y-2">
                        {pkg.items.map((item) => (
                          <li key={item} className={`flex items-center gap-2 text-sm font-body ${i === 2 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                            <Check className={`w-3.5 h-3.5 shrink-0 ${i === 2 ? "text-gold-light" : "text-accent"}`} /> {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Reviews */}
            {(activeTab === "Reviews" || activeTab === "Overview") && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-foreground">Ratings & Reviews</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1 bg-foreground/90 text-primary-foreground px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 fill-accent text-accent" />
                        <span className="font-display font-bold text-sm">{avgRating}/5</span>
                      </div>
                      <span className="text-sm font-body text-muted-foreground">{reviews.length} Reviews</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {(showAllReviews ? reviews : reviews.slice(0, 3)).map((review, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-4 bg-card rounded-xl border border-border/30"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full gradient-wine flex items-center justify-center">
                            <span className="text-primary-foreground font-display font-bold text-sm">{review.name[0]}</span>
                          </div>
                          <div>
                            <p className="font-body font-bold text-sm text-foreground">{review.name}</p>
                            <p className="font-body text-xs text-muted-foreground">Event Date: {review.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className={`w-3.5 h-3.5 ${j < review.rating ? "fill-accent text-accent" : "text-border"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                    </motion.div>
                  ))}
                </div>

                {reviews.length > 3 && (
                  <button
                    onClick={() => setShowAllReviews(!showAllReviews)}
                    className="mt-4 w-full py-3 border border-accent text-accent rounded-xl text-sm font-body font-semibold hover:bg-accent/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    {showAllReviews ? "Show Less" : `See All ${reviews.length} Reviews`}
                  </button>
                )}
              </motion.div>
            )}
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl shadow-elevated border border-border/30 p-5"
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-accent" />
                    <span className="font-body text-sm text-muted-foreground">Vegetarian</span>
                  </div>
                </div>
                <div className="flex items-baseline gap-1 mb-5">
                  <p className="font-display text-3xl font-bold text-foreground">₹800</p>
                  <span className="font-body text-sm text-muted-foreground">/Plate</span>
                </div>

                <div className="space-y-3 mb-5">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="date" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="number" placeholder="Number of Guests" className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>

                <button className="w-full gradient-gold text-accent-foreground font-body font-semibold py-3.5 rounded-xl shadow-gold hover:opacity-90 hover:shadow-lg transition-all mb-3">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  See Prices
                </button>

                <button className="w-full py-3 rounded-xl border-2 border-accent text-accent font-body font-semibold hover:bg-accent/10 transition-colors">
                  <Eye className="w-4 h-4 inline mr-2" />
                  Venue Tour
                </button>

                <div className="mt-3 flex gap-2">
                  <a href="tel:+919065645111" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/50 text-sm font-body text-foreground hover:bg-secondary/50 transition-colors">
                    <Phone className="w-4 h-4 text-accent" /> Call
                  </a>
                  <a href="mailto:info@venuebychoice.com" className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/50 text-sm font-body text-foreground hover:bg-secondary/50 transition-colors">
                    <Mail className="w-4 h-4 text-accent" /> Email
                  </a>
                </div>
              </motion.div>

              {/* Why Book With Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="gradient-wine-deep rounded-2xl p-5 text-primary-foreground"
              >
                <h3 className="font-display font-bold text-sm mb-3">Book with Venue By Choice for</h3>
                <div className="space-y-2.5">
                  {[
                    { icon: Shield, text: "Great Event Guaranteed" },
                    { icon: Sparkles, text: "One Stop Shop" },
                    { icon: Check, text: "100% Transparency" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <item.icon className="w-4 h-4 text-gold-light shrink-0" />
                      <span className="font-body text-sm text-primary-foreground/90">{item.text}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <div id="map" className="rounded-2xl overflow-hidden border border-border/30 h-44 bg-muted flex items-center justify-center">
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
