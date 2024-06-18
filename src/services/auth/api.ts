import { useMethods } from "@/adapters/methods";

import {
  LoginAuth,
  PropsCookies,
  PropsLogout,
  PropsVerifyAccessToken,
} from "./types/typeLogin";
import { PathServices } from "../pathServices";

export const loginAuth = async (data: LoginAuth) =>
  await useMethods.POST<PropsCookies, LoginAuth>(PathServices.LOGIN, data);

// si no pongo credenciales, salkdra algo inesperado sucedio
// y si pones directo en el method, no podras hacer llamada a la api ya que no estaras mandando
// el cookeis (credenciales)
export const verifyTokenAccess = async () =>
  await useMethods.GET<PropsVerifyAccessToken>(PathServices.ACCESSTOKEN, {
    withCredentials: true,
  });

export const logout = async () =>
  await useMethods.GET<PropsLogout>(PathServices.LOGOUT, {
    withCredentials: true,
  });
