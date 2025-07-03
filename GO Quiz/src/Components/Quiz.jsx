import { useState } from "react";
import Questions from "../Questions";
import Question from "./Question";
import Summary from "./Summary";



export default function Quiz() {
  const [answers, setAnswers] = useState([])


  const currQuestion = answers.length
  const isQuizDone = currQuestion === Questions.length;

  function handleSelect(selectedOption) {
    setAnswers((prev) => {
      return [...prev, selectedOption];
    });
  }
  function handleTimeOut() {
    setAnswers((prev) => [...prev, null]);
    return;
  }
  if (isQuizDone) {
    return <Summary userAnswers={answers}/>;
  }



  return (
    <div id="quiz">
      <Question
        key={currQuestion}
        index={currQuestion}
        handleSkip={handleTimeOut}

        handleSelect={handleSelect}
      />

    </div>

  );
}
