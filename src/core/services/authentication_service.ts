import { LoginSchema } from "../../pages/login/validation";
import backendClient from "./http_client";

export const login = async (loginFormValues: LoginSchema) =>
  await backendClient.post<LoginSchema, { authToken: string }>(
    "api/auth/login",
    loginFormValues
  );

export const logout = async () => await backendClient.post("api/auth/logout");

export const checkAuth = async () =>
  await backendClient.get<{ isAuthenticated: boolean }>("api/auth/check");
