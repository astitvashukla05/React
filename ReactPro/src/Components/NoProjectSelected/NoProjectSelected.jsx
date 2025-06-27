import logo from "../../assets/no-projects.png";
import Button from "../button";

export default function NoProjectSelected({ onClick }) {
  return (
    <div className="mt-24 text-center w-2/3 mx-auto">
      <img
        src={logo}
        alt="task list"
        className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto mb-6"
      />
      <h2 className="text-2xl font-semibold text-white/80 mb-2 select-none">
        No Project Selected
      </h2>
      <p className="text-white/60 mb-6">
        Select a Project or Get Started With a New One
      </p>
      <p>
        <Button
          onClick={onClick}
          className="bg-stone-800 hover:bg-stone-900 text-white px-6 py-3 rounded-lg shadow-md shadow-black/40 transition"
        >
          Add New Project
        </Button>
      </p>
    </div>
  );
}
