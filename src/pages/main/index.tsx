import { Link, useParams } from "react-router-dom";

import Results from "../../components/Results";
import Soma from "../../components/Soma";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";

const Main = () => {
  const { operation, number } = useParams();
  const { result } = useResult();
  return (
    <Container>
      {number && <Soma value={parseInt(number)} />}
      <Results {...result} />
      <Link to="/">Voltar</Link>
    </Container>
  );
};

export default Main;
