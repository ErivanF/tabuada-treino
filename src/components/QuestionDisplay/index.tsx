import { useState } from "react";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";
import Feedback from "../Feedback";
import Question from "../Question";

interface QuestionProps {
  question: string;
  answer: string;
  next: () => void;
}
const QuestionDisplay = ({ question, answer, next }: QuestionProps) => {
  const { correct, wrong } = useResult();
  const [isCorrect, setIsCorrect] = useState<boolean>(true);
  const [displayQuestion, setDisplayQuestion] = useState<boolean>(true);
  const submit = (input: string) => {
    if (input) {
      if (input === answer) {
        correct();
        setIsCorrect(true);
      } else {
        wrong();
        setIsCorrect(false);
      }
      setDisplayQuestion(false);
    }
  };
  const reset = () => {
    next();
    setDisplayQuestion(true);
  };
  return (
    <Container>
      {displayQuestion ? (
        <Question question={question} submit={submit} />
      ) : (
        <Feedback
          answer={parseInt(answer)}
          isCorrect={isCorrect}
          reset={reset}
        />
      )}
    </Container>
  );
};
export default QuestionDisplay;
