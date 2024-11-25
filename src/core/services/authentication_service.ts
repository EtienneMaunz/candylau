import axios from "axios";
import { LoginSchema } from "../../pages/login/validation";

export const login = async (loginFormValues: LoginSchema) =>
  await axios.post<LoginSchema, { authToken: string }>(
    "/api/auth/login",
    loginFormValues
  );

export const logout = async () => await axios.post("/api/auth/logout");

export const checkAuth = async () =>
  await axios.get<{ isAuthenticated: boolean }>("/api/auth/check");
