import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (width < 920) {
      setIsDesktop(false);
      setIsMobile(true);
    } else {
      setIsDesktop(true);
      setIsMobile(false);
    }
  }, [width]);
  return { isDesktop, isMobile, width };
};
