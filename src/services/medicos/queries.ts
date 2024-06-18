import { useQuery } from "@tanstack/react-query";
import { getAllMedicos } from "./api";
import { useGetId } from "../profile/queries";

export const useGetAllMedicos = () =>
  useQuery({
    queryKey: ["medicos"],
    queryFn: () => getAllMedicos(),
  });

export const useGetMedicosActivos = () => {
  const usuario = useGetId();
  const { data } = useGetAllMedicos();
  const medicosActivos = data?.filter(
    (medicos) => medicos._id !== usuario.data?.id && medicos.activo !== false
  );
  return medicosActivos;
};
