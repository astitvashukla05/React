import { useState } from "react";
import NewTask from "../NewTask/NewTask";

export default function Tasks() {
  const [tasks, setNewTasks] = useState([]);

  function addTask(task) {
    if (task.trim() === "") return;
    setNewTasks((prev) => [...prev, task]);
  }
  function deleteTask(currIndex) {
    setNewTasks((prev) => prev.filter((_, index) => index !== currIndex));
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-6 select-none">
        Tasks
      </h2>
      <NewTask addNewTask={addTask} />
      {tasks.length === 0 && (
        <p className="text-lg text-stone-800 mt-8 mb-6 select-none">
          This Project has no tasks yet
        </p>
      )}
      <ul className="mt-6 space-y-4">
        {tasks.length > 0 &&
          tasks.map((task, index) => (
            <li
              key={index}
              className="
                flex justify-between items-center
                bg-white/10
                backdrop-blur-sm
                p-4 rounded-xl
                hover:shadow-lg
                transition-shadow duration-300
              "
            >
              <span className="text-stone-800 font-medium text-lg select-text">
                {task}
              </span>
              <button
                className="
                  px-4 py-1 text-sm font-semibold
                  text-red-400 hover:text-red-600
                  bg-red-900/40 hover:bg-red-900/60
                  rounded-md shadow-sm
                  transition duration-300
                  select-none cursor-pointer
                "
                onClick={() => {
                  deleteTask(index);
                }}
              >
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
