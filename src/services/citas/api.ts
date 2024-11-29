import { useMethods } from '@/adapters/methods'
import { PathServices } from '../pathServices'
import { Message } from '../servicios'
import {
  CreateCita,
  GetAllCitas,
  UpdateCita,
  UpdateChangeDateCita,
  UpdateStatusCitaCancelada,
  UpdateStatusCitaConfirmada,
  UpdateStatusCitaListaEspera,
  UpdateStatusCitaInSala,
  UpdateStatusCitaAtendida,
} from './types/typesCitas'

export const createCita = async (data: CreateCita) =>
  await useMethods.POST<Message, CreateCita>(`${PathServices.CITAS}`, data, {
    withCredentials: true,
  })

export const updateCita = async (data: UpdateCita) =>
  await useMethods.PATCH<UpdateCita>(
    `${PathServices.CITAS}/${data._id}`,
    data,
    {
      withCredentials: true,
    }
  )

export const deleteCita = async (idCita: string, idPaciente: string) =>
  await useMethods.DELETE<UpdateCita>(
    `${PathServices.CITAS}/${idCita}/${idPaciente}`,
    {
      withCredentials: true,
    }
  )

export const updateChangeDateCita = async (data: UpdateChangeDateCita) =>
  await useMethods.PATCH<UpdateChangeDateCita>(
    `${PathServices.CITAS}/change-date/${data._id}`,
    data,
    {
      withCredentials: true,
    }
  )

export const updateStatusCitaConfirmada = async (
  data: UpdateStatusCitaConfirmada
) =>
  await useMethods.PATCH<UpdateStatusCitaConfirmada>(
    `${PathServices.CITAS}/confirmada/status`,
    data,
    {
      withCredentials: true,
    }
  )
export const updateStatusCitaCancelar = async (
  data: UpdateStatusCitaCancelada
) =>
  await useMethods.PATCH<UpdateStatusCitaCancelada>(
    `${PathServices.CITAS}/cancelar/status`,
    data,
    {
      withCredentials: true,
    }
  )

export const updateStatusCitaListaEspera = async (
  data: UpdateStatusCitaListaEspera
) =>
  await useMethods.PATCH<UpdateStatusCitaListaEspera>(
    `${PathServices.CITAS}/espera/status`,
    data,
    {
      withCredentials: true,
    }
  )

export const updateStatusCitaListaSala = async (data: UpdateStatusCitaInSala) =>
  await useMethods.PATCH<UpdateStatusCitaInSala>(
    `${PathServices.CITAS}/sala/status`,
    data,
    {
      withCredentials: true,
    }
  )

export const updateStatusCitaAtendida = async (
  data: UpdateStatusCitaAtendida
) =>
  await useMethods.PATCH<UpdateStatusCitaAtendida>(
    `${PathServices.CITAS}/atendida/status`,
    data,
    {
      withCredentials: true,
    }
  )

export const getAllCitas = async () =>
  await useMethods.GET<GetAllCitas[]>(PathServices.CITAS, {
    withCredentials: true,
  })
