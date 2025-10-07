/**
 * useScrollTo
 * Custom hook that enables smooth scrolling to a referenced DOM element.
 *
 * @param {number} offset - Optional vertical offset in pixels to adjust scroll position (default: 0)
 * @returns {[React.RefObject, Function]} - A tuple:
 *   - ref: React ref to attach to the target DOM element
 *   - scrollTo: Function to trigger smooth scroll to the element's position
 *
 * @example
 * const [photoRef, scrollToPhoto] = useScrollTo(100);
 * <div ref={photoRef}>...</div>
 * <button onClick={scrollToPhoto}>Go to Photos</button>
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
