import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import orphanageImg from "@/assets/orphanage.jpg";
import heroFoodImg from "@/assets/hero-food.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import { Heart, CheckCircle, Users, BookOpen, Home, MapPin, Copy, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const impacts = [
  { icon: Users, value: "50+", label: "Children Supported" },
  { icon: BookOpen, value: "100%", label: "Education Access" },
  { icon: Home, value: "365", label: "Days of Shelter" },
];

const slides = [
  {
    img: orphanageImg,
    title: "A Home for Every Child",
    caption: "Providing shelter, love, and hope to children across Kenya",
  },
  {
    img: heroFoodImg,
    title: "Every Meal, a Mission",
    caption: "Your dining experience at Amazola directly supports Fountain of Hope",
  },
  {
    img: interiorImg,
    title: "Dining with Purpose",
    caption: "Our warmth extends beyond these walls — into the community",
  },
];

const imgVariants = {
  enter: { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.5, ease: "easeIn" as const } },
};

const FountainOfHope = () => {
  const [donated, setDonated] = useState(false);
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  const handleCopy = () => {
    navigator.clipboard.writeText("0757053405");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-20">
      {/* Hero Carousel */}
      <section className="relative h-[65vh] min-h-[480px] flex items-end justify-center overflow-hidden">
        {/* Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            variants={imgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[active].img}
              alt={slides[active].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
          </motion.div>
        </AnimatePresence>

        {/* Page title badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30"
        >
          <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">Fountain of Hope Rescue Center</span>
        </motion.div>

        {/* Slide text */}
        <div className="relative z-20 text-center px-6 pb-16 w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {slides[active].title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-xl mx-auto">
                {slides[active].caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-400 ${
                i === active ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </section>

      {/* Impact Stats */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max max-w-3xl">
          <RevealSection>
            <div className="glass-card p-6 grid grid-cols-3 gap-6">
              {impacts.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-5 w-5 text-secondary mx-auto mb-2 opacity-70" />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding leaf-pattern">
        <div className="container-max max-w-4xl">
          <RevealSection>
            <div className="glass-card p-8 sm:p-12 mb-16 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                The Fountain of Hope Rescue Center is an orphanage dedicated to providing shelter,
                education, and love to children who have lost their families. Located in the heart
                of Kenya, the center offers a safe haven where children can grow, learn, and dream.
              </p>
              <p>
                Amazola Sweet Lounge proudly supports Fountain of Hope by dedicating a portion of
                its proceeds to the center. When you dine with us, you're not just enjoying a
                meal — you're helping feed, clothe, and educate a child in need.
              </p>
              <p>
                Together, we believe we can build a brighter future for every child at Fountain of Hope.
              </p>
            </div>
          </RevealSection>

          {/* Location */}
          <RevealSection delay={0.05}>
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <h2 className="font-display text-2xl font-bold text-foreground">Find Us</h2>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-border/30">
                <iframe
                  title="Fountain of Hope Location"
                  src="https://maps.google.com/maps?q=Fountain+of+Hope+Rescue+Center+Kenya&output=embed"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://share.google/QzUocqNcIewFDCmam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Open in Google Maps
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Donate Section */}
          <RevealSection delay={0.1}>
            <SectionHeader
              subtitle="Make a Difference"
              title="Support Fountain of Hope"
              description="Your generosity changes lives. Every contribution, no matter how small, helps provide food, shelter, and education."
            />
          </RevealSection>

          <RevealSection delay={0.15}>
            <AnimatePresence mode="wait">
              {donated ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center glass-card p-12"
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Thank You for Your Generosity!
                  </h3>
                  <p className="text-muted-foreground">
                    Your support means the world to the children at Fountain of Hope.
                  </p>
                  <button
                    onClick={() => setDonated(false)}
                    className="mt-6 text-sm text-primary underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="donate"
                  exit={{ opacity: 0 }}
                  className="max-w-lg mx-auto space-y-5"
                >
                  {/* M-PESA card */}
                  <div className="glass-card p-6 sm:p-8">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
                      Donate via M-PESA POCHI LA BIASHARA
                    </p>
                    <div className="flex items-center justify-between gap-4 bg-primary/5 border border-primary/20 rounded-2xl px-5 py-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary shrink-0" />
                        <span className="font-display text-2xl font-bold text-foreground tracking-wider">
                          0757053405
                        </span>
                      </div>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors"
                      >
                        <Copy className="h-3.5 w-3.5" />
                        {copied ? "Copied!" : "Copy"}
                      </button>
                    </div>
                    <ol className="mt-5 space-y-1.5 text-sm text-muted-foreground list-decimal list-inside">
                      <li>Open <strong className="text-foreground">M-PESA</strong> → <strong className="text-foreground">Lipa na M-PESA</strong></li>
                      <li>Select <strong className="text-foreground">Pochi la Biashara</strong></li>
                      <li>Enter number <strong className="text-foreground">0757053405</strong></li>
                      <li>Enter your amount and confirm</li>
                    </ol>
                  </div>

                  {/* Encouragement message (optional) */}
                  <div className="glass-card p-6 sm:p-8">
                    <p className="text-sm font-medium text-foreground mb-4">
                      Leave a word of encouragement <span className="text-muted-foreground font-normal">(optional)</span>
                    </p>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setDonated(true);
                      }}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm"
                        placeholder="Your name (optional)"
                      />
                      <textarea
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow text-sm"
                        placeholder="Share a word of encouragement for the children..."
                      />
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-full bg-secondary text-secondary-foreground font-semibold hover:shadow-[0_0_40px_-8px_hsl(30_80%_55%_/_0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Heart className="h-4 w-4" /> Send Encouragement
                      </button>
                    </form>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default FountainOfHope;
