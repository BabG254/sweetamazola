import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import interiorImg from "@/assets/restaurant-interior.jpg";
import heroImg from "@/assets/hero-food.jpg";
import { Leaf, Heart, Users } from "lucide-react";

const values = [
  { icon: Leaf, title: "Nature-Inspired", desc: "Every corner of our lounge breathes the tranquility of the forest, creating a unique dining sanctuary." },
  { icon: Heart, title: "Authentic Flavors", desc: "We celebrate the rich culinary heritage of Africa with dishes made from the freshest local ingredients." },
  { icon: Users, title: "Community First", desc: "We believe in giving back — supporting local communities and the Fountain of Hope Rescue Center." },
];

const About = () => (
  <div className="pt-20">
    {/* Hero Banner */}
    <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Amazola Sweet Lounge" className="absolute inset-0 w-full h-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
          Our <span className="text-gradient">Story</span>
        </h1>
      </div>
    </section>

    <section className="section-padding leaf-pattern">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <RevealSection direction="left">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={interiorImg}
                alt="Interior of Amazola Sweet Lounge"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </RevealSection>

          <RevealSection direction="right">
            <div className="space-y-6">
              <SectionHeader
                subtitle="About Us"
                title="Where Nature Meets Flavor"
                center={false}
              />
              <p className="text-muted-foreground text-lg leading-relaxed">
                Amazola Sweet Lounge was created to bring people together around delicious,
                authentically African food in a setting that feels like stepping into a warm,
                enchanted forest.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our menu features traditional Kenyan favorites — from Nyama Choma and Pilau to
                freshly blended juices and premium coffee — all prepared with love, herbs, and
                spices sourced from local farms.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Beyond food, we are committed to making a difference. A portion of every meal
                supports the Fountain of Hope Rescue Center, helping orphaned children thrive.
              </p>
            </div>
          </RevealSection>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <RevealSection key={v.title} delay={i * 0.12}>
              <div className="glass-card p-10 text-center group hover:border-primary/30 transition-all duration-500 h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
