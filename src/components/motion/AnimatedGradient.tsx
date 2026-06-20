import { ReactNode } from "react";

interface AnimatedGradientProps {
  children: ReactNode;
  className?: string;
}

/**
 * An animated, slowly-drifting multi-stop gradient backdrop. Pure CSS —
 * no canvas, no WebGL — so it's cheap and runs everywhere. The keyframes
 * live in index.css under `@keyframes gradient-drift`.
 */
const AnimatedGradient = ({ children, className = "" }: AnimatedGradientProps) => (
  <div
    className={`relative overflow-hidden rounded-2xl ${className}`}
    style={{
      backgroundImage:
        "linear-gradient(120deg, hsl(215 28% 17%), hsl(199 89% 28%), hsl(262 60% 35%), hsl(215 28% 17%))",
      backgroundSize: "300% 300%",
      animation: "gradient-drift 14s ease infinite",
    }}
  >
    {/* soft grain/vignette overlay for depth */}
    <div
      className="pointer-events-none absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 45%)",
      }}
    />
    <div className="relative">{children}</div>
  </div>
);

export default AnimatedGradient;
