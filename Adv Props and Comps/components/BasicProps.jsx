import { useState } from "react";

function Button({ text, color, size = "small", onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        rounded-lg font-medium transition-all duration-300
        ${size === "small" ? "text-sm px-4 py-1.5" : ""}
        ${size === "large" ? "text-lg px-8 py-3" : ""}
        ${!size || size === "medium" ? "px-6 py-2" : ""}
        ${color === "primary" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
        ${color === "secondary" ? "bg-gray-500 hover:bg-gray-600 text-white" : ""}
        ${color === "danger" ? "bg-red-500 hover:bg-red-600 text-white" : ""}
        ${color === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
        ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:scale-105"}
        shadow-md
      `}
    >
      {text}
    </button>
  );
}

function BasicProps() {
  const [count, setCount] = useState(0);

  return (
    <section className="bg-white rounded-2xl shadow-2xl p-10 space-y-10">
      
      {/* Header */}
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">
          Basic Props
        </h2>
        <p className="text-gray-600 max-w-2xl">
          This section demonstrates how props control component behavior,
          appearance, size, and state in React.
        </p>
      </header>

      {/* Count Display */}
      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-5">
        <p className="text-lg font-medium text-gray-700">
          Button Click Count
        </p>
        <span className="text-3xl font-bold text-blue-600">
          {count}
        </span>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          🎨 Different Colors
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button text="Primary" color="primary" onClick={() => setCount(count + 1)} />
          <Button text="Secondary" color="secondary" onClick={() => setCount(count + 1)} />
          <Button text="Danger" color="danger" onClick={() => setCount(count + 1)} />
          <Button text="Success" color="success" onClick={() => setCount(count + 1)} />
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          📏 Different Sizes
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          <Button text="Small" color="primary" size="small" onClick={() => setCount(count + 1)} />
          <Button text="Medium" color="primary" onClick={() => setCount(count + 1)} />
          <Button text="Large" color="primary" size="large" onClick={() => setCount(count + 1)} />
        </div>
      </div>

      {/* State */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">
          🚦 Different States
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button
            text="Disabled"
            color="primary"
            disabled={true}
            onClick={() => setCount(count + 1)}
          />
          <Button
            text="Active"
            color="primary"
            onClick={() => setCount(count + 1)}
          />
        </div>
      </div>

    </section>
  );
}

export default BasicProps;
