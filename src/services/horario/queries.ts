import { useQuery } from "@tanstack/react-query";
import { getHorario } from "./api";

export const useGetHorario = () =>
  useQuery({
    queryKey: ["horario"],
    queryFn: () => getHorario(),
  });
