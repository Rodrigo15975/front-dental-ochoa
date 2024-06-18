import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  CreateUsuario,
  GetAllUsuarios,
  UpdateUsuarios,
} from "./types/typesUsuarios";
import { Message } from "../servicios";

export const getAllUsuarios = async () =>
  await useMethods.GET<GetAllUsuarios[]>(`${PathServices.USUARIOS}`, {
    withCredentials: true,
  });

export const createUsuario = async (createUsuario: CreateUsuario) =>
  await useMethods.POST<Message, CreateUsuario>(
    PathServices.USUARIOS,
    createUsuario,
    {
      withCredentials: true,
    }
  );

export const updateUsuario = async (usuarios: UpdateUsuarios) =>
  await useMethods.PATCH<UpdateUsuarios>(
    `${PathServices.USUARIOS}/${usuarios._id}`,
    usuarios,
    {
      withCredentials: true,
    }
  );

export const deleteUsuario = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.USUARIOS}/${id}`, {
    withCredentials: true,
  });
