export const blurIn = (delay = 0, active = true) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: active ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});