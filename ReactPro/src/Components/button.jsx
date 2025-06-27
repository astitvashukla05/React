export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-2
        text-sm md:text-base
        rounded-lg
        bg-stone-800 text-white/85
        hover:bg-stone-700 hover:text-white
        shadow-md shadow-black/30
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-sky-500
        select-none
        cursor-pointer
      "
    >
      {children}
    </button>
  );
}
