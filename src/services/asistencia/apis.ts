import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import { CreateAsistencia } from "./types/typeAsistencia";

export const createAsistencia = async (dataAsistencia: CreateAsistencia) => {
  const { idMedico, _id } = dataAsistencia;

  if (_id) return await updateAsistencia(dataAsistencia);

  return await useMethods.POST<CreateAsistencia, CreateAsistencia>(
    `${PathServices.ASISTENCIA}/${idMedico}`,
    dataAsistencia,
    {
      withCredentials: true,
    }
  );
};

export const updateAsistencia = async (dataAsistencia: CreateAsistencia) =>
  await useMethods.PATCH<CreateAsistencia>(
    `${PathServices.ASISTENCIA}/${dataAsistencia._id}`,
    dataAsistencia,
    {
      withCredentials: true,
    }
  );
