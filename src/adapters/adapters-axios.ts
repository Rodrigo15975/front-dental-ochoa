import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export class MethodsAxios implements MethodsAxiosInterface {
  private readonly axiosAdapter: AxiosInstance;
  constructor(urlBase: string) {
    // add BASE-URL
    this.axiosAdapter = axios.create({
      baseURL: urlBase,
      // problema es el withCredentials
      // withCredentials: true,
    });
  }

  async DELETE<T>(url: string, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.delete<T>(url, config);
    return data;
  }
  async PATCH<T>(url: string, dataPATCH?: T, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.patch<T>(url, dataPATCH, config);
    return data;
  }

  async GET<T>(url: string, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.get<T>(url, config);
    return data;
  }
  // T Es el tipado que te duelve, D tipado que se mandará
  async POST<T, D>(url: string, dataPOST?: D, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.post<T>(url, dataPOST, config);
    return data;
  }
  async PUT<T>(url: string, dataPUT?: T, config?: AxiosRequestConfig) {
    const { data } = await this.axiosAdapter.put<T>(url, dataPUT, config);
    return data;
  }
}
