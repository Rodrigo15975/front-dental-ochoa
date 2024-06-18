import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { updateProfile, updateProfilePhoto } from "./api";
import { UpdateProfile, UpdateProfilePhoto } from "./types/typeProfile";
import { storeUpdatePhotoProfile, storeUpdateProfile } from "@/store";
import { useNavigate } from "react-router-dom";
import { PathsPublic } from "@/router/enum/routerPaths";
import { netWorkError } from "@/utils/axiosError";

// datos del perlfil
export const useUpdateProfile = (idUser: string | undefined) => {
  const queryClient = useQueryClient();
  const { setOpenUpdateProfile } = storeUpdateProfile();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: UpdateProfile) => updateProfile(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warning("Ocurrio algo inesperado", {
          toastId: "error",
          position: "top-center",
          autoClose: 4000,
        });
      }
      if (error instanceof AxiosError) {
        if (error.code === "ERR_NETWORK") navigate(PathsPublic.NETWORKERROR);
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSuccess(data) {
      toast.success(data?.message, {
        toastId: "success",
        position: "top-center",
        autoClose: 4000,
      });
    },
    onSettled: async (_, error) => {
      if (error) {
        return console.log(error);
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["profile", idUser],
        });
        setOpenUpdateProfile();
      }
    },
  });
};

// arreglar se actualiza la photo y no de perfil
// Profile de usuarios(medicos,usuarios)
export const useUpdatePerfilUsuarios = (queryKey: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (data: UpdateProfilePhoto) => updateProfilePhoto(data),
    onError(error) {
      if (error instanceof AxiosError) {
        if (netWorkError(error)) navigate(PathsPublic.NETWORKERROR);
        toast.warning("Ocurrio algo inesperado", {
          position: "top-center",
          autoClose: 3000,
        });
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSuccess(data) {
      // console.log(data);
      toast.success(data.message, {
        position: "top-center",
        toastId: "success-profile-usuarios",
      });
    },
    onSettled: async (_, error) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(_);
        await queryClient.invalidateQueries({
          queryKey: [queryKey],
        });
      }
    },
  });
};

// Profile photo el que ingresa al sistema
export const useUpdatePerfilPhoto = (idUser: string | undefined) => {
  const queryClient = useQueryClient();
  const { setOpenUpdatePhotoProfile } = storeUpdatePhotoProfile();
  return useMutation({
    mutationFn: (data: UpdateProfilePhoto) => updateProfilePhoto(data),
    onError(error) {
      if (error instanceof AxiosError) {
        toast.warning(error.response?.data.message, {
          position: "top-center",
          autoClose: 3000,
        });
      }
      console.log(error);
    },
    onMutate() {
      console.log("mutate");
    },
    onSuccess(data) {
      // console.log(data);
      toast.success(data.message, {
        position: "top-center",
      });
      setOpenUpdatePhotoProfile();
    },
    onSettled: async (_, error) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(_);

        await queryClient.invalidateQueries({
          queryKey: ["profile", idUser],
        });
      }
    },
  });
};
