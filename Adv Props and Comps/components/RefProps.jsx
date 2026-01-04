import { useRef, forwardRef } from "react";
// REFS ARE USED FOR STORING INFORMATION AS BUT IN RETURN IT DO NOT RE RENDER THE PAGE
// useRef forwardRef-> designed to accpet ref

const CustomInput = forwardRef(({ label, placeholder, className }, ref) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>

      <input
        ref={ref}  
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        transition-all duration-200 ${className} text-black`}
      />
    </div>
  );
});

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputValue = () => {
    if (inputRef.current) {
      alert(inputRef.current.value);
    }
  };

  const clearInputValue = () => {
    if (inputRef.current.value) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const clearSecondInputValue = () => {
    if (secondInputRef.current.value) {
      secondInputRef.current.value = "";
      secondInputRef.current.focus();
    }
  };

  return (
    <section className="p-10 bg-white rounded-2xl shadow-2xl space-y-8">
      
      {/* Header */}
      <header className="space-y-2">
        <h2 className="text-3xl font-bold text-gray-800">
          Ref Props
        </h2>
        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          repellendus quia iste maiores aspernatur laborum magnam dicta magni,
          quo earum! Recusandae voluptates rem temporibus tempore quam a facilis
          asperiores ipsum.
        </p>
      </header>

      {/* Demo Section */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Try It Out
        </h3>

        <div className="max-w-md">
          <CustomInput
            ref={inputRef}
            label="First input with ref"
            placeholder="Type something"
          />

          <CustomInput
            ref={secondInputRef}
            label="Second input with ref"
            placeholder="Type something else"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          <button
            onClick={focusInput}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium
            hover:bg-blue-700 transition"
          >
            Focus First
          </button>

          <button
            onClick={clearInputValue}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium
            hover:bg-gray-300 transition"
          >
            Clear First
          </button>

          <button
            onClick={clearSecondInputValue}
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium
            hover:bg-gray-300 transition"
          >
            Clear Second
          </button>

          <button
            onClick={getInputValue}
            className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium
            hover:bg-green-700 transition"
          >
            Get Value
          </button>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
