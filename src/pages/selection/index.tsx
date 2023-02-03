import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { schema } from "./schema";
import RadioItem from "../../components/RadioItem";
import { useNavigate } from "react-router-dom";
import { useResult } from "../../providers/ResultProvider";
import { Container } from "./style";
interface RadioProps {
  value: string;
  label: string;
}
const operacoes: RadioProps[] = [
  { value: "som", label: "Somar" },
  { value: "sub", label: "Subtrair" },
  { value: "mul", label: "Multiplicar" },
  { value: "div", label: "Dividir" },
];
const numeros: RadioProps[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "0", label: "Todos" },
];
const Selection = () => {
  const methods = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const { reset } = useResult();
  const start = (data: any) => {
    reset();
    navigate(`${data.operation}/${data.number}`);
  };

  return (
    <Container>
      <FormProvider {...methods}>
        <h2>Selecione a Operação</h2>
        {operacoes.map((op) => (
          <RadioItem
            name="operation"
            key={op.value}
            value={op.value}
            label={op.label}
          />
        ))}
        <h2>Selecione o número</h2>
        {numeros.map((n) => (
          <RadioItem
            name="number"
            key={n.value}
            value={n.value}
            label={n.label}
          />
        ))}
        <button onClick={methods.handleSubmit(start)}>INICIAR</button>
      </FormProvider>
    </Container>
  );
};

export default Selection;
