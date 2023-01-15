import { Link, useParams } from "react-router-dom";
import Question from "../../components/Question";
import { useResult } from "../../providers/ResultProvider";

const Main = () => {
  const { operation, number } = useParams();
  const { result } = useResult();
  return (
    <div>
      <div>Operação: {operation}</div>
      <div>Numero: {number}</div>
      <Question question="Teste" answer="2" />

      <div>
        <div>Acertos: {result.acertos}</div>
        <div>Erros: {result.erros}</div>
      </div>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default Main;
