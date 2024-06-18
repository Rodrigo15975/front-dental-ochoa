import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAsistencia } from "./apis";
import { CreateAsistencia } from "./types/typeAsistencia";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { netWorkError } from "@/utils/axiosError";
import { useNavigate } from "react-router-dom";
import { PathsPublic } from "@/router/enum/routerPaths";

export const useCreateAsistencia = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: CreateAsistencia) => createAsistencia(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true });
          toast.warn("Sucedio algo inesperado", {
            toastId: "error-asistencia",
          });
        }
      }
      console.log(error);
    },
    onMutate() {
      // console.log("mutate-asistencia");
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return;
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess() {
      // console.log("success-asistencia");
    },
  });
};
