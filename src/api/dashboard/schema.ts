import * as yup from "yup";
import { nanoid } from "nanoid";

export const profileSchema = yup.object().shape({
  email: yup.string().required().email(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  bio: yup.string().required(),
  age: yup.number().required(),
  hobbies: yup
    .array()
    .of(yup.string().required())
    .required()
    .default(() => {
      return [];
    }),
  skills: yup
    .array()
    .of(yup.string().required())
    .required()
    .default(() => {
      return [];
    }),
  avatar: yup.string().default(() => {
    return `https://avatars.dicebear.com/api/croodles-neutral/${nanoid()}.svg`;
  }),

});
