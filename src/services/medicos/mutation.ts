import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { PathsPublic } from "@/router/enum/routerPaths";
import { netWorkError } from "@/utils/axiosError";
import { PartialAsignarServices } from "../servicios";
import {
  activeMedico,
  asignarServicioForMedico,
  createMedico,
  deleteMedico,
  updateMedico,
  updateMedicoServices,
} from "./api";

import {
  UpdateCardsUsersMedicos,
  UpdateServiciosMedico,
} from "@/components/Common";
import { storeGestionMedicos, storeGestionServicios } from "@/store";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { CreateMedico } from "./types/typesMedicos";

export const useCreateMedico = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setOpenFormGestionMedicos } = storeGestionMedicos();
  return useMutation({
    mutationFn: (data: CreateMedico) => createMedico(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-create",
      });
      setOpenFormGestionMedicos();
    },
  });
};

export const useUpdateMedico = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (users: UpdateCardsUsersMedicos) => updateMedico(users),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-update",
      });
    },
  });
};

export const useUpdateMedicoServices = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: UpdateServiciosMedico) => updateMedicoServices(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
          toastId: "update-services-error",
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-update",
      });
    },
  });
};

export const useDeleteMedico = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteMedico(id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-delete",
      });
    },
  });
};

export const useActiveMedico = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => activeMedico(id),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-delete",
      });
    },
  });
};

export const useAsignarServicioForMedico = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { setOpenFormAsignarServicios } = storeGestionServicios();
  return useMutation({
    mutationFn: (data: PartialAsignarServices) =>
      asignarServicioForMedico(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warn(error.response?.data.message, {
          toastId: "error",
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
          queryKey: ["medicos"],
        });
      }
    },
    onSuccess(data) {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        toastId: "success-asignar",
      });
      setOpenFormAsignarServicios();
    },
  });
};
