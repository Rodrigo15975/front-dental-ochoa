import { GetAllUsuarios } from "@/services/usuarios/types/typesUsuarios";

export interface CardUsuario extends GetAllUsuarios {}

export interface PropsCardUsuario {
  data: CardUsuario[];
}

export interface DataCardUsuario extends CardUsuario {}
