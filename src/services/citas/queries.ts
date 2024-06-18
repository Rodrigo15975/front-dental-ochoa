import { useQuery } from "@tanstack/react-query";
import { getAllCitas } from "./api";

export const useGetAllCitas = () =>
  useQuery({
    queryKey: ["citas"],
    queryFn: () => getAllCitas(),
  });
