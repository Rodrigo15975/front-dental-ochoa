import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";
import { createEmpresa, deleteEmpresa, updateEmpresa } from "./api";
import { PartialEmpresa } from "./types/typeEmpresa";
import { storeGetDataRuc } from "@/store";
import { netWorkError } from "@/utils/axiosError";
import { useNavigate } from "react-router-dom";
import { PathsPublic } from "@/router/enum/routerPaths";
import { AxiosError } from "axios";

export const useCreateEmpresa = () => {
  const queryClient = useQueryClient();
  const { clearDataRuc } = storeGetDataRuc();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PartialEmpresa) => createEmpresa(data),
    onMutate() {
      console.log("mutate");
    },
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true });
      }
    },
    onSuccess(data) {
      toast.success(data.message);
      clearDataRuc();
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["empresa"] });
      }
    },
  });
};

export const useUpdateEmpresa = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: PartialEmpresa) => updateEmpresa(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true });
      }
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onMutate() {
      console.log("mutate");
      // El ! hace que no sea nulo o undefined, sirve ya que algun momento sera undfined
      // const queryData = queryClient.getQueryData<PartialEmpresa>(["empresa"])!;
    },
    async onSettled(_, error) {
      if (error) {
        return toast.error(error.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};

export const useDeleteEmpresa = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: PartialEmpresa) => deleteEmpresa(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error))
          navigate(PathsPublic.NETWORKERROR, { replace: true });
      }
    },
    onSuccess(data) {
      toast.success(data.message);
    },
    onMutate() {
      console.log();
      // El ! hace que no sea nulo o undefined, sirve ya que algun momento sera undfined
      // const queryData = queryClient.getQueryData<PartialEmpresa>(["empresa"])!;
      // console.log(queryData);
    },
    async onSettled(_, error) {
      if (error) {
        console.log(error);
        return toast.error(error.message);
      }
      await queryClient.invalidateQueries({
        queryKey: ["empresa"],
      });
    },
  });
};
