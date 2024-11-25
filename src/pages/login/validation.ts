import { InferType, object, string } from "yup";

export const loginSchema = object({
  username: string().required(),
  password: string().required(),
});

export type LoginSchema = InferType<typeof loginSchema>;
