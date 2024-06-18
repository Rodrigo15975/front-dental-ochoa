import { useMethods } from "@/adapters/methods";
import {
  UpdateCardsUsersMedicos,
  UpdateServiciosMedico,
} from "@/components/Common";
import { PathServices } from "../pathServices";
import { PartialAsignarServices } from "../servicios";
import { CreateMedico, GetAllMedicos, Message } from "./types/typesMedicos";

export const getAllMedicos = async () =>
  await useMethods.GET<GetAllMedicos[]>(PathServices.MEDICOS, {
    withCredentials: true,
  });

export const createMedico = async (createMedico: CreateMedico) =>
  await useMethods.POST<Message, CreateMedico>(
    PathServices.MEDICOS,
    createMedico,
    {
      withCredentials: true,
    }
  );

export const updateMedicoServices = async (data: UpdateServiciosMedico) =>
  await useMethods.PATCH<UpdateServiciosMedico>(
    `${PathServices.MEDICOS}/servicios/${data.id}`,
    data,
    {
      withCredentials: true,
    }
  );

export const updateMedico = async (users: UpdateCardsUsersMedicos) =>
  await useMethods.PATCH<UpdateCardsUsersMedicos>(
    `${PathServices.MEDICOS}/${users._id}`,
    users,
    {
      withCredentials: true,
    }
  );

export const activeMedico = async (id: string) =>
  await useMethods.PATCH<Message>(
    `${PathServices.MEDICOS}${PathServices.ACTIVE_MEDICO}/${id}`,
    // se le pone el id, no es necesario, pero para que no marque error, solo se usara el id que se envia en la url
    { message: id },
    {
      withCredentials: true,
    }
  );

export const deleteMedico = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.MEDICOS}/${id}`, {
    withCredentials: true,
  });

export const asignarServicioForMedico = async (
  asignarServicio: PartialAsignarServices
) =>
  useMethods.POST<Message, PartialAsignarServices>(
    `${PathServices.ASIGNAR_SERVICIOS}/${asignarServicio.dni}`,
    asignarServicio,
    {
      withCredentials: true,
    }
  );
