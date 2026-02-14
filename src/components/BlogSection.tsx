import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  { title: "Luxury Wedding Venues in Kolkata: Where Dreams Meet Elegance", image: "https://venuebychoice.com/wp-content/uploads/2025/12/restaurant-hall-with-round-tables-white-napoleon-chairs-red-curtains-brick-walls-chandeliers.jpg", date: "December 10, 2025" },
  { title: "Heritage Wedding Venues in Patna & Kolkata That Feel Like Royal Getaways", image: "https://venuebychoice.com/wp-content/uploads/2025/12/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg", date: "December 9, 2025" },
  { title: "Wedding Planners Uncover 5 Secrets to Smarter Wedding Planning", image: "https://venuebychoice.com/wp-content/uploads/2025/12/weddiing-planner.jpg", date: "December 4, 2025" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Insights</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            From Our <span className="text-gradient-gold">Blog</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-elevated transition-all duration-500 cursor-pointer"
            >
              <div className="h-52 overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <span className="text-xs font-body text-gold font-semibold tracking-wider uppercase">{post.date}</span>
                <h3 className="font-display font-bold text-foreground mt-3 leading-snug line-clamp-2 group-hover:text-primary transition-colors text-lg">
                  {post.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-body font-semibold text-primary group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
