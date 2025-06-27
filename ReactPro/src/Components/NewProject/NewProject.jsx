import Input from "../Input/Input";
import { useRef } from "react";
import Modal from "../Modal/Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const desc = useRef();
  const Date = useRef();
  const modal = useRef();

  function handleSave() {
    if (
      !title.current.value.trim() ||
      !desc.current.value.trim() ||
      !Date.current.value.trim()
    ) {
      modal.current.showModal(); // open modal on invalid input
      return;
    }

    onAdd(title.current.value, desc.current.value, Date.current.value);
  }

  return (
    <div
      className="
        w-full max-w-2xl mt-16
        bg-white/10 backdrop-blur-[16px]
        rounded-3xl p-12
        shadow-xl shadow-black/25
        border border-white/20
        text-white
        font-sans
        transition-colors duration-500
        flex flex-col gap-8
      "
    >
      <Modal ref={modal} aria-modal="true" role="alertdialog">
        <h2 className="text-2xl font-extrabold text-red-600 mb-4 select-none">
          Invalid Input
        </h2>
        <p className="text-stone-300 mb-3">
          Oops! You forgot to enter a value.
        </p>
        <p className="text-stone-400 leading-relaxed">
          Please enter a valid value for each field.
        </p>
      </Modal>

      <Input label="Title" ref={title} />
      <Input textarea="textarea" label="Description" ref={desc} />
      <Input label="Due Date" ref={Date} type="date" />

      <menu className="flex items-center justify-end gap-8 mt-10">
        <li>
          <button
            onClick={onCancel}
            className="
              text-stone-700 hover:text-white
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-stone-500
              select-none cursor-pointer
              px-4 py-2 rounded-md
            "
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="
              px-10 py-3 rounded-xl
              bg-stone-800 text-white
              hover:bg-stone-900
              shadow-lg shadow-black/50
              transition
              focus:outline-none focus:ring-2 focus:ring-sky-500
              select-none cursor-pointer
            "
          >
            Save
          </button>
        </li>
      </menu>
    </div>
  );
}
