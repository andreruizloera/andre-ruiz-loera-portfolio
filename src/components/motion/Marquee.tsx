import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  /** Seconds for one full loop. Lower = faster. */
  speed?: number;
}

/**
 * Infinite horizontal marquee. We render the list twice and translate the
 * track by exactly -50%, so the second copy lands where the first started —
 * a seamless loop with no jump.
 */
const Marquee = ({ items, speed = 18 }: MarqueeProps) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-mono text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </motion.div>
      {/* fade edges so chips dissolve instead of hard-cutting */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
};

export default Marquee;
