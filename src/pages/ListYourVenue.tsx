import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, TrendingUp, Users, Shield, Eye, Star, ChevronDown,
  CheckCircle2, Phone, Mail, MapPin, Upload, Camera, Utensils,
  Music, Car, Clock, Award, BarChart3, Headphones, Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Eye, title: "Maximum Visibility", desc: "Get seen by thousands of couples actively searching for wedding venues every month." },
  { icon: TrendingUp, title: "Increase Bookings", desc: "Our partners see an average 40% increase in enquiries within the first 3 months." },
  { icon: Users, title: "Qualified Leads", desc: "Receive genuine, verified enquiries from couples ready to book their dream venue." },
  { icon: Shield, title: "Trusted Platform", desc: "Join a curated marketplace that couples trust for their most important day." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track views, enquiries, and performance with our detailed venue analytics." },
  { icon: Headphones, title: "Dedicated Support", desc: "Get a dedicated account manager to help optimize your listing and maximize results." },
];

const steps = [
  { num: "01", title: "Register Your Venue", desc: "Fill out the listing form with your venue details, photos, and pricing information." },
  { num: "02", title: "Get Verified", desc: "Our team reviews and verifies your venue to ensure quality standards are met." },
  { num: "03", title: "Go Live", desc: "Your venue goes live on the platform, visible to thousands of couples searching daily." },
  { num: "04", title: "Receive Enquiries", desc: "Start receiving genuine enquiries and manage them through your dashboard." },
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    features: ["Basic venue listing", "Up to 5 photos", "Contact details display", "Monthly performance report"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹4,999",
    period: "/month",
    features: ["Priority listing", "Up to 25 photos", "Featured badge", "Dedicated account manager", "Weekly analytics report", "Social media promotion"],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "₹9,999",
    period: "/month",
    features: ["Top placement in search", "Unlimited photos & videos", "Featured on homepage", "Lead priority routing", "Real-time analytics", "Custom branding options", "Exclusive event partnerships"],
    highlighted: false,
  },
];

const faqs = [
  { q: "How long does the verification process take?", a: "Our team typically verifies new venue listings within 2-3 business days. We may contact you for additional information or photos during this process." },
  { q: "Can I update my listing after it's live?", a: "Absolutely! You can update your venue details, photos, pricing, and availability anytime through your venue dashboard." },
  { q: "What kind of venues can be listed?", a: "We accept banquet halls, hotels, resorts, farmhouses, heritage properties, open-air venues, and any space suitable for weddings and celebrations." },
  { q: "Is there a contract or lock-in period?", a: "No lock-in period. You can upgrade, downgrade, or cancel your plan at any time. The Basic plan is always free." },
  { q: "How do I receive enquiries?", a: "Enquiries are sent directly to your registered email and phone number. Premium and Elite members also get access to a real-time dashboard." },
  { q: "Do you charge commission on bookings?", a: "No, we do not charge any commission. You keep 100% of your booking revenue. We only charge the monthly listing fee for premium plans." },
];

const stats = [
  { value: "5,000+", label: "Monthly Visitors" },
  { value: "200+", label: "Listed Venues" },
  { value: "98%", label: "Partner Satisfaction" },
  { value: "10,000+", label: "Enquiries Generated" },
];

