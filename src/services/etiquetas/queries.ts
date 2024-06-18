import { useQuery } from "@tanstack/react-query";
import { getAllEtiquetas } from "./api";

export const useGetAllEtiquetas = () =>
  useQuery({
    queryKey: ["etiquetas"],
    queryFn: () => getAllEtiquetas(),
  });
