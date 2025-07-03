import { useRef } from "react";
export default function Answers({answers,selectedAnswer,isCorrectAnswer,select,disable}) {
  const shuffledArray=useRef()
  if (!shuffledArray.current) {
    shuffledArray.current = [...answers];
    shuffledArray.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledArray.current.map((option,index) => {
       
        let cssClass = "";
        if (isCorrectAnswer === null   && option === selectedAnswer) {
          cssClass = "selected";
        }
        if (
          isCorrectAnswer === false && option === selectedAnswer
        ) {
          cssClass = "wrong";
        }
        if(isCorrectAnswer === true && option === selectedAnswer){
          cssClass="correct"
        }
        return (
          <li key={`${option}-${index}`} className="answer">
            <button onClick={() => select(option)} className={cssClass} disabled={disable}>
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
