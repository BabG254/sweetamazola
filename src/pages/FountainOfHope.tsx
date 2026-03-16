import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealSection from "@/components/RevealSection";
import orphanageImg from "@/assets/orphanage.jpg";
import fountain1Img from "@/assets/fountain1.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import foh2Img from "@/assets/foh2.png";
import foh3Img from "@/assets/foh3.jpg";
import {
  Heart, CheckCircle, Users, BookOpen, Home, MapPin,
  Phone, ChevronLeft, ChevronRight, Smartphone, CreditCard,
  Utensils, Shield, Star, ArrowRight,
} from "lucide-react";

/* ─── Carousel ─────────────────────────────────────────────── */
const slides = [
  { img: orphanageImg,  title: "A Home for Every Child",   caption: "Providing shelter, love, and hope to children across Kenya" },
  { img: fountain1Img,  title: "Every Meal, a Mission",    caption: "Your dining experience at Amazola directly supports Fountain of Hope" },
  { img: orphanageImg,  title: "Dining with Purpose",      caption: "Our warmth extends beyond these walls — into the community" },
];

const imgVariants = {
  enter:  { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1,    transition: { duration: 0.9, ease: "easeOut" as const } },
  exit:   { opacity: 0, scale: 0.97, transition: { duration: 0.5, ease: "easeIn"  as const } },
};

/* ─── Impact stats ──────────────────────────────────────────── */
const impacts = [
  { icon: Users,    value: "50+",  label: "Children Supported" },
  { icon: BookOpen, value: "100%", label: "Education Access"   },
  { icon: Home,     value: "365",  label: "Days of Shelter"    },
  { icon: Utensils, value: "3×",   label: "Meals Every Day"    },
];

/* ─── Pillars ───────────────────────────────────────────────── */
const pillars = [
  {
    icon: Home,
    title: "Safe Shelter",
    body: "Every child at Fountain of Hope has a warm bed, clean water, and a secure environment to call home — free from danger and neglect.",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: BookOpen,
    title: "Quality Education",
    body: "We ensure 100% school enrollment and provide learning materials, tutoring, and mentorship so every child can unlock their full potential.",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Utensils,
    title: "Nutritious Meals",
    body: "Three balanced meals a day, every single day. No child goes to bed hungry at Fountain of Hope — because nourishment is a right, not a privilege.",
    color: "bg-rose-500/10 text-rose-400",
  },
  {
    icon: Heart,
    title: "Love & Belonging",
    body: "Beyond material needs, we invest in counselling, play, community, and spiritual formation — healing hearts and building resilient futures.",
    color: "bg-violet-500/10 text-violet-400",
  },
];

/* ─── Donation presets ──────────────────────────────────────── */
const PRESETS_KES = [200, 500, 1000, 2500, 5000];
const PRESETS_USD = [5, 10, 25, 50, 100];

// ─── REPLACE with your real Paystack Public Key ─────────────────
const PAYSTACK_KEY = "pk_live_REPLACE_WITH_YOUR_PAYSTACK_PUBLIC_KEY";
const DONATION_EMAIL = "amazolaherbspice@gmail.com";

