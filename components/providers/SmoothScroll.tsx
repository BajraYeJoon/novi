"use client";

import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: { offset: 88, duration: 1.1 },
      }}
    >
      {children}
    </ReactLenis>
  );
}