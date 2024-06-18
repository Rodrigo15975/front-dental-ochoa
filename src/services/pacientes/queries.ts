import { useQuery } from "@tanstack/react-query";
import { getAllPacientes, getFindOnePaciente } from "./api";

export const useGetAllPacientes = () =>
  useQuery({
    queryFn: () => getAllPacientes(),
    queryKey: ["pacientes"],
  });

export const useGetFindOnePaciente = (id: string) =>
  useQuery({
    queryKey: ["pacientes", id],
    queryFn: () => getFindOnePaciente(id),
  });
