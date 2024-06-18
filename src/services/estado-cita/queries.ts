import { useQuery } from "@tanstack/react-query";
import { getAllEstadosCitas } from "./api";

export const useGetAllEstadosCitas = () =>
  useQuery({
    queryKey: ["estados-citas"],
    queryFn: () => getAllEstadosCitas(),
  });
