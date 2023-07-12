import { Container } from "./style";
interface FeedbackProps {
  isCorrect: boolean;
  input: number;
  reset: () => void;
}
const Feedback = ({ isCorrect, input, reset }: FeedbackProps) => {
  return (
    <Container>
      <p className={isCorrect ? "correto" : "errado"}>
        {" "}
        {isCorrect
          ? "Resposta correta"
          : `Incorreto. A resposta correta é ${input}`}
      </p>
      <input type="button" value="Próxima" onClick={reset} />
    </Container>
  );
};
export default Feedback;
