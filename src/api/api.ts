import { AxiosRequestConfig } from "axios";
import axiosInstance from "./interceptor";

export default class API {
  static get<T>(
    url: string,
    params?: Pick<AxiosRequestConfig, "params">,
    config?: Omit<AxiosRequestConfig, "params">,
  ): Promise<T> {
    const option: AxiosRequestConfig = {
      method: "get",
      url,
      params,
      ...config,
    };
    return axiosInstance(option);
  }

  static post<T, D>(
    url: string,
    data: T,
    config?: Omit<AxiosRequestConfig, "data">,
  ): Promise<D> {
    const option: AxiosRequestConfig = {
      method: "post",
      url,
      data,
      ...config,
    };
    return axiosInstance(option);
  }

  static put<T, D>(
    url: string,
    data: T,
    config?: Omit<AxiosRequestConfig, "data">,
  ): Promise<D> {
    const option: AxiosRequestConfig = {
      method: "put",
      url,
      data,
      ...config,
    };
    return axiosInstance(option);
  }

  static delete<T>(
    url: string,
    data: T,
    config?: Omit<AxiosRequestConfig, "data">,
  ) {
    const option: AxiosRequestConfig = {
      method: "delete",
      url,
      data,
      ...config,
    };
    return axiosInstance(option);
  }
}
