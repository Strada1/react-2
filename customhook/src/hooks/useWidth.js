import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  useEffect(() => {
    if (width < 920) {
      setIsDesktop(false);
      setIsMobile(true);
    } else {
      setIsDesktop(true);
      setIsMobile(false);
    }
  }, [window.innerWidth]);
  return { isDesktop, isMobile, width };
};
