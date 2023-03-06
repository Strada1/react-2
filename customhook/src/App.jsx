import React from "react";
import "./App.css";
import { useWidth } from "./hooks/useWidth";

function App() {
  const { isDesktop, isMobile, width } = useWidth();
  if (isDesktop) return <div>Desktop {width}</div>;
  if (isMobile) return <div>Mobile {width}</div>;
  if (!isDesktop && !isMobile) return <div>Unkown {width}</div>;
}

export default App;
