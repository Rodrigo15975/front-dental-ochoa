import { InitialValuesArrayFormulariosServices } from "@/components/GestionServicios";
import { InitialAsignarServicio } from "@/components/GestionServicios/asignarServicios/types/typesAsginarServicios";

export interface GetAllServices extends InitialValuesArrayFormulariosServices {
  message: string;
  _id: string;
}

export type Message = {
  message: string;
};
export interface CreateServicio {
  servicios: InitialValuesArrayFormulariosServices[];
}

interface UpdateServices extends GetAllServices {}

export type PartialUpdateServices = Partial<UpdateServices>;

export type PartialAsignarServices = Partial<InitialAsignarServicio>;
