import { useRef, useState } from "react";
import { data } from "../../assets/data";
import "./Quiz.css";
const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lockAnswer, setLockAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  const a = useRef(null);
  const b = useRef(null);
  const c = useRef(null);
  const d = useRef(null);

  const optionRefs = [a, b, c, d];

  const checkAnswer = (element, answer) => {
    if (lockAnswer === false) {
      if (question.correct === answer) {
        element.target.classList.add("correct");
        setScore((prev) => prev + 1);

        setLockAnswer(true);
      } else {
        element.target.classList.add("wrong");
        setLockAnswer(true);
      }

      //   setLockAnswer(true);
    }
  };
  const restartQuiz = () => {
    setIndex(0);
    setQuestion(data[0]);
    setLockAnswer(false);
    setScore(0);
    setResult(false);
  };

  const showNextQuestion = () => {
    if (lockAnswer) {
      if (index < data.length - 1) {
        setIndex((prev) => prev + 1);
        setQuestion(data[index + 1]);
        setLockAnswer(false);
        optionRefs.forEach((option) => {
          option.current.classList.remove("correct");
          option.current.classList.remove("wrong");
        });
      }
      if (index === data.length - 1) {
        setResult(true);
      }
    }
  };

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      {result ? (
        <>
          <h1>
            Result: {score} out of {data.length}
          </h1>
          <button onClick={restartQuiz}>Restart</button>
        </>
      ) : (
        <>
          {" "}
          <h2>
            {index + 1}. {question.question}
          </h2>
          <ul>
            <li ref={a} onClick={(e) => checkAnswer(e, "a")}>
              {question.a}
            </li>
            <li ref={b} onClick={(e) => checkAnswer(e, "b")}>
              {question.b}
            </li>
            <li ref={c} onClick={(e) => checkAnswer(e, "c")}>
              {question.c}
            </li>
            <li ref={d} onClick={(e) => checkAnswer(e, "d")}>
              {question.d}
            </li>
          </ul>
          <button onClick={showNextQuestion}>Next</button>
          <div className="index">
            {index + 1} of {data.length} question
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
