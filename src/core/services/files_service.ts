import { UUID } from "crypto";
import AxiosClient from "./axios_client";

export const uploadFiles = async (formData: FormData) =>
  await AxiosClient.getInstance().post<FormData>("files/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export interface AppFile {
  id: UUID;
  name: string;
  description: string;
  base64: string;
  createdAt: Date;
}

export const fetchPictures = async () =>
  await AxiosClient.getInstance().get<AppFile[]>("files/fetchPictures");

export const deleteFile = async ({ id }: { id: UUID }) =>
  await AxiosClient.getInstance().delete(`files/${id}`);
