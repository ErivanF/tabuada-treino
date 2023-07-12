import { useState } from "react";
import { Container } from "./style";

interface QuestionProps {
  question: string;
  submit: (input: string) => void;
}
const Question = ({ question, submit }: QuestionProps) => {
  const [input, setInput] = useState<string>("");
  return (
    <Container>
      <div className="question">{question}</div>
      <input
        autoFocus
        type="number"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            submit(input);
          }
        }}
      />
      <input
        type="button"
        value="Responder"
        onClick={() => {
          submit(input);
        }}
      />
    </Container>
  );
};
export default Question;
