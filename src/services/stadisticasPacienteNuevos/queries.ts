import { useQuery } from "@tanstack/react-query";
import { getAllStadisticasPacientesNuevos } from "./api";

export const useAllEstadisticasPacientesNuevos = () =>
  useQuery({
    queryKey: ["estadisticas"],
    queryFn: () => getAllStadisticasPacientesNuevos(),
  });
