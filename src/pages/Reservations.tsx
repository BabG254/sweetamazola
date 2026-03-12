import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import { CalendarDays, Clock, Users, Phone, User, CheckCircle, Sparkles } from "lucide-react";

const Reservations = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding leaf-pattern">
        <div className="container-max max-w-2xl">
          <RevealSection>
            <SectionHeader
              subtitle="Reservations"
              title="Reserve Your Table"
              description="Book your spot at Amazola Sweet Lounge and enjoy a memorable dining experience surrounded by nature."
            />
          </RevealSection>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center glass-card p-12"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-primary" />
                </div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Reservation Confirmed!
                </h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Thank you for your reservation. We'll reach out to confirm your booking shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-semibold hover:underline"
                >
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <RevealSection delay={0.1}>
                <motion.form
                  key="form"
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="glass-card p-8 sm:p-10 space-y-6"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm font-medium">Free booking — no deposit required</span>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <User className="h-4 w-4 text-primary/60" /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Phone className="h-4 w-4 text-primary/60" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      placeholder="0700 000 000"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <CalendarDays className="h-4 w-4 text-primary/60" /> Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock className="h-4 w-4 text-primary/60" /> Time
                      </label>
                      <input
                        type="time"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <Users className="h-4 w-4 text-primary/60" /> Number of Guests
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[0_0_50px_-10px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
                  >
                    Confirm Reservation
                  </button>
                </motion.form>
              </RevealSection>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
