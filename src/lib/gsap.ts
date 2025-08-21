import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect } from "react";

// Register GSAP plugins only on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Use layout effect on client, effect on server
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// GSAP context wrapper
export const useGSAP = (callback: () => void, deps: any[] = []) => {
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(callback);
    return () => ctx.revert();
  }, deps);
};

// Animation presets
export const fadeIn = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 1,
  ease: "power3.out",
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  duration: 1.2,
  ease: "power3.out",
};

// Scroll trigger defaults
export const scrollTriggerDefaults = {
  start: "top 85%",
  once: true,
};

export default gsap;


