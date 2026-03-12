import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="bg-forest-dark border-t border-border/30">
    {/* Pre-footer CTA */}
    <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
      <div className="glass-card p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground">
            Join us for a meal
          </h3>
          <p className="text-muted-foreground mt-1">
            Experience the warmth of African hospitality.
          </p>
        </div>
        <Link
          to="/reservations"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_40px_-8px_hsl(125_60%_40%_/_0.4)] transition-all duration-300 whitespace-nowrap"
        >
          Reserve Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>

    <div className="divider-leaf" />

    <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="mb-5">
            <img
              src="/logo.png"
              alt="Amazola Sweet Lounge"
              className="h-20 w-auto max-w-[260px] object-contain"
            />
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            A forest-inspired natural dining experience celebrating authentic African cuisine
            in a warm, inviting atmosphere.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-foreground">Quick Links</h4>
          <div className="space-y-2.5">
            {[
              { to: "/menu", label: "Our Menu" },
              { to: "/reservations", label: "Reservations" },
              { to: "/about", label: "About Us" },
              { to: "/fountain-of-hope", label: "Fountain of Hope" },
              { to: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-5 text-foreground">Contact Us</h4>
          <div className="space-y-3.5">
            <a href="tel:0757053405" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4 text-primary/60" /> 0757 053 405
            </a>
            <a href="mailto:amazolaherbspice@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4 text-primary/60" /> amazolaherbspice@gmail.com
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary/60" /> Kabuku, Limuru, Kenya
            </div>
          </div>
        </div>
      </div>

      <div className="divider-leaf mt-12" />
      <div className="pt-8 text-center text-sm text-muted-foreground/60">
        &copy; {new Date().getFullYear()} Amazola Sweet Lounge. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
