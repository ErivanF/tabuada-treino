import { Link, useParams } from "react-router-dom";
import Question from "../../components/Question";
import Results from "../../components/Results";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";

const Main = () => {
  const { operation, number } = useParams();
  const { result } = useResult();
  return (
    <Container>
      <Question question="Teste" answer="2" />
      <Results {...result} />
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default Main;
