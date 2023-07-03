import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";

const Results = () => {
  const { result } = useResult();
  return (
    <Container>
      <div>Acertos: {result.acertos}</div>
      <div>Erros: {result.erros}</div>
    </Container>
  );
};

export default Results;
