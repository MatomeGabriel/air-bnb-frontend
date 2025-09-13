import { useEffect, useRef, useState } from "react";

/**
 * useStickyToggle
 * Shows when the sentinel is not intersecting (i.e., you've scrolled past it)
 * @param {Object} options IntersectionObserver options
 *  - root, threshold, rootMargin
 * @returns {Object} { isSticky, sentinelRef }
 */

const useStickyToggle = (
  options = { root: null, threshold: 0, rootMargin: "0px" }
) => {
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(!entry.isIntersecting);
    }, options);
    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  console.log("Is Stickey", isSticky);
  return { isSticky, sentinelRef };
};

export default useStickyToggle;