const ListYourVenue = () => {
  const { toast } = useToast();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    venueName: "", ownerName: "", phone: "", email: "", city: "", venueType: "", capacity: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Listing Request Submitted!", description: "Our team will contact you within 24 hours to get started." });
    setForm({ venueName: "", ownerName: "", phone: "", email: "", city: "", venueType: "", capacity: "", message: "" });
  };

  const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 60%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.p {...fadeUp} className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">For Venue Owners</motion.p>
          <motion.h1 {...fadeUp} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6">
            Showcase Your Venue to <span className="text-gradient-gold">Thousands</span> of Couples
          </motion.h1>
          <motion.p {...fadeUp} transition={{ delay: 0.2 }} className="text-primary-foreground/60 font-body text-lg max-w-2xl mx-auto mb-10">
            Join Venue by Choice and connect with couples actively searching for the perfect wedding venue. Grow your bookings effortlessly.
          </motion.p>
          <motion.div {...fadeUp} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => document.getElementById("listing-form")?.scrollIntoView({ behavior: "smooth" })} className="gradient-gold text-accent-foreground font-body font-semibold px-8 py-6 text-base rounded-full shadow-gold hover:opacity-90 hover:scale-105 transition-all">
              List Your Venue — It's Free
            </Button>
            <Button variant="outline" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })} className="border-primary-foreground/30 text-primary-foreground font-body px-8 py-6 text-base rounded-full hover:bg-primary-foreground/10">
              View Plans
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-10 px-6">
        <div className="max-w-5xl mx-auto glass rounded-2xl shadow-elevated border border-border/30 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">{stat.value}</p>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why List With Us */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Why Partner With Us</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Grow Your <span className="text-gradient-gold">Business</span> With Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="group p-8 rounded-2xl bg-card border border-border/50 hover:shadow-elevated hover:border-accent/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{b.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Simple Process</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fadeUp} transition={{ delay: i * 0.12 }} className="relative text-center">
                <div className="text-6xl font-display font-bold text-accent/15 mb-2">{step.num}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Plans That Fit Your <span className="text-gradient-gold">Needs</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 border transition-all duration-500 hover:shadow-elevated ${
                  plan.highlighted
                    ? "gradient-wine text-primary-foreground border-transparent shadow-wine scale-[1.02]"
                    : "bg-card border-border/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-gold text-accent-foreground font-body text-xs font-semibold px-4 py-1.5 rounded-full shadow-gold">
                    Most Popular
                  </div>
                )}
                <h3 className={`font-display text-2xl font-bold mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>{plan.name}</h3>
                <div className="mb-6">
                  <span className={`text-4xl font-display font-bold ${plan.highlighted ? "text-primary-foreground" : "text-gradient-gold"}`}>{plan.price}</span>
                  <span className={`font-body text-sm ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${plan.highlighted ? "text-gold-light" : "text-accent"}`} />
                      <span className={`font-body text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => document.getElementById("listing-form")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full rounded-full py-5 font-body font-semibold transition-all ${
                    plan.highlighted
                      ? "gradient-gold text-accent-foreground shadow-gold hover:opacity-90"
                      : "gradient-wine text-primary-foreground shadow-wine hover:opacity-90"
                  }`}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Venue Types */}
      <section className="py-28 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Venue Types</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              We Welcome <span className="text-gradient-gold">All Venues</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Building2, label: "Banquet Halls" },
              { icon: Star, label: "Hotels" },
              { icon: Globe, label: "Resorts" },
              { icon: Camera, label: "Farmhouses" },
              { icon: Award, label: "Heritage" },
              { icon: Music, label: "Open-Air" },
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeUp} transition={{ delay: i * 0.06 }} className="group text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-elevated hover:border-accent/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <p className="font-body text-sm font-medium text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Listing Form */}
      <section id="listing-form" className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Get Started</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              List Your <span className="text-gradient-gold">Venue</span> Today
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">Fill in your venue details and our team will reach out within 24 hours to help you get listed.</p>
          </motion.div>

          <motion.form {...fadeUp} onSubmit={handleSubmit} className="glass rounded-2xl shadow-elevated border border-border/30 p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Venue Name *</label>
                <Input required value={form.venueName} onChange={(e) => setForm({ ...form, venueName: e.target.value })} placeholder="e.g. The Grand Palace" className="rounded-xl bg-secondary/50 border-border/50 py-5" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Owner / Manager Name *</label>
                <Input required value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} placeholder="Your full name" className="rounded-xl bg-secondary/50 border-border/50 py-5" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Phone Number *</label>
                <Input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="rounded-xl bg-secondary/50 border-border/50 py-5" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email Address *</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="venue@example.com" className="rounded-xl bg-secondary/50 border-border/50 py-5" />
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">City *</label>
                <select required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full rounded-xl bg-secondary/50 border border-border/50 py-3 px-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30">
                  <option value="">Select City</option>
                  <option value="Patna">Patna</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Venue Type *</label>
                <select required value={form.venueType} onChange={(e) => setForm({ ...form, venueType: e.target.value })} className="w-full rounded-xl bg-secondary/50 border border-border/50 py-3 px-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/30">
                  <option value="">Select Type</option>
                  <option value="Banquet Hall">Banquet Hall</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Resort">Resort</option>
                  <option value="Farmhouse">Farmhouse</option>
                  <option value="Heritage">Heritage Property</option>
                  <option value="Open-Air">Open-Air Venue</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Guest Capacity</label>
                <Input value={form.capacity} onChange={(e) => setForm({ ...form, capacity: e.target.value })} placeholder="e.g. 200-800" className="rounded-xl bg-secondary/50 border-border/50 py-5" />
              </div>
            </div>
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Additional Details</label>
              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us about your venue, amenities, pricing, etc." className="w-full rounded-xl bg-secondary/50 border border-border/50 px-3 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/30 resize-none" />
            </div>
            <Button type="submit" className="w-full gradient-gold text-accent-foreground font-body font-semibold py-6 text-base rounded-full shadow-gold hover:opacity-90 hover:scale-[1.01] transition-all">
              Submit Listing Request
            </Button>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 px-6 bg-secondary/50">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Questions?</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.06 }} className="rounded-2xl bg-card border border-border/50 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-display text-base font-semibold text-foreground pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp} className="gradient-wine rounded-3xl p-12 md:p-16 shadow-wine">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Grow Your Bookings?
            </h2>
            <p className="font-body text-primary-foreground/60 text-lg mb-8 max-w-xl mx-auto">
              Join 200+ venue partners who trust Venue by Choice to connect them with the right couples.
            </p>
            <Button onClick={() => document.getElementById("listing-form")?.scrollIntoView({ behavior: "smooth" })} className="gradient-gold text-accent-foreground font-body font-semibold px-10 py-6 text-base rounded-full shadow-gold hover:opacity-90 hover:scale-105 transition-all">
              List Your Venue Now
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListYourVenue;
