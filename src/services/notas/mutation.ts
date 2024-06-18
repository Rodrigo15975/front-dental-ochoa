import { PathsPublic } from "@/router/enum/routerPaths";
import storeNotasEtiquetasAlergias from "@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias";
import { netWorkError } from "@/utils/axiosError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { updateNota } from "./api";
import { Nota } from "./types/typesNotas";

export const useUpdateNota = (id: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setOpenNotas } = storeNotasEtiquetasAlergias();

  return useMutation({
    mutationFn: (data: Nota) => updateNota(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) {
          navigate(PathsPublic.NETWORKERROR, { replace: true });
          toast.warn("Sucedio algo inesperado", {
            toastId: "error-nota",
          });
        }
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate-nota");
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return;
      } else {
        // ver aca que si va el paciente por id
        // no creo que vaya la notas
        await queryClient.invalidateQueries({
          queryKey: ["pacientes", id],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        toastId: "create-nota",
      });
      console.log("success-nota");
      setOpenNotas();
    },
  });
};
