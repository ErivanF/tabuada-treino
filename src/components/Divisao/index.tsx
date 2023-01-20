import { useState } from "react";
import Question from "../Question";
interface iData {
  question: string;
  answer: string;
}
const Divisao = ({ value }: { value: number }) => {
  const roll = () => {
    let n1 = 0;
    if (value === 0) {
      n1 = Math.floor(Math.random() * 8 + 1);
    } else n1 = value;
    const n2 = Math.floor(Math.random() * 8 + 1);
    const question = `${n1 * n2} : ${n1}`;
    const answer = String(n2);
    return {
      question,
      answer,
    };
  };
  const [data, setData] = useState<iData>(roll());
  const next = () => {
    setData(roll());
  };
  return <Question {...data} next={next} />;
};

export default Divisao;
