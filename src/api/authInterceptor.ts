import { Cookie } from "@utils/Cookie";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const authInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const handleReqFulfilled = (config: InternalAxiosRequestConfig) => {
  return config;
};

const handleReqError = (err: any) => {
  return Promise.reject(err);
};

const handleResFulfilled = (res: AxiosResponse) => {
  let accessToken = res.headers["authorization"];
  Cookie.setCookie("access-token", accessToken, {
    maxAge: 60 * 5,
  });
  return res.data;
};

const handleResError = (err: any) => {
  return Promise.reject(err);
};

authInstance.interceptors.request.use(handleReqFulfilled, handleReqError);
authInstance.interceptors.response.use(handleResFulfilled, handleResError);

export default authInstance;
