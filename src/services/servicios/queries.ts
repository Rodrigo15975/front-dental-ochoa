import { useQuery } from "@tanstack/react-query";
import { getAllServices } from "./api";

export const useGetServicios = () =>
  useQuery({
    queryKey: ["servicios"],
    queryFn: getAllServices,
  });
