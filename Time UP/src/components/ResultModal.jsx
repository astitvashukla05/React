import {createPortal} from 'react-dom'
export default function ResultModal({ref,targetTime,timeRemaining,handleReset}){
   const score = Math.round(((targetTime * 1000 - timeRemaining) / (targetTime * 1000)) * 100);

   const result=timeRemaining>0

    return createPortal(
        <dialog ref={ref} className="result-modal">
            <progress value={score} max="100"></progress>

      <h2>
        {result ? "🎉 You Won!" : "😢 You Lost!"} - Score: {score}%
      </h2>
      <p>
        The target time was <strong>{targetTime} seconds</strong>.
      </p>
      <p>
        You stopped the timer with <strong>{(timeRemaining / 1000).toFixed(2)} seconds</strong>.
      </p>
      <form method="dialog">
        <button onClick={handleReset}>Close</button>
      </form>
    </dialog>,
        document.getElementById('modal')
    )

}