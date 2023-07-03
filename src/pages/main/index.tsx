import { Link, useParams } from "react-router-dom";
import Divisao from "../../components/Divisao";
import Multiplicacao from "../../components/Multiplicacao";

import Results from "../../components/Results";
import Soma from "../../components/Soma";
import Subtracao from "../../components/Subtracao";
import { Container } from "./style";

const Main = () => {
  const { operation, number } = useParams();
  return (
    <Container>
      {!number ? (
        <h2> URL inválida</h2>
      ) : operation === "som" ? (
        <Soma value={parseInt(number)} />
      ) : operation === "sub" ? (
        <Subtracao value={parseInt(number)} />
      ) : operation === "mul" ? (
        <Multiplicacao value={parseInt(number)} />
      ) : operation === "div" ? (
        <Divisao value={parseInt(number)} />
      ) : (
        <h2> URL inválida</h2>
      )}
      <Results />
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default Main;
