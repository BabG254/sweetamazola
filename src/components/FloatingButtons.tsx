import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => (
  <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
    <motion.a
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      href="https://wa.me/254757053405"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_30px_-5px_hsl(125_60%_40%_/_0.5)] hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </motion.a>
    <motion.a
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
      href="tel:0757053405"
      className="flex items-center justify-center w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-[0_0_30px_-5px_hsl(30_80%_55%_/_0.4)] hover:scale-110 transition-all duration-300"
      aria-label="Call us"
    >
      <Phone className="h-6 w-6" />
    </motion.a>
  </div>
);

export default FloatingButtons;
