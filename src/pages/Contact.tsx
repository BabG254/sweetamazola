import SectionHeader from "@/components/SectionHeader";
import RevealSection from "@/components/RevealSection";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "0757 053 405", href: "tel:0757053405" },
  { icon: Mail, label: "Email", value: "amazolaherbspice@gmail.com", href: "mailto:amazolaherbspice@gmail.com" },
  { icon: MapPin, label: "Location", value: "Kabuku, Limuru, Kenya", href: undefined },
  { icon: Clock, label: "Hours", value: "Mon–Sun: 7am – 10pm", href: undefined },
];

const Contact = () => (
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <RevealSection key={info.label} delay={i * 0.08} direction="left">
                <div className="glass-card p-6 flex items-start gap-4 group hover:border-primary/30 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Map */}
          <RevealSection direction="right">
            <div className="glass-card overflow-hidden rounded-2xl h-80 md:h-full md:min-h-[400px]">
              <iframe
                title="Amazola Sweet Lounge Location"
                src="https://maps.google.com/maps?q=Kabuku,+Limuru,+Kenya&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
