import { useEffect, useState } from "react";

/**
 * useMedia
 * Custom hook to track media query matches in real-time.
 * Useful for responsive behavior based on screen size or device features.
 *
 * @param {string} query - A valid CSS media query string (e.g. "(max-width: 768px)")
 * @returns {boolean} - Whether the media query currently matches
 */
const useMedia = (query) => {
  // matches is true or false
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    // 1. track changes on the screen width
    const mediaQuery = window.matchMedia(query);
    const handleChange = (e) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    // set our value
    setMatches(mediaQuery.matches);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
};

export default useMedia;
