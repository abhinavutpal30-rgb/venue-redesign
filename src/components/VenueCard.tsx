import { motion } from "framer-motion";
import { MapPin, Users, Star } from "lucide-react";

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
      transition={{ duration: 0.3 }}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-border/50"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-1">
          <span className="text-sm font-body font-semibold text-foreground">{price}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{name}</h3>

        <div className="flex items-start gap-2 mb-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-sm text-muted-foreground font-body line-clamp-2">{address}</p>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-muted-foreground shrink-0" />
          <p className="text-sm text-muted-foreground font-body">{capacity}</p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-gold text-gold" />
            <span className="text-sm font-semibold font-body text-foreground">{rating}</span>
            <span className="text-sm text-muted-foreground font-body">({reviews})</span>
          </div>
          <button className="text-sm font-body font-semibold text-primary hover:text-wine-light transition-colors">
            View Details →
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;
