import { InitialValuesReceta } from "@/components/PacientesData/prescripciones/tabs/receta/inputsNameReceta";

export type Message = {
  message: string;
};
export interface GetAllRecetas extends InitialValuesReceta {}

export interface CreateReceta extends InitialValuesReceta {}
