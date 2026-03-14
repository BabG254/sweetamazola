import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Coffee,
  Flame,
  Heart,
  MapPin,
  Quote,
  Sparkles,
  Star,
  Utensils,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import heroImg from "@/assets/hero-food.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import coffeeImg from "@/assets/coffee.jpg";
import africanDishImg from "@/assets/african-dish.jpg";
import interiorImg from "@/assets/restaurant-interior.jpg";
import milkshakesImg from "@/assets/milkshakes.jpg";
import orphanageImg from "@/assets/orphanage.jpg";
import RevealSection from "@/components/RevealSection";
import SectionHeader from "@/components/SectionHeader";

const highlights = [
  {
    icon: UtensilsCrossed,
    title: "Breakfast with intention",
    desc: "From full breakfast plates to soft French toast and comforting porridge, mornings here feel slow, full, and well-loved.",
    img: breakfastImg,
    tag: "Morning Favourite",
  },
  {
    icon: Coffee,
    title: "Coffee, chai & catch-ups",
    desc: "The kind of cups that hold conversation together — rich coffee, fragrant teas, and something sweet to stay a little longer.",
    img: coffeeImg,
    tag: "All Day",
  },
  {
    icon: Flame,
    title: "African dishes with soul",
    desc: "Nyama choma, pilau, mukimo and more — familiar flavours cooked with warmth, balance, and real respect for the table.",
    img: africanDishImg,
    tag: "Signature Plates",
  },
];

const stats = [
  { value: "50+", label: "Dishes on the Menu", icon: Utensils },
  { value: "4.8", label: "Guest Rating", icon: Star },
  { value: "2K+", label: "Happy Guests", icon: Users },
  { value: "100%", label: "Fresh Ingredients", icon: Award },
];

const moments = [
  {
    title: "Date nights that don't feel forced",
    body: "Soft lighting, beautiful plates, and just enough atmosphere to make a regular evening feel special.",
  },
  {
    title: "Family tables that stay full",
    body: "Big flavours, generous portions, and the kind of menu that lets everyone find something they really want.",
  },
  {
    title: "Slow mornings with good coffee",
    body: "Some places rush you. We don't. Breakfast at Amazola is meant to be enjoyed, not chased.",
  },
];

