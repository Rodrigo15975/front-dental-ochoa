import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  CreateServicio,
  GetAllServices,
  Message,
  PartialUpdateServices,
} from "./types/typesServicios";

export const getAllServices = async () =>
  useMethods.GET<GetAllServices[]>(PathServices.SERVICIOS, {
    withCredentials: true,
  });

export const createServicio = async (createServicio: CreateServicio) =>
  useMethods.POST<Message, CreateServicio>(
    PathServices.SERVICIOS,
    createServicio,
    {
      withCredentials: true,
    }
  );

export const deleteServicio = async (id: string) =>
  useMethods.DELETE<Message>(`${PathServices.SERVICIOS}/${id}`, {
    withCredentials: true,
  });

export const updateServicio = async (data: PartialUpdateServices) =>
  useMethods.PATCH<PartialUpdateServices>(
    `${PathServices.SERVICIOS}/${data._id}`,
    data,
    {
      withCredentials: true,
    }
  );
