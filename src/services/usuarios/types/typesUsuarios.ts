import { RegisterUsuario } from "@/components/GestionUsuarios/PanelUsuarios/FormularioUsuarios/inputsUsuarios/inpustNameUsuario";

export interface GetAllUsuarios extends RegisterUsuario {
  _id?: string;
}
export interface Message {
  message?: string;
}

export interface CreateUsuario extends GetAllUsuarios {}

export interface UpdateUsuarios extends CreateUsuario {
  message?: string;
}
