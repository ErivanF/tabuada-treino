import { useFormContext } from "react-hook-form";

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
    <div>
      <input
        type="radio"
        aria-label={label}
        value={value}
        id={id}
        {...register(name)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
export default RadioItem;
