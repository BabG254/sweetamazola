import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const RevealSection = ({ children, className = "", delay = 0, direction = "up" }: Props) => {
  const initial = direction === "up"
    ? { opacity: 0, y: 60 }
    : direction === "left"
    ? { opacity: 0, x: -60 }
    : direction === "right"
    ? { opacity: 0, x: 60 }
    : { opacity: 0, scale: 0.95 };

  const animate = direction === "up"
    ? { opacity: 1, y: 0 }
    : direction === "left" || direction === "right"
    ? { opacity: 1, x: 0 }
    : { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
