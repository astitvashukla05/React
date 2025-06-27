import Tasks from "../Tasks/Tasks";

export default function SelectedProject({ project, onDel }) {
  const formattedDate = new Date(project.date).toLocaleString("en-In", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20 text-stone-800 transition-colors duration-300">
      <header className="pb-4 mb-6 border-b border-white/30">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-800 mb-2 select-none">
            {project.title}
          </h1>
          <button
            className="text-red-400 hover:text-red-600 transition-colors duration-200 select-none"
            onClick={() => onDel(project.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-800 select-none">{formattedDate}</p>
        <p className="text-stone-800 whitespace-pre-wrap">{project.desc}</p>
      </header>
      <Tasks />
    </div>
  );
}
