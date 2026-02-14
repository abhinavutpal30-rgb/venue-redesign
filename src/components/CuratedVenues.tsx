import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VenueCard from "./VenueCard";

const tabs = ["Banquet Halls", "Hotels", "Resorts"];

const venues = {
  "Banquet Halls": [
    { name: "Varmala Banquet", image: "https://venuebychoice.com/wp-content/uploads/2025/05/vvv.jpg", price: "₹1,499/person", address: "Tegharia, Kolkata, West Bengal", capacity: "300–400 Guests", rating: 3.9, reviews: 13 },
    { name: "Vrindaban Banquet", image: "https://venuebychoice.com/wp-content/uploads/2025/05/x.jpg", price: "₹1,499/person", address: "Gariahat, Kolkata, West Bengal 700029", capacity: "Up to 750 Guests", rating: 3.9, reviews: 10 },
    { name: "Shree Banquets", image: "https://venuebychoice.com/wp-content/uploads/2025/05/3-14.jpg", price: "₹1,499/person", address: "Tangra, Kolkata, West Bengal 700015", capacity: "Seating: 700 | Max: 1050", rating: 4.1, reviews: 13 },
    { name: "AJ's Banquet", image: "https://venuebychoice.com/wp-content/uploads/2025/05/1-6.jpg", price: "₹1,499/person", address: "Bara Bazar, Jorasanko, Kolkata 700007", capacity: "1000 seated, 1500 floating", rating: 4.0, reviews: 17 },
  ],
  "Hotels": [
    { name: "Urban Cliff", image: "https://venuebychoice.com/wp-content/uploads/2025/05/7-21.jpg", price: "₹1,499/person", address: "42/1, Tiljala Road, Kolkata-700046", capacity: "50–600 Guests", rating: 5.0, reviews: 13 },
    { name: "Hyatt Centric Ballygunge", image: "https://venuebychoice.com/wp-content/uploads/2025/05/6-3.jpg", price: "₹1,499/person", address: "17 Garcha 1st Lane, Kolkata 700019", capacity: "Premium", rating: 5.0, reviews: 25 },
    { name: "Royal Garden Hotel", image: "https://venuebychoice.com/wp-content/uploads/2025/06/7.jpg", price: "₹1,499/person", address: "Park Street, Kolkata", capacity: "150–250 Guests", rating: 4.0, reviews: 13 },
    { name: "Hotel Bliss", image: "https://venuebychoice.com/wp-content/uploads/2025/07/New-Project-2025-07-03T123709.461.jpg", price: "₹1,499/person", address: "Ramkrishan Nagar, Patna 800007", capacity: "150–700 Guests", rating: 4.0, reviews: 17 },
  ],
  "Resorts": [
    { name: "Ashiyana Resort", image: "https://venuebychoice.com/wp-content/uploads/2025/05/Venue-Gallery-Images9-2.jpg", price: "₹1,499/person", address: "Ashiana-Digha Rd, Patna 800011", capacity: "300–600 Guests", rating: 4.0, reviews: 25 },
    { name: "Digha Resort", image: "https://venuebychoice.com/wp-content/uploads/2025/05/Venue-Gallery-Images3-3.jpg", price: "₹1,499/person", address: "Ghurdaur Road, Patna 800011", capacity: "Up to 1,500 Guests", rating: 3.9, reviews: 29 },
    { name: "Jungle Resort", image: "https://venuebychoice.com/wp-content/uploads/2025/07/New-Project-2025-07-03T140722.207.jpg", price: "₹1,499/person", address: "Marcha – Mirchi Road, Patna 800009", capacity: "Up to 1,200 Guests", rating: 4.0, reviews: 19 },
    { name: "Maverick Resort", image: "https://venuebychoice.com/wp-content/uploads/2025/07/New-Project-2025-07-03T144354.301.jpg", price: "₹1,499/person", address: "Saguna Khagaul Rd, Patna 801105", capacity: "Premium", rating: 4.3, reviews: 30 },
  ],
};

const CuratedVenues = () => {
  const [activeTab, setActiveTab] = useState("Banquet Halls");

  return (
    <section id="venues" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Handpicked for You
          </motion.p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Curated Venues Loved by <span className="text-gradient-gold">Everyone</span>
          </h2>
        </motion.div>

        <div className="flex justify-center mb-14">
          <div className="inline-flex bg-secondary rounded-2xl p-1.5 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-7 py-3 rounded-xl font-body text-sm font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "gradient-wine text-primary-foreground shadow-wine"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7"
          >
            {venues[activeTab as keyof typeof venues].map((venue, i) => (
              <motion.div
                key={venue.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <VenueCard {...venue} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CuratedVenues;
