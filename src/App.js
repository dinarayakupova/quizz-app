import { useState } from "react";
import questions from "./components/Questions";
import Game from "./components/Game";
import Result from "./components/Result";
import "./index.scss";


function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorerct] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorerct(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct = {correct}/>
      )}
    </div>
  );
}

export default App;
