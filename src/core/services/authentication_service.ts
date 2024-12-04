import { LoginSchema } from "../../pages/login/validation";
import AxiosClient from "./axios_client";

export const login = async (loginFormValues: LoginSchema) =>
  await AxiosClient.getInstance().post<LoginSchema, { authToken: string }>(
    "auth/login",
    loginFormValues
  );

export const logout = async () =>
  await AxiosClient.getInstance().post("auth/logout");

export const checkAuth = async () =>
  await AxiosClient.getInstance().get<{ isAuthenticated: boolean }>(
    "auth/check"
  );
