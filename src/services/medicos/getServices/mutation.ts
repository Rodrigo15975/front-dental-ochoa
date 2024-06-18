import { PathsPublic } from "@/router/enum/routerPaths";
import { netWorkError } from "@/utils/axiosError";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getServicesMedicos } from "./api";

export const useGetServiciosMedico = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => getServicesMedicos(id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
          toastId: "error-get-servicios",
          autoClose: 3000,
        });
      }
      console.log(error);
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return;
      }
    },
    onSuccess(data) {
      if (data) {
        toast.success("Servicos obtenidos", {
          position: "bottom-right",
          autoClose: 3000,
          toastId: "success-get-servicios",
        });
      }
    },
  });
};
