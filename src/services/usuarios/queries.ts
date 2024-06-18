import { useQuery } from "@tanstack/react-query";
import { getAllUsuarios } from "./api";

export const useGetAllUsuarios = () =>
  useQuery({
    queryKey: ["usuarios"],
    queryFn: () => getAllUsuarios(),
  });
