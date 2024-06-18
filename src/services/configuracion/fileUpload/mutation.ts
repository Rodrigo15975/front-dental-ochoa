import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { fileUpload, fileUploadPortada } from "./api";
import { PartialUpload } from "./types/typeFileUpload";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { netWorkError } from "@/utils/axiosError";
import { PathsPublic } from "@/router/enum/routerPaths";
import { storeUpdatePhotoHome } from "@/store";

export const useUpload = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: PartialUpload) => fileUpload(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          return navigate(PathsPublic.NETWORKERROR, { replace: true });
      }
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onSettled(_, error) {
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }
      queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};

export const useUploadPortada = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setOpenUpdate } = storeUpdatePhotoHome();

  return useMutation({
    mutationFn: (data: PartialUpload) => fileUploadPortada(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          return navigate(PathsPublic.NETWORKERROR, { replace: true });
      }
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
      setOpenUpdate();
    },
  });
};
