/**
 * useScrollTo Hook
 *
 * Returns a ref and a function to smoothly scroll to the referenced element.
 * Usage: Attach the ref to a DOM element and call the scrollTo function to scroll to it.
 */
import { useRef, useCallback } from "react";

const useScrollTo = (offset = 0) => {
  const ref = useRef(null);

  const scrollTo = useCallback(() => {
    if (ref.current) {
      const top =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [offset]);

  return [ref, scrollTo];
};

export default useScrollTo;
