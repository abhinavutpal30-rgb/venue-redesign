import { motion } from "framer-motion";
import { Heart, Award, Users, MapPin, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  { icon: MapPin, value: "200+", label: "Curated Venues" },
  { icon: Users, value: "5000+", label: "Happy Couples" },
  { icon: Award, value: "4.8★", label: "Average Rating" },
  { icon: Heart, value: "2", label: "Cities & Growing" },
];

const team = [
  { name: "Rahul Sharma", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
  { name: "Priya Gupta", role: "Head of Venue Curation", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Amit Kumar", role: "Operations Lead", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Sneha Roy", role: "Customer Experience", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const values = [
  { title: "Trust First", desc: "Every venue is personally visited and verified before listing." },
  { title: "Your Vision Matters", desc: "We listen, understand, and match you with venues that fit your dream." },
  { title: "Transparent Pricing", desc: "No hidden costs. What you see is what you pay." },
  { title: "End-to-End Support", desc: "From shortlisting to the big day, we're with you at every step." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 70%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold-light font-body text-sm tracking-wide">Our Story</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            Making Wedding <span className="text-gradient-gold">Venue Hunting</span> Joyful
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto">
            Born in Patna, growing across India — we believe every couple deserves a venue that matches their love story.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center shadow-elevated border border-border/30"
            >
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
          Our <span className="text-gradient-gold">Mission</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-body text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          We started Venue by Choice because we saw how stressful venue hunting could be — visiting dozens of places, comparing prices, and dealing with hidden costs. Our mission is simple: to make finding and booking your wedding venue as joyful as planning the rest of your celebration. Every venue on our platform is personally verified, honestly priced, and backed by real reviews from real couples.
        </motion.p>
      </section>

      {/* Values */}
      <section className="bg-secondary/30 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            What We <span className="text-gradient-gold">Stand For</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50 hover:shadow-elevated transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center mb-4">
                  <span className="font-display font-bold text-accent-foreground">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{v.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Meet the <span className="text-gradient-gold">Team</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden mb-4 border-2 border-border/30 group-hover:border-gold transition-colors duration-500 shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm">{member.name}</h3>
              <p className="font-body text-xs text-muted-foreground mt-1">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
