import LogUtil from "@utils/LogUtil";
import axios from "axios";
import { Config, Response } from "@models/api";
import { Cookie } from "@utils/Cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const handleReqFulfilled = async (config: Config) => {
  // logging
  const randIdx = Math.floor(Math.random() * LogUtil.colors.length);
  if (import.meta.env.VITE_NODE_ENV === "mocking") {
    LogUtil.log(randIdx, `Started [${config.method}] : `, config.url);
    LogUtil.log(randIdx, `Parameters :`, config.data);
  }

  const _config: Config = {
    ...config,
    logColorIdx: randIdx,
  };

  // authentication
  const accessToken = Cookie.getCookie("access-token");
  const Authorization = `${accessToken}`;

  _config.headers["Authorization"] = Authorization;

  return _config;
};

const handleReqError = (err: any) => {
  return Promise.reject(err);
};

const handleResFulfilled = (res: Response) => {
  if (import.meta.env.VITE_NODE_ENV === "mocking") {
    LogUtil.log(
      res.config.logColorIdx,
      `Finished [${res.config.method}] : `,
      res.config.url,
    );
    LogUtil.log(res.config.logColorIdx, `Response data :`, res.data);
  }
  return res.data;
};

const handleResError = (err: any) => {
  console.error(err.response);
  // 401
  if (err.response.status === 401) {
  }
  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(handleReqFulfilled, handleReqError);
axiosInstance.interceptors.response.use(handleResFulfilled, handleResError);

export default axiosInstance;
