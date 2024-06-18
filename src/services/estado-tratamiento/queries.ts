import { useQuery } from "@tanstack/react-query";
import { getAllEstadosServicios } from "./api";

export const useGetAllEstados = () =>
  useQuery({
    queryFn: () => getAllEstadosServicios(),
    queryKey: ["estados-servicios"],
  });
