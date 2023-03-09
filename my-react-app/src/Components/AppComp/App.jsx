import React, { useEffect, useState } from "react";
import "./App.css";
import PrioritySection from "../PrioritySection/PrioritySection";
import { tasks, PRIORITY } from "../Tasks/Tasks";
import { workWithJSON, workWithLocalStorage } from "../Utils/utils";

const tasksSections = [
  { priority: PRIORITY.HIGH, title: "HIGH" },
  { priority: PRIORITY.LOW, title: "LOW" },
];

function App() {
  const [stateTasks, setStateTasks] = useState(
    workWithJSON.parse(workWithLocalStorage.getItem("tasks")) || tasks
  );

  useEffect(() => {
    if (!workWithLocalStorage.getItem("tasks")) {
      workWithLocalStorage.setItem("tasks", workWithJSON.stringify(tasks));
    } else {
      workWithLocalStorage.setItem("tasks", workWithJSON.stringify(stateTasks));
    }
  }, [stateTasks]);

  const addTask = (task) => {
    setStateTasks([...stateTasks, task]);

    workWithLocalStorage.setItem("tasks", workWithJSON.stringify(stateTasks));
  };

  return (
    <section className="container">
      <div className="to-do-list">
        {tasksSections.map(({ priority, title }) => (
          <PrioritySection
            title={title}
            priority={priority}
            tasks={stateTasks}
            addTask={addTask}
            setTasks={setStateTasks}
            key={Math.random()}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
