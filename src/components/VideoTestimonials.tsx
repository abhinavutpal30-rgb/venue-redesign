import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Star } from "lucide-react";

const VideoTestimonials = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-28 px-6 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Hear From Them</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            A Story Worth <span className="text-gradient-gold">Sharing</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Video */}
          <div className="relative rounded-3xl overflow-hidden shadow-elevated aspect-video bg-foreground/5 group cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png"
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src="" type="video/mp4" />
            </video>

            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="absolute inset-0 bg-foreground/30" />
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="relative z-10 w-20 h-20 rounded-full gradient-gold flex items-center justify-center shadow-gold"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-accent-foreground" />
                ) : (
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                )}
              </motion.div>
            </div>

            <div className="absolute bottom-4 right-4 bg-foreground/70 backdrop-blur-sm text-background text-xs font-body px-3 py-1.5 rounded-full">
              2:30
            </div>
          </div>

          {/* Quote card */}
          <div className="flex flex-col justify-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-foreground leading-relaxed mb-8">
              "Venue By Choice didn't just help us find a venue — they understood
              our vision and made our dream wedding a reality."
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src="https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png"
                alt="Dr. Nijarth & Dr. Swarna"
                className="w-16 h-16 rounded-full object-cover border-2 border-gold/30 shadow-lg"
              />
              <div>
                <p className="font-display font-bold text-foreground text-lg">Dr. Nijarth & Dr. Swarna</p>
                <p className="text-muted-foreground font-body text-sm">Wedding at Patna · December 2024</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <div className="flex gap-10">
                {[
                  { value: "500+", label: "Guests" },
                  { value: "3 Days", label: "Celebration" },
                  { value: "5.0", label: "Rating", highlight: true },
                ].map((s) => (
                  <div key={s.label}>
                    <p className={`text-2xl font-display font-bold ${s.highlight ? "text-gold" : "text-foreground"}`}>{s.value}</p>
                    <p className="text-muted-foreground font-body text-xs uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
