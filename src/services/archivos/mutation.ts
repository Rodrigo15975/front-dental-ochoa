import { PathsPublic } from "@/router/enum/routerPaths";
import { netWorkError } from "@/utils/axiosError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createArchivo, deleteArchivo } from "./api";

export const useCreateArchivos = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: FormData | undefined) => createArchivo(data, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true });
          toast.warn("Sucedio algo inesperado", {
            toastId: "error-archivo",
          });
        }
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate-archivo");
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
      console.log("success-archivos");
      toast.success(data.message, {
        position: "top-center",
        toastId: "create-archivo",
      });
    },
  });
};

export const useDeleteArchivos = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (idDoc: string) => deleteArchivo(idDoc, id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true });
          toast.warn("Sucedio algo inesperado", {
            toastId: "error-archivo",
          });
        }
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate-archivo");
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
      console.log("success-archivos");
      toast.success(data.message, {
        position: "top-center",
        toastId: "delete-archivo",
      });
    },
  });
};
