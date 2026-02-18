import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Sparkles, Clock, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 9065645111", href: "tel:+919065645111" },
  { icon: Mail, label: "Email", value: "info@venuebychoice.com", href: "mailto:info@venuebychoice.com" },
  { icon: MapPin, label: "Offices", value: "Patna & Kolkata, India", href: "#" },
  { icon: Clock, label: "Hours", value: "Mon-Sat, 10AM - 7PM", href: "#" },
];

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-gold-light font-body text-sm tracking-wide">Get in Touch</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4">
            Let's Plan Your <span className="text-gradient-gold">Dream Day</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-primary-foreground/60 font-body text-lg max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Reach out and our team will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-elevated hover:border-gold/30 transition-all duration-500 group"
                >
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground">{info.label}</p>
                    <p className="font-body text-foreground font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/919065645111?text=${encodeURIComponent("Hi, I'm interested in booking a venue!")}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[hsl(142_70%_40%)] text-primary-foreground font-body font-semibold hover:opacity-90 transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-border/30 h-48 bg-muted flex items-center justify-center">
              <p className="font-body text-muted-foreground text-sm">📍 Patna & Kolkata, India</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl shadow-elevated border border-border/30 p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
              <p className="font-body text-muted-foreground text-sm mb-8">Fill the form below and we'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Full Name</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone</label>
                  <input
                    type="tel"
                    maxLength={15}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your event, preferred date, and guest count..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="w-full gradient-gold text-accent-foreground font-body font-semibold py-3.5 rounded-xl shadow-gold hover:opacity-90 hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
