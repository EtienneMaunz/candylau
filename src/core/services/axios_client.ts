import axios, { AxiosInstance } from "axios";

class AxiosClient {
  private static instance: AxiosInstance;

  private constructor() {}

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
      timeout: 15000,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    return this.instance;
  }
}

export default AxiosClient;
