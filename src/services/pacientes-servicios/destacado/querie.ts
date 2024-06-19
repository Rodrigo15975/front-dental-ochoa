import { useQuery } from "@tanstack/react-query";
import { getPacienteDestacado, getServiceDestacado } from "./api";

export const useGetPacienteDestacado = () =>
  useQuery({
    queryKey: ["paciente-destacado"],
    queryFn: () => getPacienteDestacado(),
  });

export const useGetServiceDestacado = () =>
  useQuery({
    queryKey: ["service-destacado"],
    queryFn: () => getServiceDestacado(),
  });
