import * as yup from "yup";
export interface Ischema {
  operation: string;
}
export const schema = yup.object().shape({
  operation: yup.string().required(),
});
