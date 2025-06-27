import { useRef } from "react";

export default function NewTask({ addNewTask }) {
  const task = useRef();

  function handleAdd() {
    if (task.current.value.trim() === "") return;
    addNewTask(task.current.value);
    task.current.value = "";
  }

  return (
    <div className="flex items-center gap-4">
      <input
        ref={task}
        className="
          w-64
          px-3 py-2
          rounded-lg
          bg-white/20
          border border-white/30
          text-stone-800
          placeholder-stone-800
          focus:outline-none
          focus:ring-2 focus:ring-sky-200
          transition
          backdrop-blur-sm
        "
        placeholder="Enter new task"
        type="text"
      />
      <button
        onClick={handleAdd}
        className="
          text-white
          bg-stone-800
          px-5 py-2
          rounded-lg
          hover:bg-stone-900
          shadow-md shadow-black/40
          transition
          focus:outline-none focus:ring-2 focus:ring-sky-500
          select-none
          cursor-pointer
        "
      >
        Add Task
      </button>
    </div>
  );
}
