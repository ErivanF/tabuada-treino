import { useState } from "react";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";
import Feedback from "../Feedback";

interface QuestionProps {
  question: string;
  answer: string;
  next: () => void;
}
const QuestionDisplay = ({ question, answer, next }: QuestionProps) => {
  const { correct, wrong } = useResult();
  const [input, setInput] = useState<string>("");
  const [displayQuestion, setDisplayQuestion] = useState<boolean>(true);
  const onSubmit = () => {
    if (input) {
      if (input === answer) {
        correct();
      } else {
        wrong();
      }
      setDisplayQuestion(false);
    }
  };
  const reset = () => {
    next();
    setInput("");
    setDisplayQuestion(true);
  };
  return (
    <Container>
      {displayQuestion ? (
        <div className="display">
          <div className="question">{question}</div>
          <input
            autoFocus={true}
            type="number"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                onSubmit();
              }
            }}
          />
          <input type="button" value="Responder" onClick={onSubmit} />
        </div>
      ) : (
        <Feedback
          input={parseInt(input)}
          isCorrect={answer === input}
          reset={reset}
        />
      )}
    </Container>
  );
};
export default QuestionDisplay;
