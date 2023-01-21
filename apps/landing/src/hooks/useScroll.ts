import { useState, useEffect, useCallback } from "react";

export default function useScroll(): boolean {
  const [scroll, setScroll] = useState(true);

  const handleNavigation = useCallback(() => {
    setScroll(window.scrollY <= 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return !scroll;
}
