import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import Questions from "../Questions";
import { useState } from "react";

const defaultTimer = 10000;

export default function Question({ handleSkip, handleSelect, index }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  const isAnswered = answer.selectedAnswer !== '';
  const isEvaluated = answer.isCorrect !== null;
  const answerState = isAnswered && isEvaluated
    ? answer.isCorrect ? 'correct' : 'wrong'
    : '';

  function handleSelectAnswer(selected) {
    setAnswer({ selectedAnswer: selected, isCorrect: null });

    // Show feedback after short delay
    setTimeout(() => {
      const correct = Questions[index].answers[0] === selected;

      setAnswer({ selectedAnswer: selected, isCorrect: correct });

      // Move to next question after showing feedback
      setTimeout(() => {
        handleSelect(selected);
      }, 1000); // Show feedback for 2s
    }, 500); // Delay before showing result
  }

  return (
    <div id="question">
      <QuestionTimer
        key={index} // ensures reset on each new question
        onTimeOut={!isAnswered ? handleSkip : null}
        timerOut={defaultTimer}
        mode={answerState}
      />
      <h2>{Questions[index].text}</h2>
      <Answers
        disable={answerState !== ''}
        answers={Questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        isCorrectAnswer={answer.isCorrect}
        select={handleSelectAnswer}
      />
    </div>
  );
}
