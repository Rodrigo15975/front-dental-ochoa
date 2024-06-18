import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  CreatePaciente,
  CreatePacienteMenor,
  DeletePaciente,
  GetAllPacientes,
  Message,
  Pacientes,
  PartialUpdatePaciente,
} from "./types/typesPaciente";

export const createPacienteMayor = async (data: CreatePaciente) =>
  await useMethods.POST<Message, CreatePaciente>(PathServices.PACIENTES, data, {
    withCredentials: true,
  });

export const updatePaciente = async (data: PartialUpdatePaciente, id: string) =>
  await useMethods.PATCH<PartialUpdatePaciente>(
    `${PathServices.PACIENTES}/${id}`,
    data,
    {
      withCredentials: true,
    }
  );

export const createPacienteMenor = async (data: CreatePacienteMenor) =>
  await useMethods.POST<Message, CreatePacienteMenor>(
    `${PathServices.PACIENTES}/menor`,
    data,
    {
      withCredentials: true,
    }
  );

export const verifyMayorPaciente = async (data: DeletePaciente) =>
  data.mayorEdad
    ? await deletePaciente(data.id)
    : await deletePacienteMenor(data.id);

const deletePaciente = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.PACIENTES}/${id}`, {
    withCredentials: true,
  });

const deletePacienteMenor = async (id: string) =>
  await useMethods.DELETE<Message>(`${PathServices.PACIENTES}/menor/${id}`, {
    withCredentials: true,
  });

export const getFindOnePaciente = async (id: string) =>
  await useMethods.GET<Pacientes>(`${PathServices.PACIENTES}/${id}`, {
    withCredentials: true,
  });

export const getAllPacientes = async () =>
  await useMethods.GET<GetAllPacientes[]>(PathServices.PACIENTES, {
    withCredentials: true,
  });
