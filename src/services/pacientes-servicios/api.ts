import { useMethods } from "@/adapters/methods";
import {
  CreateServicioPaciente,
  CreateServicioPacienteMayor,
  CreateServicioPacienteMenor,
  GetFindByDniPaciente,
  Message,
} from "./types/typesPacienteServicios";
import { PathServices } from "../pathServices";

export const getFindByDniPaciente = async (dni: string) =>
  await useMethods.GET<GetFindByDniPaciente>(
    `${PathServices.PACIENTES}/dni/${dni}`,
    {
      withCredentials: true,
    }
  );

const createServicioPacienteMayor = async (
  data: CreateServicioPacienteMayor,
  id: string
) =>
  await useMethods.POST<Message, CreateServicioPacienteMayor>(
    `${PathServices.DETALLES_SERVICIOS}/paciente-mayor/${id}`,
    data,
    { withCredentials: true }
  );

const createServicioPacienteMenor = async (
  data: CreateServicioPacienteMenor,
  id: string
) =>
  await useMethods.POST<Message, CreateServicioPacienteMenor>(
    `${PathServices.DETALLES_SERVICIOS}/paciente-menor/${id}`,
    data,
    { withCredentials: true }
  );

export const createServicioPaciente = async (
  mayorEdad: boolean,
  data: CreateServicioPaciente,
  idPaciente: string
) => {
  const {
    comentarios,
    montoTotal,
    costo_total,
    detalles_servicio,
    fecha_atencion,
    // vuelto_restante,
  } = data;
  if (mayorEdad)
    return await createServicioPacienteMayor(
      {
        comentarios,
        montoTotal,
        costo_total,
        detalles_servicio,
        fecha_atencion,
        // vuelto_restante,
      },
      idPaciente
    );

  return await createServicioPacienteMenor(data, idPaciente);
};
