import { Persona } from "@/types/typeUsuario";

// Users es general para medicos y usuarios
export interface Users extends Persona {
  _id: string;
  message?: string;
  servicios: ServiciosMedicos[];
}

export interface ServiciosMedicos {
  _id: string;
  nombre: string;
}

// Props Principal para iterar
export interface PropsAppCardUsersMedicos {
  data: Users[];
}

// Props para obtener los datos una ves iterado
export interface PropsCardUsersMedicos {
  medicos: Users;
}

// Actualizar
export interface UpdateCardsUsersMedicos extends Users {}

// Editar servicios del médico
export type UpdateServiciosMedico = {
  servicios: ServiciosMedicos[];
  id: string;
  message?: string;
};
