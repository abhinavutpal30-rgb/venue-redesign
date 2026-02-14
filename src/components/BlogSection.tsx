import { motion } from "framer-motion";

const blogPosts = [
  { title: "Luxury Wedding Venues in Kolkata: Where Dreams Meet Elegance", image: "https://venuebychoice.com/wp-content/uploads/2025/12/restaurant-hall-with-round-tables-white-napoleon-chairs-red-curtains-brick-walls-chandeliers.jpg", date: "December 10, 2025" },
  { title: "Heritage Wedding Venues in Patna & Kolkata That Feel Like Royal Getaways", image: "https://venuebychoice.com/wp-content/uploads/2025/12/photorealistic-wedding-venue-with-intricate-decor-ornaments.jpg", date: "December 9, 2025" },
  { title: "Wedding Planners Uncover 5 Secrets to Smarter Wedding Planning", image: "https://venuebychoice.com/wp-content/uploads/2025/12/weddiing-planner.jpg", date: "December 4, 2025" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Insights</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            From Our <span className="text-gradient-gold">Blog</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-body text-gold font-medium">{post.date}</span>
                <h3 className="font-display font-semibold text-foreground mt-2 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <span className="inline-block mt-4 text-sm font-body font-semibold text-primary">
                  Read More →
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