const testimonials = [
  {
    name: "Grace W.",
    role: "Food Blogger",
    text: "Amazola feels personal. The food is beautiful, yes, but what stayed with me was how warm everything felt — the service, the setting, the whole mood.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Regular Guest",
    text: "It has become our easy answer for brunch, dinner, and those in-between days when you just want somewhere calm and good.",
    rating: 5,
  },
  {
    name: "Amina H.",
    role: "Travel Writer",
    text: "There is real care here. Not trendy-for-the-sake-of-it — just thoughtful food, a lovely room, and an energy that makes you want to return.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[760px] lg:min-h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Amazola Sweet Lounge signature African dish"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.14 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-6 sm:inset-10 border border-primary/10 rounded-[2rem] pointer-events-none z-10" />

        <div className="relative z-10 container-max px-4 pt-28 pb-16">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-end">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 flex flex-wrap gap-3"
              >
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-background/20 backdrop-blur-md text-primary text-sm font-semibold tracking-widest uppercase">
                  <Sparkles className="h-4 w-4" /> Forest-Inspired Dining
                </span>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-black/15 backdrop-blur-md text-white/85 text-sm font-medium">
                  <MapPin className="h-4 w-4 text-primary" /> Kabuku, Limuru, Kenya
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="font-display text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold text-foreground leading-[0.92] tracking-tight"
              >
                Come hungry.
                <br />
                Stay for the <span className="text-gradient">feeling</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-7 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
              >
                Amazola Sweet Lounge is where beautiful African food, soft atmosphere, and genuine hospitality meet. It is the kind of place for breakfast dates, long lunches, evening catch-ups, and meals that feel made with heart.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.95 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/menu"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.55)] transition-all duration-300"
                >
                  View Menu <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Reserve a Table
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="hidden lg:block"
            >
              <div className="glass-card p-6 max-w-sm ml-auto">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">A little note from us</p>
                <p className="text-foreground text-lg leading-relaxed">
                  We wanted Amazola to feel romantic without trying too hard, warm without being noisy, and memorable for all the right reasons.
                </p>
                <div className="mt-5 pt-5 border-t border-border/25 flex items-center gap-3 text-sm text-muted-foreground">
                  <Heart className="h-4 w-4 text-primary" /> Made for slow meals and good company.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
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

      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <RevealSection>
            <div className="glass-card p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
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

      <section className="section-padding">
        <div className="container-max grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <RevealSection direction="left">
            <div>
              <SectionHeader
                subtitle="Welcome"
                title="A restaurant with real warmth"
                description="Amazola is not built around trends. It is built around comfort, detail, and the kind of hospitality that makes people relax the moment they sit down."
                center={false}
              />
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                From the textures in the room to the way the food lands on the table, everything is meant to feel thoughtful. You can come dressed up, come casually, come with someone you love, or come alone for a quiet meal — it all fits here.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass-card p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-2">The mood</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">Green, calm, polished, and easy on the senses.</p>
                </div>
                <div className="glass-card p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold mb-2">The food</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">African comfort and premium presentation living on the same plate.</p>
                </div>
              </div>
            </div>
          </RevealSection>

          <RevealSection direction="right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl col-span-2">
                  <img src={interiorImg} alt="Amazola Sweet Lounge forest-inspired interior" className="w-full h-[340px] object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={milkshakesImg} alt="Amazola drinks" className="w-full h-52 object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={coffeeImg} alt="Amazola coffee" className="w-full h-52 object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 glass-card p-5 hidden sm:block max-w-xs">
                <p className="font-display text-xl font-bold text-foreground">Beautiful food. Softer energy.</p>
                <p className="text-sm text-muted-foreground mt-2">That balance is what makes the room feel special.</p>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10">
          <RevealSection>
            <SectionHeader
              subtitle="Signature Moments"
              title="What people fall in love with here"
              description="Not just what is on the menu — but how it feels to enjoy it."
            />
          </RevealSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <RevealSection key={item.title} delay={i * 0.12}>
                <div className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="relative h-72 overflow-hidden">
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
                    <h3 className="font-display text-2xl font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.24}>
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

      <section className="section-padding leaf-pattern">
        <div className="container-max">
          <RevealSection>
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-center">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={breakfastImg} alt="Breakfast at Amazola" className="w-full h-[560px] object-cover" />
              </div>

              <div>
                <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">For all kinds of company</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Made for dates, family lunches, and beautiful everyday plans.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mt-5 mb-8">
                  There is a softness to the experience here. The music does not compete. The room breathes. The food arrives looking generous and intentional. That is why people celebrate here — and why they also come back on ordinary Tuesdays.
                </p>
                <div className="space-y-4">
                  {moments.map((moment) => (
                    <div key={moment.title} className="glass-card p-5">
                      <h3 className="font-semibold text-foreground mb-1">{moment.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{moment.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10">
          <RevealSection>
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Beyond the table</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Dining here also means giving back.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mt-5 mb-6">
                  A portion of Amazola proceeds supports the Fountain of Hope Rescue Center. So the beauty of the restaurant does not end at the table — it carries outward into real care for children who need home, food, and hope.
                </p>
                <Link
                  to="/fountain-of-hope"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
                >
                  Visit Fountain of Hope <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 items-end">
                <div className="glass-card p-5 sm:p-6">
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground">Food with heart</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-2">Good hospitality feels even better when it reaches beyond the room.</p>
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-xl">
                  <img src={orphanageImg} alt="Fountain of Hope Rescue Center" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <RevealSection>
            <SectionHeader
              subtitle="Guest Love"
              title="What people remember"
              description="The comments we love most are not only about the food. They are about how the place made people feel."
            />
          </RevealSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <RevealSection key={t.name} delay={i * 0.12}>
                <div className="glass-card p-8 h-full flex flex-col group hover:border-primary/30 transition-all duration-500">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground leading-relaxed flex-1 italic">"{t.text}"</p>
                  <div className="mt-6 pt-6 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="font-display font-bold text-primary text-sm">{t.name.charAt(0)}</span>
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

      <section className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10 text-center">
          <RevealSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ready for a table that feels a little <span className="text-gradient">more special</span>?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                Come by for breakfast, dinner, coffee, celebration, or simply because the day deserves something lovely.
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
