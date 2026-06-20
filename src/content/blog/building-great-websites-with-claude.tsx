import Reveal from "@/components/motion/Reveal";
import AnimatedGradient from "@/components/motion/AnimatedGradient";
import Marquee from "@/components/motion/Marquee";
import StaggerText from "@/components/motion/StaggerText";
import TiltCard from "@/components/motion/TiltCard";

/** Small wrapper so every live demo gets a consistent "try it" frame. */
const Demo = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <figure className="my-8">
    <div className="rounded-2xl border border-border bg-muted/40 p-6">{children}</div>
    <figcaption className="mt-2 text-center text-xs font-mono uppercase tracking-wide text-muted-foreground">
      live demo · {label}
    </figcaption>
  </figure>
);

const Code = ({ children }: { children: React.ReactNode }) => (
  <pre className="my-6 overflow-x-auto rounded-xl border border-border bg-foreground/[0.03] p-4 text-sm">
    <code className="font-mono text-foreground/90">{children}</code>
  </pre>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display mt-12 mb-4 text-3xl font-bold">{children}</h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-4 text-lg leading-relaxed text-foreground/80">{children}</p>
);

const BuildingGreatWebsitesWithClaude = () => {
  return (
    <article className="prose-none">
      {/* HERO */}
      <AnimatedGradient className="mb-12 p-10 text-white">
        <p className="mb-3 font-mono text-sm uppercase tracking-widest text-white/70">
          A field guide
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
          <StaggerText text="How to Build Great Websites with Claude" />
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          The “crazy” designs you screenshot from award galleries aren’t magic.
          They’re a handful of repeatable techniques. This post walks the stack —
          and every effect you see here is live, running in your browser, and
          written from scratch.
        </p>
      </AnimatedGradient>

      <Reveal>
        <P>
          I kept sending myself links to sites like motionsites.ai and Awwwards
          winners thinking <em>how is this even built?</em> After rebuilding a
          few, the answer is anticlimactic: it’s mostly four or five effects,
          composed with taste, on a boring-but-solid stack. The hard part isn’t
          the WebGL — it’s the restraint. Here’s the whole playbook, plus how I
          actually drive Claude to produce it.
        </P>
      </Reveal>

      <H2>The stack that does the heavy lifting</H2>
      <Reveal>
        <P>
          You don’t need a bespoke renderer. Almost everything in the “premium”
          look comes from this short list, and it’s all free:
        </P>
        <Marquee
          items={[
            "React + Vite",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP ScrollTrigger",
            "Lenis (smooth scroll)",
            "React Three Fiber",
            "Shaders / WebGL",
            "Embla (carousels)",
          ]}
        />
        <P>
          The marquee above is the first live demo. It’s ~20 lines: render the
          list twice, translate the track by exactly −50%, loop forever. No
          library beyond Framer Motion. That “seamless infinite scroll” you see
          on logo walls everywhere — that’s the whole trick.
        </P>
      </Reveal>

      <H2>Effect 1 — Scroll reveals (80% of the “feel”)</H2>
      <Reveal>
        <P>
          If you add one thing, add this. Content fades and rises as it enters
          the viewport. It costs nothing and instantly reads as “designed.” In
          Framer Motion it’s a single prop:
        </P>
        <Code>{`<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
/>`}</Code>
        <P>
          The easing curve matters more than people admit. That
          <code className="mx-1 rounded bg-muted px-1 font-mono text-sm">
            [0.22, 1, 0.36, 1]
          </code>
          is an “ease-out-expo” — fast start, gentle settle. Linear easing is
          what makes amateur animation feel cheap. Every block on this page,
          including this paragraph, animated in with that curve.
        </P>
      </Reveal>

      <H2>Effect 2 — Word-by-word headline reveals</H2>
      <Reveal>
        <Demo label="staggered text">
          <p className="font-display text-2xl font-bold md:text-3xl">
            <StaggerText text="Split the line into words. Stagger them. Let the easing do the rest." />
          </p>
        </Demo>
        <P>
          One container with <code className="font-mono">staggerChildren</code>{" "}
          orchestrates the timing; each word inherits its own delay
          automatically. No per-word index math, no timeline library. Scroll
          back up and it replays the next time it enters view.
        </P>
      </Reveal>

      <H2>Effect 3 — Animated gradient backdrops</H2>
      <Reveal>
        <P>
          The hero at the top of this post is a pure-CSS drifting gradient — a
          300%-sized multi-stop background nudged around with one keyframe. No
          canvas, no shader, runs on a phone from 2018:
        </P>
        <Code>{`@keyframes gradient-drift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`}</Code>
        <P>
          People assume these are WebGL. Most of the time they’re four color
          stops and an <code className="font-mono">animation</code> line. Reach
          for real shaders only when you need fluid/noise effects CSS can’t fake.
        </P>
      </Reveal>

      <H2>Effect 4 — Pointer-tracking 3D tilt</H2>
      <Reveal>
        <Demo label="hover / move your cursor over the card">
          <TiltCard className="mx-auto max-w-sm">
            <p className="font-display text-xl font-bold">Move your cursor here</p>
            <p className="mt-2 text-foreground/70">
              The card tracks your pointer, maps position to a few degrees of
              rotation, and a spring smooths it so it settles instead of
              snapping.
            </p>
          </TiltCard>
        </Demo>
        <P>
          The “expensive” feeling here is entirely the spring. Without it the
          card jitters one-to-one with the mouse and feels broken; with{" "}
          <code className="font-mono">useSpring</code> it has weight. That’s the
          recurring lesson — the physics, not the geometry, sells it.
        </P>
      </Reveal>

      <H2>How I actually drive Claude to build this</H2>
      <Reveal>
        <P>
          The stack is half the battle; prompting is the other half. What
          consistently works for me:
        </P>
        <ul className="mb-6 ml-6 list-disc space-y-2 text-lg text-foreground/80">
          <li>
            <strong>Name the effect, not the vibe.</strong> “Add a scroll-reveal
            with ease-out-expo and a staggered word headline” beats “make it pop.”
            Claude knows the named techniques.
          </li>
          <li>
            <strong>Ask for one reusable primitive at a time.</strong> A{" "}
            <code className="font-mono">&lt;Reveal/&gt;</code>, a{" "}
            <code className="font-mono">&lt;Marquee/&gt;</code> — then compose
            them. Small components are easy to verify and reuse.
          </li>
          <li>
            <strong>Demand reduced-motion support up front.</strong> One{" "}
            <code className="font-mono">prefers-reduced-motion</code> media query
            kills every animation for users who need it. It’s an accessibility
            requirement, not a nicety.
          </li>
          <li>
            <strong>Insist on original code.</strong> Don’t paste someone’s
            template and ship it — the effects are generic, the implementations
            should be yours. Everything on this page was written from the
            primitives, not copied from a gallery.
          </li>
        </ul>
      </Reveal>

      <H2>The honest takeaway</H2>
      <Reveal>
        <TiltCard className="my-8 bg-foreground text-background">
          <p className="font-display text-2xl font-bold">80% taste, 20% tech.</p>
          <p className="mt-3 text-background/80">
            The libraries are free and everyone has them. What separates a great
            site is typography, timing, easing, and the discipline to use three
            effects instead of ten. Claude can write all of it in an afternoon —
            your job is to art-direct.
          </p>
        </TiltCard>
        <P>
          Pick one effect from this page, ask Claude for a clean reusable version,
          and drop it into your next project. Stack a few of those and you’ve got
          the “how is this built” site. It was never the WebGL.
        </P>
      </Reveal>
    </article>
  );
};

export default BuildingGreatWebsitesWithClaude;
