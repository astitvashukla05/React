import { createPortal } from "react-dom";
import Button from "../button";
export default function Modal({ children, ref }) {
  return createPortal(
    <dialog
      ref={ref}
      className="backdrop:bg-stone-900/90  inset-0 z-50 bg-gradient-to-tr from-stone-900/90 via-stone-900/70 to-stone-900/90
        backdrop-blur-md
        p-8
        rounded-2xl
        shadow-2xl
        w-full max-w-md
        text-white
        transition-opacity duration-300 ease-out"
    >
      {children}
      <form method="dialog" className="text-right">
        <Button>Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
