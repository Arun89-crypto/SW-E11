import * as yup from "yup";

export const profileSchema = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  bio: yup.string().required(),
  age: yup.number().required(),
  hobbies: yup.array().of(yup.string().required()).required(),
  skills: yup.array().of(yup.string().required()).required()
});
