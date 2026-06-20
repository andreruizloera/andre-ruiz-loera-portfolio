import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * 3D pointer-tracking tilt. We track the cursor's position inside the card as
 * a 0..1 value, map it to a few degrees of rotation, and smooth it with a
 * spring so it settles instead of snapping. Resets on mouse-leave.
 */
const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
