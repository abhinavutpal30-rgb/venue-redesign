import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "What is Venue by Choice?", a: "Venue by Choice is a wedding venue discovery and booking platform. We help couples and families explore, compare, and book banquet halls, lawns, and resorts across Kolkata and Patna — easily, quickly, and all in one place." },
  { q: "Is there any cost to use Venue by Choice?", a: "No, it's completely free for users. You can browse, filter, check venue availability, request callbacks, and compare venues — all without paying anything to us. Once you decide to book, you directly pay the venue or vendor." },
  { q: "Which locations does Venue by Choice cover?", a: "We currently focus on Patna, Kolkata, and surrounding regions. We are adding more cities soon, but you can always reach out if you're looking for a venue elsewhere — we might still be able to help." },
  { q: "Can I find venues by my guest count and budget?", a: "Yes! Just enter your estimated guest count and budget in the filters. Our listings will adjust to show venues that can handle your event size and fall within your price range — saving you time and effort." },
  { q: "Can I get help after I book the venue?", a: "Yes! Even after you book, our support team is here to help with follow-ups, changes, or clarifying any doubts. We're with you till your big day." },
  { q: "Why should I use Venue by Choice instead of calling venues directly?", a: "With Venue by Choice, you get verified information, photos, FAQs, filters, and quick availability updates all in one place. It saves time, avoids miscommunication, and helps you compare venues easily before making a call." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Got Questions?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-display font-semibold text-foreground text-sm md:text-base">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-gold shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
