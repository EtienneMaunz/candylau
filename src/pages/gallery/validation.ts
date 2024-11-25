import { array, InferType, object, string } from "yup";

export const fileInfoSchema = object({
  fileName: string().required(),
  name: string().required(),
  description: string().required(),
});

export const filesUploadSchema = object({
  filesInfo: array(fileInfoSchema).required(),
}).required();

export type FilesUploadSchema = InferType<typeof filesUploadSchema>;
