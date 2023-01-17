import { Container } from "./style";

interface IProps {
  acertos: number;
  erros: number;
}
const Results = ({ acertos, erros }: IProps) => {
  return (
    <Container>
      <div>Acertos: {acertos}</div>
      <div>Erros: {erros}</div>
    </Container>
  );
};

export default Results;
