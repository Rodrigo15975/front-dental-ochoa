import { PathsPublic } from "@/router/enum/routerPaths";
import { netWorkError } from "@/utils/axiosError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createRecetas } from "./api";
import { CreateReceta } from "./types/typesRecetas";

export const useCreateReceta = (id: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CreateReceta) => createRecetas(data, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn("Sucedio algo inesperado", {
          toastId: "error-create",
          autoClose: 3000,
        });
      }
      console.log(error);
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return;
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["pacientes", id],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-create",
      });
    },
  });
};
