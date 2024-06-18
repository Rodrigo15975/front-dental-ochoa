import { useQuery } from "@tanstack/react-query";
import { getEmpresa } from "./api";

export const useGetEmpresa = () => {
  return useQuery({
    queryKey: ["empresa"],
    queryFn: () => getEmpresa(),
  });
};
