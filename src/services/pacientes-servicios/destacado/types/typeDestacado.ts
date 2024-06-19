import { InitialValuesArrayFormulariosServices } from "@/components/GestionServicios";

export interface FindTopPaciente {
  totalGasto: number;
  name: string;
  apellidos: string;
  dni: string;
  url_perfil: string;
}
export interface FindTopService extends InitialValuesArrayFormulariosServices {
  count: number;
}
