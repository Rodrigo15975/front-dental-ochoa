import { useMethods } from "@/adapters/methods";
import { PathServices } from "../pathServices";
import {
  GetId,
  Message,
  PartialUser,
  UpdateProfile,
  UpdateProfilePhoto,
} from "./types/typeProfile";
import { ROLES } from "@/types/typeRoles";

// nunca te olvides de las credenciales
export const updateProfile = async (data: UpdateProfile) => {
  const { role, _id } = data;
  if (role === "MEDICO") {
    return await useMethods.PATCH<UpdateProfile>(
      `${PathServices.MEDICOS}/${_id}`,
      data,
      {
        withCredentials: true,
      }
    );
  }
  return await useMethods.PATCH<UpdateProfile>(
    `${PathServices.USUARIOS}/${_id}`,
    data,
    {
      withCredentials: true,
    }
  );
};

export const updateProfilePhoto = async (data: UpdateProfilePhoto) =>
  await useMethods.POST<Message, FormData>(
    `${PathServices.FILEUSUARIO}/${data.id}/${data.role}`,
    data.file,
    {
      withCredentials: true,
    }
  );

export const getProfile = async (
  id: string,
  role: keyof typeof ROLES | undefined
) => {
  if (role === "USUARIO")
    return await useMethods.GET<PartialUser>(`${PathServices.USUARIOS}/${id}`, {
      withCredentials: true,
    });

  return await useMethods.GET<PartialUser>(`${PathServices.MEDICOS}/${id}`, {
    withCredentials: true,
  });
};

export const getIdRole = async () =>
  await useMethods.GET<GetId>(`${PathServices.PROFILE}`, {
    withCredentials: true,
  });
