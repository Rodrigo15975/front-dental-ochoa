import { Users } from "@/components/Common";
import { RegisterMedico } from "@/components/GestionMedicos/FormArrayGestionMedicos/ModalFormulariosMedicos/inputsFormularioMedicos/inputsNamesMedicos";
import { CreateAsistencia } from "@/services/asistencia/types/typeAsistencia";

export type Message = {
  message: string;
};

export interface GetAllMedicos extends Users {
  asistencia: GetAllAsistencia[];
  activo: boolean;
}
export interface GetAllAsistencia extends Omit<CreateAsistencia, "idMedico"> {
  hora: string;
}

export interface CreateMedico extends RegisterMedico {}

interface UpdateMedico extends CreateMedico {
  _id: string;
  message: string;
}

export type PartialUpdateMedico = Partial<UpdateMedico>;
