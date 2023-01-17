import { useFormContext } from "react-hook-form";
import { Container } from "./style";

const RadioItem = ({
  name,
  value,
  label,
}: {
  name: string;
  value: string;
  label: string;
}) => {
  const { register } = useFormContext();
  const id = `Form${value}`;
  return (
    <Container>
      <input
        type="radio"
        aria-label={label}
        value={value}
        id={id}
        {...register(name)}
      />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
};
export default RadioItem;
