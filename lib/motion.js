// Shared motion tokens — spring-based, disciplined, reused everywhere.
// Components read prefers-reduced-motion and fall back to calm/instant variants.

export const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
  mass: 0.9,
};

export const springSnappy = {
  type: "spring",
  stiffness: 320,
  damping: 26,
};

// Staggered container for orchestrated reveals
export const staggerContainer = (stagger = 0.08, delay = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

// Child item: rises + fades on enter (transform/opacity only → 60fps)
export const riseItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: spring },
};

// Reduced-motion equivalents: no transform, instant/short fade only
export const riseItemReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2 } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

// Standard viewport trigger for scroll reveals
export const inView = { once: true, amount: 0.3, margin: "0px 0px -10% 0px" };
