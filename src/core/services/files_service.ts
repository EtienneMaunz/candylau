import { UUID } from "crypto";
import backendClient from "./http_client";

export const uploadFiles = async (formData: FormData) =>
  await backendClient.post<FormData>("api/files/upload", formData, {
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
  await backendClient.get<AppFile[]>("api/files/fetchPictures");

export const deleteFile = async ({ id }: { id: UUID }) =>
  await backendClient.delete(`api/files/${id}`);
