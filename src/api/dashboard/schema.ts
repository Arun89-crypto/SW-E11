import * as yup from "yup";

export const profileSchema = yup.object().shape({
  email: yup.string().email(),
  firstName: yup.string(),
  lastName: yup.string(),
  bio: yup.string(),
  age: yup.number(),
  hobbies: yup.array().of(yup.string()),
  skills: yup.array().of(yup.string())
});
