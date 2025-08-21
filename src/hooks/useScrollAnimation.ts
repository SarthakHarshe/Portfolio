import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollAnimationOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  animation?: gsap.TweenVars;
}

export function useScrollAnimation(options: ScrollAnimationOptions) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animation = gsap.to(elementRef.current, {
      ...options.animation,
      scrollTrigger: {
        trigger: options.trigger || elementRef.current,
        start: options.start || "top 85%",
        end: options.end || "bottom top",
        scrub: options.scrub || false,
      },
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
}


