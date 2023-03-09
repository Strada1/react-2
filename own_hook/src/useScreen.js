import { React, useState, useEffect } from "react";

export function useScreen() {
  const [width, setWidth] = useState(document.documentElement.clientWidth);

  useEffect(() => {
    function checkDeviceSize() {
      setWidth(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", checkDeviceSize);
  });

  return { width, isMobile: width <= 720, isDesktop: width > 720 };
}
