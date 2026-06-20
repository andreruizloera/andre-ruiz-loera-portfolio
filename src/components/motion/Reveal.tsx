import { motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts. */
  delay?: number;
  /** Pixels to travel on the y-axis as it fades in. */
  y?: number;
  className?: string;
}

/**
 * Scroll-triggered fade + rise. Animates once when ~20% of the element
 * enters the viewport. The bread-and-butter "premium feel" effect.
 */
const Reveal = ({ children, delay = 0, y = 24, className }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
