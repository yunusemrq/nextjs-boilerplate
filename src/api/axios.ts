import axios from "axios";

import { baseURL } from "./config";

const config = {
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(async (requestConfig) => {
  const token = "";
  const useRequestConfig = { ...requestConfig };
  if (token) {
    useRequestConfig.headers.Authorization = `Bearer ${token}`;
  }
  return useRequestConfig;
});

const onFulFilled = async (response: any) => {
  return response;
};

const onRejected = async (error: any) => {
  const apiResult = {
    message: error?.message,
    status: false,
    data: null,
  };
  return apiResult;
};

axiosInstance.interceptors.response.use(onFulFilled, onRejected);

export default axiosInstance;
