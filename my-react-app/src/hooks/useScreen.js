import { useState, useEffect } from "react"

const BREAKPOINTS = [576, 768, 992, 1200, 1400];
const DEFAULT_VALUE = '';

const useScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [breakpoint, setBreakpoint] = useState(DEFAULT_VALUE);

  useEffect(() => {
    const handleResize = ({ target }) => setWidth(target.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
      };
  }, []);

  useEffect(() => {
    BREAKPOINTS.forEach((point) => width >= point ? setBreakpoint(point) : null);
  }, [width]);

  return { width, breakpoint, isMobile: width <= BREAKPOINTS[1] };
};

export { useScreen };
