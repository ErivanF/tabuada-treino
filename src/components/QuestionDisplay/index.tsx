import { useState } from "react";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";

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
        <div className="result">
          <p className={input === answer ? "correto" : "errado"}>
            {input === answer
              ? "Resposta correta"
              : `Incorreto. A resposta correta é ${answer}`}
          </p>
          <input type="button" value="Próxima" onClick={reset} />
        </div>
      )}
    </Container>
  );
};
export default QuestionDisplay;
