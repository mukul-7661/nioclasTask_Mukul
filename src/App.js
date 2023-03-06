import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Question from "./Question";
import Number from "./Number";

function App() {
  const [count, setCount] = useState(0);

  const questions = [
    {
      id: "AreaUnderTheCurve_901",
    },
    {
      id: "BinomialTheorem_901",
    },
    {
      id: "DifferentialCalculus2_901",
    },
  ];
  // console.log(questions.length);

  const QuestionNumbers = [];

  for (let i = 0; i < questions.length; i++) {
    QuestionNumbers.push(i);
  }

  return (
    <div className="App">
      <div className="question__numbers">
        {QuestionNumbers.map((QuestionNumber) => {
          return (
            <Number
              QuestionNumber={QuestionNumber}
              setCount={setCount}
              count={count}
            />
          );
        })}
      </div>
      {<Question questionID={questions[count].id} />}
      <div>
        <Button
          title="prev"
          count={count}
          setCount={setCount}
          size={questions.length}
        ></Button>

        <Button
          title="next"
          count={count}
          setCount={setCount}
          size={questions.length}
        ></Button>
      </div>
    </div>
  );
}

export default App;
