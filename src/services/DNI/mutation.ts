import { PathsPublic } from "@/router/enum/routerPaths";
import StoreGetDataDni from "@/store/storeGetDataDni/storeGetDataDni";
import { netWorkError } from "@/utils/axiosError";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getDni } from "./api";

export const useGetDni = () => {
  const { updateDatDni } = StoreGetDataDni();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (dni: string) => getDni(dni),
    onMutate() {},
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true });
        toast.error(error.response?.data.message);
      }
    },
    onSettled(_, error) {
      console.log(error);
    },
    onSuccess(data) {
      if (
        data.apellidoMaterno !== undefined &&
        data.apellidoMaterno !== undefined &&
        data.nombres !== undefined &&
        data.numeroDocumento !== undefined
      ) {
        updateDatDni(data);
        toast.success("Datos obtenidos", { toastId: "success-dni" });
        return;
      }
      toast.warn(`Sucedio algo inesperado o el DNI está incorrecto`, {
        toastId: "error-dni",
      });
    },
  });
};
