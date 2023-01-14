import { createContext, ReactNode, useContext, useState } from "react";
interface IResult {
  acertos: number;
  erros: number;
}
interface IContext {
  result: IResult;
  correct: () => void;
  wrong: () => void;
  reset: () => void;
}

const resultContext = createContext<IContext>({} as IContext);
const ResultProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<IResult>({ acertos: 0, erros: 0 });
  const correct = () => {
    setResult((x) => ({ acertos: x.acertos + 1, erros: x.erros }));
  };
  const wrong = () => {
    setResult((x) => ({ acertos: x.acertos, erros: x.erros + 1 }));
  };
  const reset = () => {
    setResult({ acertos: 0, erros: 0 });
  };
  return (
    <resultContext.Provider value={{ result, correct, wrong, reset }}>
      {children}
    </resultContext.Provider>
  );
};
export const useResult = () => {
  return useContext(resultContext);
};
export default ResultProvider;
