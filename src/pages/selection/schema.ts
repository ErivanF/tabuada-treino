import * as yup from "yup";
export interface Ischema {
  operation: string;
  number: string;
}
export const schema = yup.object().shape({
  operation: yup.string().required(),
  number: yup.string().required(),
});
