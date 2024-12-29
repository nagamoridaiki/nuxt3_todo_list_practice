import axios, { type AxiosError } from "axios";

const BASE_API_URL = "http://localhost:4000";

export const globalAxios = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

export const isAxiosError = (error: unknown): error is AxiosError =>
  (error as AxiosError)?.isAxiosError;
