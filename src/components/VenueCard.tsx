import { motion } from "framer-motion";
import { MapPin, Users, Star, ArrowRight } from "lucide-react";

interface VenueCardProps {
  name: string;
  image: string;
  price: string;
  address: string;
  capacity: string;
  rating: number;
  reviews: number;
}

const VenueCard = ({ name, image, price, address, capacity, rating, reviews }: VenueCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-elevated transition-all duration-500 border border-border/50"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 glass rounded-xl px-3 py-1.5 shadow-lg">
          <span className="text-sm font-body font-bold text-foreground">{price}</span>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-foreground/70 backdrop-blur-sm rounded-lg px-2.5 py-1">
          <Star className="w-3.5 h-3.5 fill-gold text-gold" />
          <span className="text-xs font-bold font-body text-primary-foreground">{rating}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{name}</h3>

        <div className="flex items-start gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground font-body line-clamp-2">{address}</p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Users className="w-4 h-4 text-gold shrink-0" />
          <p className="text-sm text-muted-foreground font-body">{capacity}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground font-body">{reviews} reviews</span>
          </div>
          <button className="inline-flex items-center gap-1.5 text-sm font-body font-semibold text-primary hover:text-wine-light transition-colors group/btn">
            View Details
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;
