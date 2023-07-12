import { Container } from "./style";
interface FeedbackProps {
  isCorrect: boolean;
  answer: number;
  reset: () => void;
}
const Feedback = ({ isCorrect, answer, reset }: FeedbackProps) => {
  return (
    <Container>
      <p className={isCorrect ? "correto" : "errado"}>
        {" "}
        {isCorrect
          ? "Resposta correta"
          : `Incorreto. A resposta correta é ${answer}`}
      </p>
      <input type="button" value="Próxima" onClick={reset} autoFocus />
    </Container>
  );
};
export default Feedback;
