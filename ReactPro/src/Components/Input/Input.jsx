export default function Input({ label, textarea, type, ...props }) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-800">
        {label}
      </label>
      {textarea ? (
        <textarea
          {...props}
          className="w-full p-1 border-b-4 rounded-lg border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      ) : (
        <input
          type={type || "text"}
          {...props}
          className="w-full p-1 border-b-2 rounded-lg border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      )}
    </p>
  );
}