/* ═══════════════════════════════════════════════════════════════ */
const FountainOfHope = () => {
  /* carousel */
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);
  const prev = () => setActive((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setActive((p) => (p + 1) % slides.length);

  /* payment */
  const [payTab, setPayTab] = useState<"mpesa" | "card">("mpesa");
  const [currency, setCurrency]  = useState<"KES" | "USD">("KES");
  const [preset, setPreset]      = useState<number | null>(500);
  const [custom, setCustom]      = useState("");
  const [phone, setPhone]        = useState("");
  const [donorName, setDonorName]= useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [payState, setPayState]  = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errMsg, setErrMsg]      = useState("");
  const paystackLoaded = useRef(false);

  /* load Paystack inline script once */
  useEffect(() => {
    if (paystackLoaded.current) return;
    const s = document.createElement("script");
    s.src = "https://js.paystack.co/v1/inline.js";
    s.async = true;
    s.onload = () => { paystackLoaded.current = true; };
    document.body.appendChild(s);
  }, []);

  const amount = Number(custom) || preset || 0;

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setErrMsg("");

    if (!amount || amount < 1) { setErrMsg("Please enter or select a donation amount."); return; }
    if (!donorEmail) { setErrMsg("Please enter your email address."); return; }
    if (payTab === "mpesa" && !phone) { setErrMsg("Please enter your M-PESA phone number."); return; }

    const PaystackPop = (window as any).PaystackPop;
    if (!PaystackPop) { setErrMsg("Payment system is loading — please wait a moment and try again."); return; }

    setPayState("loading");

    const handler = PaystackPop.setup({
      key: PAYSTACK_KEY,
      email: donorEmail,
      amount: currency === "KES" ? amount * 100 : amount * 100,
      currency,
      channels: payTab === "mpesa" ? ["mobile_money"] : ["card"],
      ...(payTab === "mpesa" && { phone }),
      metadata: {
        custom_fields: [
          { display_name: "Donor Name",    variable_name: "donor_name",    value: donorName || "Anonymous" },
          { display_name: "Payment Type",  variable_name: "payment_type",  value: payTab === "mpesa" ? "M-PESA STK Push" : "Card" },
          { display_name: "Campaign",      variable_name: "campaign",      value: "Fountain of Hope Donation" },
        ],
      },
      callback: () => { setPayState("success"); },
      onClose: () => { setPayState("idle"); },
    });

    handler.openIframe();
  };

  return (
    <div className="pt-20">

      {/* ══ HERO CAROUSEL ══════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[520px] flex items-end justify-center overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div key={active} variants={imgVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0">
            <img src={slides[active].img} alt={slides[active].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          </motion.div>
        </AnimatePresence>

        <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute top-8 left-1/2 -translate-x-1/2 z-20 px-5 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
          <span className="text-white/90 text-sm font-semibold tracking-widest uppercase">Fountain of Hope Rescue Center</span>
        </motion.div>

        <div className="relative z-20 text-center px-6 pb-20 w-full max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.55, delay: 0.25 }}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">{slides[active].title}</h1>
              <p className="mt-4 text-base sm:text-lg text-white/75 max-w-xl mx-auto">{slides[active].caption}</p>
              <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
                <a href="#donate" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_40px_-8px_hsl(125_60%_40%_/_0.6)] transition-all duration-300">
                  <Heart className="h-4 w-4" /> Donate Now
                </a>
                <a href="#story" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white font-semibold hover:bg-white/10 transition-all duration-300">
                  Our Story <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-8 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"}`} />
          ))}
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"><ChevronLeft className="h-5 w-5" /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/25 hover:bg-black/50 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110"><ChevronRight className="h-5 w-5" /></button>
      </section>

      {/* ══ IMPACT STATS STRIP ═════════════════════════════════════ */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="container-max">
          <RevealSection>
            <div className="glass-card p-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {impacts.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2 opacity-80" />
                  <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══ STORY ══════════════════════════════════════════════════ */}
      <section id="story" className="section-padding">
        <div className="container-max">
          <RevealSection>
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="space-y-6">
                <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">Our Story</p>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Where Every Child <span className="text-gradient">Finds Home</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  The Fountain of Hope Rescue Center was founded on a simple but powerful belief — that every child, regardless of circumstance, deserves shelter, love, education, and a future worth dreaming about.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The center provides a permanent home for orphaned and vulnerable children in Kenya. Our dedicated staff and caregivers pour themselves into creating a family environment where healing, growth, and joy are possible every single day.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Amazola Sweet Lounge was born with this center at its heart. A portion of every meal served goes directly toward keeping the lights on, the children fed, and their school fees paid. When you dine with us, you become part of that story.
                </p>
                <div className="flex items-center gap-4 pt-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-primary/30">
                    <img src={foh2Img} alt="Children" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Fountain of Hope Rescue Center</p>
                    <p className="text-muted-foreground text-xs">Verified rescue center map pin available below</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden shadow-xl row-span-2">
                  <img src={foh2Img} alt="Fountain of Hope" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={fountain1Img} alt="Children at the center" className="w-full h-64 object-cover" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <img src={foh3Img} alt="Meals for children" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══ DARK BANNER — QUOTE ═══════════════════════════════════ */}
      <section className="bg-forest-dark py-20 noise-bg">
        <div className="container-max text-center relative z-10">
          <RevealSection>
            <Star className="h-8 w-8 text-primary mx-auto mb-6 opacity-60" />
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
              "A child who is loved and educated today becomes the leader who changes Kenya tomorrow."
            </blockquote>
            <p className="mt-6 text-muted-foreground">— Fountain of Hope Rescue Center</p>
          </RevealSection>
        </div>
      </section>

      {/* ══ WHAT WE PROVIDE ════════════════════════════════════════ */}
      <section className="section-padding leaf-pattern">
        <div className="container-max">
          <RevealSection>
            <div className="text-center mb-14">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">What We Do</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Built on Four Pillars</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Everything we do for the children of Fountain of Hope is grounded in these four commitments.
              </p>
            </div>
          </RevealSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <RevealSection key={p.title} delay={i * 0.08}>
                <div className="glass-card p-7 h-full flex flex-col gap-4 hover:border-primary/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${p.color}`}>
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p.body}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW YOUR MEAL HELPS ════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <img src={fountain1Img} alt="Children" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-max relative z-10 py-20">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">The Connection</p>
              <h2 className="font-display text-4xl font-bold text-foreground">How Every Meal Helps</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              {[
                { step: "01", title: "You Dine at Amazola", desc: "Enjoy authentic African food in a warm, forest-inspired setting in Kabuku, Limuru." },
                { step: "02", title: "A Portion is Set Aside", desc: "A percentage of every bill is automatically directed to the Fountain of Hope Rescue Center." },
                { step: "03", title: "A Child is Nourished", desc: "That contribution feeds, clothes, and educates a child who calls Fountain of Hope home." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══ MAP ════════════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-max">
          <RevealSection>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-2">Visit Us</p>
                <h2 className="font-display text-3xl font-bold text-foreground flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" /> Find Fountain of Hope
                </h2>
              </div>
              <a href="https://share.google/id99RsRIGTJkKtiVZ" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap">
                <MapPin className="h-4 w-4" /> Open Exact Rescue Center Pin
              </a>
            </div>
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border/30 h-80">
                <iframe
                  title="Fountain of Hope Rescue Center Location"
                  src="https://maps.google.com/maps?q=-1.1553409,36.6676932&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="glass-card p-7 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">Verified Directions</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">Use the rescue center's exact Google Maps pin</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  To avoid confusion with the restaurant location, we have linked the verified rescue center map pin directly. Tap below for the exact route and live directions.
                </p>
                <a
                  href="https://share.google/id99RsRIGTJkKtiVZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_-8px_hsl(125_60%_40%_/_0.45)] transition-all duration-300"
                >
                  <MapPin className="h-4 w-4" /> Open Rescue Center Directions
                </a>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ══ DONATE ═════════════════════════════════════════════════ */}
      <section id="donate" className="section-padding bg-forest-dark noise-bg">
        <div className="container-max relative z-10">
          <RevealSection>
            <div className="text-center mb-12">
              <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold mb-3">Make a Difference</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">Support Fountain of Hope</h2>
              <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
                Your generosity changes lives. Every contribution — however small — helps provide food, shelter, and education to a child in Kenya.
              </p>
            </div>
          </RevealSection>

          <AnimatePresence mode="wait">
            {payState === "success" ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center glass-card p-16 max-w-xl mx-auto">
                <CheckCircle className="h-20 w-20 text-primary mx-auto mb-5" />
                <h3 className="font-display text-3xl font-bold text-foreground mb-3">Thank You! 🙏</h3>
                <p className="text-muted-foreground text-lg mb-2">Your donation has been received.</p>
                <p className="text-muted-foreground">You are now part of the Fountain of Hope family. The children thank you.</p>
                <button onClick={() => setPayState("idle")} className="mt-8 text-sm text-primary underline underline-offset-4">
                  Make another donation
                </button>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0 }}>
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 items-start max-w-5xl mx-auto">

                  {/* Left — why donate */}
                  <RevealSection direction="left">
                    <div className="space-y-6">
                      <div className="glass-card p-7">
                        <h3 className="font-display text-xl font-bold text-foreground mb-5">Your Impact</h3>
                        {[
                          { amount: "KES 200", impact: "Provides a full meal for one child" },
                          { amount: "KES 500", impact: "Buys school supplies for a week" },
                          { amount: "KES 1,000", impact: "Covers a child's monthly toiletries" },
                          { amount: "KES 2,500", impact: "Pays a month of school transport" },
                          { amount: "KES 5,000", impact: "Covers a child's full term fees" },
                        ].map((item) => (
                          <div key={item.amount} className="flex items-start gap-3 py-3 border-b border-border/20 last:border-0">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            <div>
                              <span className="text-primary font-bold text-sm">{item.amount}</span>
                              <span className="text-muted-foreground text-sm"> — {item.impact}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="glass-card p-6 flex items-start gap-4">
                        <Shield className="h-8 w-8 text-primary shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Safe & Secure Payments</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            All transactions are processed securely via Paystack — trusted by thousands of African businesses. Your card or M-PESA details are never stored on our servers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealSection>

                  {/* Right — payment form */}
                  <RevealSection direction="right">
                    <form onSubmit={handlePay} className="glass-card p-7 sm:p-8 space-y-6">

                      {/* Payment method tabs */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">Payment Method</p>
                        <div className="grid grid-cols-2 gap-3">
                          {(["mpesa", "card"] as const).map((tab) => (
                            <button key={tab} type="button" onClick={() => { setPayTab(tab); setCurrency(tab === "mpesa" ? "KES" : "USD"); setPreset(tab === "mpesa" ? 500 : 10); setCustom(""); }}
                              className={`flex items-center justify-center gap-2.5 py-3.5 rounded-2xl border-2 font-semibold text-sm transition-all duration-200 ${payTab === tab ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                              {tab === "mpesa" ? <Smartphone className="h-4 w-4" /> : <CreditCard className="h-4 w-4" />}
                              {tab === "mpesa" ? "M-PESA STK Push" : "Visa / Mastercard"}
                            </button>
                          ))}
                        </div>
                        {payTab === "mpesa" && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            An STK push prompt will be sent directly to your Safaricom number.
                          </p>
                        )}
                        {payTab === "card" && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            International donors — pay securely with Visa, Mastercard, or any global card.
                          </p>
                        )}
                      </div>

                      {/* Amount presets */}
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-3">
                          Donation Amount ({currency})
                        </p>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                          {(currency === "KES" ? PRESETS_KES : PRESETS_USD).map((p) => (
                            <button key={p} type="button" onClick={() => { setPreset(p); setCustom(""); }}
                              className={`py-2 rounded-xl text-sm font-bold border-2 transition-all duration-200 ${preset === p && !custom ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"}`}>
                              {currency === "KES" ? `${p}` : `$${p}`}
                            </button>
                          ))}
                        </div>
                        <input type="number" min="1" value={custom}
                          onChange={(e) => { setCustom(e.target.value); setPreset(null); }}
                          placeholder={`Custom amount (${currency})`}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm" />
                      </div>

                      {/* Donor details */}
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Your Details</p>
                        <input type="text" placeholder="Your name (optional)" value={donorName} onChange={(e) => setDonorName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm" />
                        <input type="email" placeholder="Email address *" required value={donorEmail} onChange={(e) => setDonorEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm" />
                        {payTab === "mpesa" && (
                          <input type="tel" placeholder="M-PESA phone e.g. 0712345678 *" value={phone} onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm" />
                        )}
                      </div>

                      {/* Error */}
                      {errMsg && (
                        <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">{errMsg}</p>
                      )}

                      {/* Submit */}
                      <button type="submit" disabled={payState === "loading"}
                        className="w-full py-4 rounded-full font-bold text-base flex items-center justify-center gap-2.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed bg-primary text-primary-foreground hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.6)]">
                        {payState === "loading" ? (
                          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" /> Processing…</span>
                        ) : payTab === "mpesa" ? (
                          <><Smartphone className="h-5 w-5" /> Send STK Push — {currency} {amount || "?"}</>
                        ) : (
                          <><CreditCard className="h-5 w-5" /> Pay with Card — {currency === "USD" ? "$" : "KES "}{amount || "?"}</>
                        )}
                      </button>

                      <p className="text-center text-xs text-muted-foreground/60">
                        Powered by Paystack · 256-bit SSL encryption · No data stored
                      </p>
                    </form>
                  </RevealSection>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
};

export default FountainOfHope;
