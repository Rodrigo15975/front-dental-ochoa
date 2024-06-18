import { ServiciosMedicos } from "@/components/Common";
import { ROLES } from "@/types/typeRoles";
import { Persona } from "@/types/typeUsuario";

export interface PropsUpdateProfile extends Omit<Persona, "contraseña"> {
  _id: string;
}

export interface Message {
  message: string;
}

export type UpdateProfile = Partial<PropsUpdateProfile & Message>;

export type UpdateProfilePhoto = Partial<{
  file: FormData;
  role: string;
  id: string;
  message: string;
}>;

export type GetId = {
  id: string;
  role: keyof typeof ROLES;
};

interface User extends Persona {
  id: string;
  servicios: ServiciosMedicos[];
}
export type PartialUser = Partial<User>;
