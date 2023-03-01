import { AxiosRequestConfig } from "axios";

const baseURL = `https://api.github.com/`;

const multiForm: AxiosRequestConfig = {
  headers: { "Content-Type": "application/json" },
};

export { multiForm, baseURL };
