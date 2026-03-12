import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed, Coffee, Flame, Star, Quote, Users, Award, Utensils } from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import africanDishImg from "@/assets/african-dish.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/SectionHeader";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Breakfast",
    desc: "Start your day with our fresh, hearty breakfast spread — from Amazola Full Breakfast to French Toast Deluxe.",
    img: breakfastImg,
    tag: "Morning",
  },
  {
    icon: Coffee,
    title: "Coffee & Teas",
    desc: "Premium brews crafted with care. African Chai Latte, Herbal Forest Tea, and single-origin espresso.",
    img: coffeeImg,
    tag: "All Day",
  },
  {
    icon: Flame,
    title: "African Dishes",
    desc: "Nyama Choma, Pilau, Mukimo — authentic flavors from the heart of Africa, made with love.",
    img: africanDishImg,
    tag: "Signature",
  },
];

const stats = [
  { value: "50+", label: "Dishes on Menu", icon: Utensils },
  { value: "4.8", label: "Average Rating", icon: Star },
  { value: "2K+", label: "Happy Guests", icon: Users },
  { value: "100%", label: "Fresh Ingredients", icon: Award },
];

const testimonials = [
  {
    name: "Grace W.",
    role: "Food Blogger",
    text: "The forest ambiance combined with authentic African flavors makes Amazola truly one-of-a-kind. The Nyama Choma is the best I've had in Nairobi.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Regular Guest",
    text: "My family's favorite weekend spot. The breakfast spread is incredible and the coffee keeps us coming back. A hidden gem!",
    rating: 5,
  },
  {
    name: "Amina H.",
    role: "Travel Writer",
    text: "From the warm interior to the soulful food, everything about Amazola speaks to the heart of African hospitality. Absolutely unforgettable.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Amazola Sweet Lounge signature African dish"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Decorative border lines */}
        <div className="absolute inset-8 sm:inset-12 border border-primary/10 rounded-3xl pointer-events-none z-10" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-semibold tracking-widest uppercase">
              Forest-Inspired Dining
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight"
          >
            A Natural
            <br />
            <span className="text-gradient">Dining</span> Experience
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to Amazola Sweet Lounge — where authentic African cuisine meets the warmth and beauty of nature.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/menu"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
            >
              View Menu <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-primary/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <RevealSection>
            <div className="glass-card p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2 opacity-70" />
                  <div className="font-display text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-padding">
        <div className="container-max grid md:grid-cols-2 gap-16 items-center">
          <RevealSection direction="left">
            <div>
              <SectionHeader
                subtitle="Welcome"
                title="Discover Amazola"
                description="Nestled in a warm, forest-inspired setting, Amazola Sweet Lounge brings together the rich culinary traditions of Africa with a modern, premium dining experience."
                center={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every dish tells a story of community, nature, and authentic flavors. From our hand-picked herbs to our wood-fire grills, we honor the traditions that make African cuisine extraordinary.
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-primary font-semibold text-lg hover:gap-3 transition-all"
              >
                Learn our story <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealSection>

          <RevealSection direction="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={interiorImg}
                  alt="Amazola Sweet Lounge forest-inspired interior"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 glass-card p-5 glow-green hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-foreground">4.8 / 5</div>
                    <div className="text-xs text-muted-foreground">Guest Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10">
          <RevealSection>
            <SectionHeader
              subtitle="Our Menu"
              title="Featured Highlights"
              description="From hearty breakfasts to premium African dishes, every plate is crafted with love and the finest ingredients."
            />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.15}>
                <div className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary text-xs font-semibold border border-primary/20">
                        {item.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <item.icon className="h-8 w-8 text-primary drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.3}>
            <div className="mt-14 text-center">
              <Link
                to="/menu"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
              >
                View Full Menu <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding leaf-pattern">
        <div className="container-max">
          <RevealSection>
            <SectionHeader
              subtitle="Guest Love"
              title="What People Say"
              description="Real stories from our cherished guests — their words fuel our passion."
            />
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={t.name} delay={i * 0.12}>
                <div className="glass-card p-8 h-full flex flex-col group hover:border-primary/30 transition-all duration-500">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-display font-bold text-primary text-sm">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} className="h-3.5 w-3.5 fill-warm-orange text-warm-orange" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10 text-center">
          <RevealSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ready for an <span className="text-gradient">Unforgettable</span> Meal?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Join us at Amazola Sweet Lounge and immerse yourself in the flavors, warmth, and soul of African dining.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/reservations"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
                >
                  Reserve a Table <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-semibold hover:bg-muted/50 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
