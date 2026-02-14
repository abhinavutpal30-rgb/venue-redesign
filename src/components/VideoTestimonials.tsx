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
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-gold font-body text-sm tracking-[0.2em] uppercase mb-3">
            Hear From Them
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            A Story Worth <span className="text-gradient-gold">Sharing</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-foreground/5 group cursor-pointer" onClick={togglePlay}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png"
              onEnded={() => setIsPlaying(false)}
              playsInline
            >
              <source src="" type="video/mp4" />
            </video>

            {/* Play overlay */}
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
              <div className="absolute inset-0 bg-foreground/30" />
              <div className="relative z-10 w-20 h-20 rounded-full gradient-gold flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-accent-foreground" />
                ) : (
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                )}
              </div>
            </div>

            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 bg-foreground/70 backdrop-blur-sm text-background text-xs font-body px-3 py-1 rounded-full">
              2:30
            </div>
          </div>

          {/* Quote card */}
          <div className="flex flex-col justify-center">
            <div className="flex gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl font-display font-semibold text-foreground leading-relaxed mb-6">
              "Venue By Choice didn't just help us find a venue — they understood
              our vision and made our dream wedding a reality. Every detail was
              thoughtfully planned."
            </blockquote>

            <div className="flex items-center gap-4">
              <img
                src="https://venuebychoice.com/wp-content/uploads/2025/07/Prem.png"
                alt="Dr. Nijarth & Dr. Swarna"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
              />
              <div>
                <p className="font-display font-bold text-foreground text-lg">
                  Dr. Nijarth & Dr. Swarna
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  Wedding at Patna · December 2024
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex gap-8">
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">500+</p>
                  <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">Guests</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-foreground">3 Days</p>
                  <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">Celebration</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-gold">5.0</p>
                  <p className="text-muted-foreground font-body text-xs uppercase tracking-wider">Rating</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
