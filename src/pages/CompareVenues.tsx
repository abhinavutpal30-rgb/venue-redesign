import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Star, MapPin, Users, Check, Minus, ChevronDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allVenues = [
  { id: "the-grand-palace", name: "The Grand Palace", image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400", city: "Patna", address: "Boring Road, Patna", type: "Banquet Hall", capacity: "200–800", price: "₹1,50,000", pricePerPlate: "₹800", rating: 4.8, reviews: 124, parking: true, ac: true, catering: "In-house + Outside", decoration: true, dj: true, alcohol: true, rooms: 4, lawn: true, indoor: true },
  { id: "royal-heritage-resort", name: "Royal Heritage Resort", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400", city: "Patna", address: "NH-30, Patna", type: "Resort", capacity: "500–1500", price: "₹2,00,000", pricePerPlate: "₹1,000", rating: 4.9, reviews: 89, parking: true, ac: true, catering: "In-house Only", decoration: true, dj: true, alcohol: true, rooms: 12, lawn: true, indoor: true },
  { id: "majestic-banquets", name: "Majestic Banquets", image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400", city: "Patna", address: "Fraser Road, Patna", type: "Banquet Hall", capacity: "100–400", price: "₹80,000", pricePerPlate: "₹600", rating: 4.6, reviews: 56, parking: true, ac: true, catering: "In-house + Outside", decoration: false, dj: true, alcohol: false, rooms: 0, lawn: false, indoor: true },
  { id: "the-vedic-resort", name: "The Vedic Resort", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400", city: "Patna", address: "Rajgir Road, Patna", type: "Resort", capacity: "300–1000", price: "₹3,00,000", pricePerPlate: "₹1,200", rating: 4.7, reviews: 67, parking: true, ac: true, catering: "In-house Only", decoration: true, dj: true, alcohol: true, rooms: 20, lawn: true, indoor: true },
  { id: "itc-sonar", name: "ITC Sonar", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400", city: "Kolkata", address: "JBS Haldane Ave, Kolkata", type: "Hotel", capacity: "200–1200", price: "₹5,00,000", pricePerPlate: "₹1,800", rating: 4.9, reviews: 210, parking: true, ac: true, catering: "In-house Only", decoration: true, dj: true, alcohol: true, rooms: 50, lawn: true, indoor: true },
  { id: "the-oberoi-grand", name: "The Oberoi Grand", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400", city: "Kolkata", address: "Chowringhee, Kolkata", type: "Hotel", capacity: "150–800", price: "₹4,50,000", pricePerPlate: "₹1,600", rating: 4.8, reviews: 178, parking: true, ac: true, catering: "In-house Only", decoration: true, dj: true, alcohol: true, rooms: 40, lawn: false, indoor: true },
  { id: "eden-gardens-banquet", name: "Eden Gardens Banquet", image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=400", city: "Kolkata", address: "Park Street, Kolkata", type: "Banquet Hall", capacity: "200–600", price: "₹1,20,000", pricePerPlate: "₹700", rating: 4.5, reviews: 92, parking: true, ac: true, catering: "In-house + Outside", decoration: true, dj: true, alcohol: true, rooms: 2, lawn: true, indoor: true },
  { id: "raichak-on-ganges", name: "Raichak on Ganges", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400", city: "Kolkata", address: "Raichak, South 24 Parganas", type: "Resort", capacity: "300–1000", price: "₹2,50,000", pricePerPlate: "₹1,100", rating: 4.7, reviews: 143, parking: true, ac: true, catering: "In-house Only", decoration: true, dj: true, alcohol: true, rooms: 25, lawn: true, indoor: true },
];

type Venue = typeof allVenues[0];

const BoolIcon = ({ value }: { value: boolean }) => (
  value
    ? <Check className="w-4 h-4 text-green-600" />
    : <Minus className="w-4 h-4 text-muted-foreground/40" />
);

const CompareVenues = () => {
  const [selected, setSelected] = useState<Venue[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const addVenue = (venue: Venue, slot: number) => {
    const updated = [...selected];
    updated[slot] = venue;
    setSelected(updated);
    setDropdownOpen(null);
  };

  const removeVenue = (slot: number) => {
    const updated = [...selected];
    updated.splice(slot, 1);
    setSelected(updated);
  };

  const availableVenues = allVenues.filter((v) => !selected.find((s) => s.id === v.id));

  const comparisonRows: { label: string; key: string; render: (v: Venue) => React.ReactNode }[] = [
    { label: "Type", key: "type", render: (v) => <span className="font-body text-sm text-foreground">{v.type}</span> },
    { label: "Location", key: "address", render: (v) => <span className="font-body text-sm text-muted-foreground flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-accent" />{v.address}</span> },
    { label: "Capacity", key: "capacity", render: (v) => <span className="font-body text-sm text-foreground">{v.capacity} guests</span> },
    { label: "Starting Price", key: "price", render: (v) => <span className="font-display font-bold text-foreground">{v.price}</span> },
    { label: "Price Per Plate", key: "pricePerPlate", render: (v) => <span className="font-body text-sm text-foreground">{v.pricePerPlate}</span> },
    { label: "Rating", key: "rating", render: (v) => <span className="flex items-center gap-1"><Star className="w-4 h-4 fill-accent text-accent" /><span className="font-display font-bold text-sm">{v.rating}</span><span className="text-xs text-muted-foreground">({v.reviews})</span></span> },
    { label: "Parking", key: "parking", render: (v) => <BoolIcon value={v.parking} /> },
    { label: "AC", key: "ac", render: (v) => <BoolIcon value={v.ac} /> },
    { label: "Catering", key: "catering", render: (v) => <span className="font-body text-xs text-muted-foreground">{v.catering}</span> },
    { label: "Decoration", key: "decoration", render: (v) => <BoolIcon value={v.decoration} /> },
    { label: "DJ Allowed", key: "dj", render: (v) => <BoolIcon value={v.dj} /> },
    { label: "Alcohol Allowed", key: "alcohol", render: (v) => <BoolIcon value={v.alcohol} /> },
    { label: "Guest Rooms", key: "rooms", render: (v) => <span className="font-body text-sm text-foreground">{v.rooms || "—"}</span> },
    { label: "Lawn / Outdoor", key: "lawn", render: (v) => <BoolIcon value={v.lawn} /> },
    { label: "Indoor Hall", key: "indoor", render: (v) => <BoolIcon value={v.indoor} /> },
  ];

  const slots = Math.max(2, selected.length + (selected.length < 4 ? 1 : 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Compare Venues
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto">
            Select up to 4 venues side-by-side to find the perfect match for your wedding.
          </motion.p>
        </div>
      </section>

      {/* Compare Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Venue Selection Cards */}
        <div className={`grid gap-4 mb-8 ${slots === 2 ? "grid-cols-2" : slots === 3 ? "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4"}`}>
          {Array.from({ length: slots }).map((_, i) => {
            const venue = selected[i];
            return (
              <div key={i} className="relative">
                {venue ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-md"
                  >
                    <div className="relative h-36 overflow-hidden">
                      <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                      <button
                        onClick={() => removeVenue(i)}
                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-foreground/70 flex items-center justify-center hover:bg-foreground/90 transition-colors"
                      >
                        <X className="w-4 h-4 text-primary-foreground" />
                      </button>
                    </div>
                    <div className="p-3">
                      <h3 className="font-display text-sm font-bold text-foreground truncate">{venue.name}</h3>
                      <p className="text-xs font-body text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-accent" /> {venue.city}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="relative">
                    <button
                      onClick={() => setDropdownOpen(dropdownOpen === i ? null : i)}
                      className="w-full h-52 bg-secondary/30 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-secondary/50 hover:border-accent/50 transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-accent" />
                      </div>
                      <span className="font-body text-sm text-muted-foreground">Add Venue</span>
                    </button>

                    <AnimatePresence>
                      {dropdownOpen === i && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 left-0 right-0 z-20 bg-card rounded-xl border border-border shadow-elevated max-h-64 overflow-y-auto"
                        >
                          {availableVenues.length === 0 ? (
                            <p className="p-4 text-sm font-body text-muted-foreground text-center">No more venues to add</p>
                          ) : (
                            availableVenues.map((v) => (
                              <button
                                key={v.id}
                                onClick={() => addVenue(v, i)}
                                className="w-full flex items-center gap-3 p-3 hover:bg-secondary/50 transition-colors text-left border-b border-border/30 last:border-0"
                              >
                                <img src={v.image} alt={v.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                                <div className="min-w-0">
                                  <p className="font-body text-sm font-semibold text-foreground truncate">{v.name}</p>
                                  <p className="text-xs font-body text-muted-foreground">{v.city} • {v.type}</p>
                                </div>
                              </button>
                            ))
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        {selected.length >= 2 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-elevated">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-display text-sm font-bold text-foreground w-40">Feature</th>
                    {selected.map((v) => (
                      <th key={v.id} className="text-center p-4 font-display text-sm font-bold text-foreground">{v.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.key} className={`border-b border-border/30 ${i % 2 === 0 ? "bg-secondary/20" : ""}`}>
                      <td className="p-4 font-body text-sm font-semibold text-muted-foreground">{row.label}</td>
                      {selected.map((v) => (
                        <td key={v.id} className="p-4 text-center">{row.render(v)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {selected.length < 2 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <ChevronDown className="w-6 h-6 text-accent" />
            </div>
            <p className="font-display text-xl text-foreground mb-2">Select at least 2 venues</p>
            <p className="font-body text-sm text-muted-foreground">Click "Add Venue" above to start comparing venues side by side.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default CompareVenues;
