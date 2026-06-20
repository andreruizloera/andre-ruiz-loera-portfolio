import { motion } from "framer-motion";

interface StaggerTextProps {
  text: string;
  className?: string;
}

/**
 * Reveals a line word-by-word with a slight upward rise. The container
 * orchestrates the timing via `staggerChildren`, so each word inherits its
 * own delay automatically — no manual index math.
 */
const StaggerText = ({ text, className }: StaggerTextProps) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.08 }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: "0.4em" },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.span>
  );
};

export default StaggerText;
