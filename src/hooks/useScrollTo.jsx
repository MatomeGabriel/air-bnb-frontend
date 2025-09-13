import { useCallback, useRef } from "react";

const useScrollTo = () => {
  const ref = useRef(null);

  const scrollTo = useCallback(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return [ref, scrollTo];
};

export default useScrollTo;
