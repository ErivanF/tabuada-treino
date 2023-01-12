import { useParams } from "react-router-dom";

const Main = () => {
  const teste = useParams();
  console.log(teste);
  return (
    <div>
      <div>Operação: {teste.operation}</div>
      <div>Numero: {teste.number}</div>
    </div>
  );
};

export default Main;
