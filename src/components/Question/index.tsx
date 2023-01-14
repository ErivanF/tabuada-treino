import { useEffect, useState } from "react";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";

interface QuestionProps {
  question: string;
  answer: string;
}
const Question = ({ question, answer }: QuestionProps) => {
  const { correct, wrong } = useResult();
  const [result, setResult] = useState<string>("");
  useEffect(() => {
    setResult("");
  }, [question]);
  return (
    <Container>
      <div className="question">{question}</div>
      <input
        type="number"
        onChange={(e) => {
          setResult(e.target.value);
        }}
      />
      <input
        type="button"
        value="Responder"
        onClick={() => {
          if (result === answer) {
            correct();
          } else {
            wrong();
          }
        }}
      />
    </Container>
  );
};
export default Question;
