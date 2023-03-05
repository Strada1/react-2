import React from "react";
import "./App.css";
import PrioritySection from "../PrioritySection/PrioritySection";

function App() {
  return (
    <section className="container">
      <div className="to-do-list">
        <PrioritySection title="High" />
        <PrioritySection title="Low" />
      </div>
    </section>
  );
}

export default App;
