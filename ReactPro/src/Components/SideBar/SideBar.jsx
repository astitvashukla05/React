import Button from "../button";

export default function SideBar({ onClick, currProject, onSelect }) {
  return (
    <aside
      className="
        w-full md:w-72
        px-6 py-10
        bg-white/8 backdrop-blur-[8px]
        border border-white/10
        rounded-2xl
        shadow-[0_4px_10px_rgba(0,0,0,0.12)]
        text-stone-200
        flex flex-col
        transition-colors duration-300 ease-in-out
        font-sans
      "
    >
      <h2 className="mb-6 font-bold uppercase text-lg md:text-xl tracking-wide select-none text-stone-300">
        Your Projects
      </h2>

      <div className="mb-6">
        <Button
          onClick={onClick}
          className="
            bg-stone-700 text-stone-300 font-semibold
            px-5 py-2 rounded-md
            shadow-md
            transition
            transform
            hover:scale-105
            hover:bg-stone-600
            hover:text-white
            focus:outline-none focus:ring-2 focus:ring-stone-400
          "
        >
          + Add Projects
        </Button>
      </div>

      <ul className="space-y-2 flex-grow overflow-y-auto">
        {currProject.length > 0 &&
          currProject.map((project) =>
            project.title ? (
              <li key={project.id}>
                <button
                  className="
                    w-full text-left px-3 py-2
                    rounded-lg
                    bg-stone-300
                    text-stone-800
                    font-medium
                    transition-colors duration-300 ease-in-out
                    hover:bg-white/15
                    hover:text-black
                    hover:shadow-inner
                    hover:border-l-4 hover:border-sky-200
                    focus:outline-none focus:ring-2 focus:ring-sky-2200
                  "
                  onClick={() => onSelect(project.id)}
                >
                  {project.title}
                </button>
              </li>
            ) : null
          )}
      </ul>
    </aside>
  );
}
