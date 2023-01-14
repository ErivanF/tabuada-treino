import { useParams } from "react-router-dom";

const Main = () => {
  const { operation, number } = useParams();

  return (
    <div>
      <div>Operação: {operation}</div>
      <div>Numero: {number}</div>
    </div>
  );
};

export default Main;
