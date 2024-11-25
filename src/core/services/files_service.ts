import axios from "axios";
import { UUID } from "crypto";

export const uploadFiles = async (formData: FormData) =>
  await axios.post<FormData>("/api/files/upload", formData, {
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
  await axios.get<AppFile[]>("/api/files/fetchPictures");

export const deleteFile = async ({ id }: { id: UUID }) =>
  await axios.delete(`/api/files/${id}`);
