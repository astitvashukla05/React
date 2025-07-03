import { useEffect, useState } from "react";

export default function QuestionTimer({ onTimeOut, timerOut }) {
  const [timeRemain, setTimeRemain] = useState(timerOut);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemain((prev) => prev - 50);
    }, 50);
    return () => {
      clearInterval(timer);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeOut();
    }, timerOut);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeOut, timerOut]);
  return <progress id="question-time" value={timeRemain} max={timerOut} />;
}
