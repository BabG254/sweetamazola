import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0757 053 405", href: "tel:0757053405" },
  { icon: Mail, label: "Email", value: "amazolaherbspice@gmail.com", href: "mailto:amazolaherbspice@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kabuku, Limuru, Kenya", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 7am – 10pm", href: undefined },
];

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding leaf-pattern">
        <div className="container-max">
          <RevealSection>
            <SectionHeader
              subtitle="Get in Touch"
              title="Contact Us"
              description="We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello."
            />
          </RevealSection>

          {/* Info cards + Form */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left — contact info cards */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <RevealSection key={info.label} delay={i * 0.07} direction="left">
                  <div className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-0.5">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </RevealSection>
              ))}
            </div>

            {/* Right — contact form */}
            <RevealSection delay={0.1} direction="right">
              {sent ? (
                <div className="glass-card p-10 text-center flex flex-col items-center justify-center min-h-[380px]">
                  <CheckCircle className="h-14 w-14 text-primary mx-auto mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-6 max-w-xs">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm text-primary underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="glass-card p-7 sm:p-8 space-y-5"
                >
                  <h3 className="font-display text-xl font-bold text-foreground">Send us a message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Phone <span className="text-muted-foreground/50 normal-case tracking-normal font-normal">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0700 000 000"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Subject <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Reservation, inquiry, feedback…"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us how we can help…"
                      className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-shadow text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-8px_hsl(125_60%_40%_/_0.5)] transition-all duration-300"
                  >
                    <Send className="h-4 w-4" /> Send Message
                  </button>
                </form>
              )}
            </RevealSection>
          </div>

          {/* Map — full width below */}
          <RevealSection delay={0.2}>
            <div className="mt-10 max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border/30 h-72 sm:h-80">
              <iframe
                title="Amazola Sweet Lounge Location"
                src="https://maps.google.com/maps?q=Kabuku,+Limuru,+Kenya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;

