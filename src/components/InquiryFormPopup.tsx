import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle } from "lucide-react";

interface InquiryFormPopupProps {
  open: boolean;
  onClose: () => void;
  venueName?: string;
}

const InquiryFormPopup = ({ open, onClose, venueName }: InquiryFormPopupProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", guests: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "", date: "", guests: "", message: "" });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-card rounded-2xl shadow-elevated overflow-hidden border border-border/50"
          >
            {/* Header */}
            <div className="gradient-wine-deep p-6 text-center relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
              <p className="text-gold-light font-body text-xs tracking-[0.2em] uppercase mb-1">Free Consultation</p>
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                {venueName ? `Enquire about ${venueName}` : "Get Best Venue Deals"}
              </h3>
              <p className="text-primary-foreground/50 font-body text-sm mt-1">We'll call you back within 30 minutes</p>
            </div>

            {submitted ? (
              <div className="p-10 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                </motion.div>
                <h4 className="font-display text-lg font-bold text-foreground mb-2">Thank You!</h4>
                <p className="font-body text-sm text-muted-foreground">Our wedding expert will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name *" className="col-span-2 px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number *" className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Email" className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  <input type="number" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} placeholder="No. of Guests" className="px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Any specific requirements..." rows={2} className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" />
                <button type="submit" className="w-full gradient-gold text-accent-foreground font-body font-bold py-3.5 rounded-xl hover:opacity-90 transition-all shadow-gold flex items-center justify-center gap-2 text-sm">
                  <Send className="w-4 h-4" />
                  Get Free Quotes
                </button>
                <p className="text-center text-xs text-muted-foreground font-body">By submitting, you agree to our terms. No spam, ever.</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryFormPopup;
