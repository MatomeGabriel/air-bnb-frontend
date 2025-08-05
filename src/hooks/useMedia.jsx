import React, { useEffect, useState } from "react";

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
  console.log(window.matchMedia(query));
  console.log(matches);
  return matches;
};

export default useMedia;
