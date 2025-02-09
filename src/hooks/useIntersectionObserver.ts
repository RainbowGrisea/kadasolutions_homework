import { RefObject, useEffect } from "react";

export const useIntersectionObserver = (
  target: RefObject<HTMLElement | null>,
  onIntersect: () => void,
  enabled?: boolean,
) => {
  useEffect(() => {
    if (!enabled || !target) return;

    const currentTarget = target.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    });

    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [target, onIntersect, enabled]);
};
