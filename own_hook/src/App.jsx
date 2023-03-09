import React from "react";
import { useScreen } from "./useScreen";

function App() {
  const { width, isMobile, isDesktop } = useScreen();

  return (
    <div>
      Width of your device is {width}px. You are using{" "}
      {isMobile ? "Mobile" : "Desktop"} device.
    </div>
  );
}

export default App;
