import { InternalAxiosRequestConfig, AxiosResponse } from "axios";

export interface Config extends InternalAxiosRequestConfig {
  logColorIdx?: number;
}

export interface Response extends AxiosResponse<any, any> {
  config: Config;
}
