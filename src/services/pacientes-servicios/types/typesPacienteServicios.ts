import { InitialValuesNewServicesPacientes } from "@/components/GestionPacientes/PanelListPacientes/ModalAddServicesPacientes/FormNewServicesPaciente/inputsNewServices/inputsNewServices";

// Mayor de edad
export interface CreateServicioPacienteMayor
  extends Omit<InitialValuesNewServicesPacientes, "apoderado"> {}

// Menor de edad
export interface CreateServicioPacienteMenor
  extends InitialValuesNewServicesPacientes {}

export interface CreateServicioPaciente
  extends InitialValuesNewServicesPacientes {}

export type Message = {
  message: string;
};

export type GetFindByDniPaciente = {
  _id: string;
  message?: string;
  name: string;
  apellidos: string;
};
