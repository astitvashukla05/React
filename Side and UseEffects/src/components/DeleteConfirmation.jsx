import { useEffect, useState } from "react";
const TIMER = 5000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [closesAfter, setClosesAfter] = useState(TIMER);
  useEffect(() => {
    console.log(closesAfter);
    const time = setInterval(() => {
      setClosesAfter((prev) => {
        return prev - 1000;
      });
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  useEffect(() => {
    const time = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      clearTimeout(time);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes {`(${closesAfter / 1000}sec)`}
        </button>
      </div>
      <progress max={TIMER} value={closesAfter} />
    </div>
  );
}
