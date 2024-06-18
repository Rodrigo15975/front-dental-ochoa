import { InitialValuesCitas } from "@/components/GestionCitas/PanelCitas/calendario/inputs/inputNamesCitas";

export const enum STATUSCITA {
  RESERVADO = "reservado",
  CANCELADO = "cancelado",
  REPROGRAMADO = "reprogramado",
  CONFIRMADO = "confirmado",
  EN_ESPERA = "en espera",
  ATENDIDO = "atendido",
  EN_SALA = "en sala",
}

export interface CreateCita extends InitialValuesCitas {
  start: string | Date;
  end: string | Date;
}

export interface UpdateCita extends Omit<InitialValuesCitas, "idPaciente"> {
  message?: string;
  _id: string;
}

export interface Message {
  message: string;
}

export interface GetAllCitas
  extends Omit<
    CreateCita,
    "dni" | "paciente" | "idPaciente" | "estado" | "medico"
  > {
  _id: string;
  paciente: {
    _id: string;
    dni: string;
    name: string;
    apellidos: string;
    celular: string;
  };
  estado: {
    _id: string;
    estado: string;
    bg: string;
  };
  medico: {
    _id: string;
    name: string;
    apellidos: string;
  };
}

export interface UpdateChangeDateCita {
  start: string | Date;
  end: string | Date;
  message?: string;
  _id: string;
}

export interface UpdateStatusCitaConfirmada {
  idDocStado: string;
  message?: string;
}

export interface DeleteCita {
  idPaciente: string;
  idCita: string;
}

export interface UpdateStatusCitaListaEspera
  extends UpdateStatusCitaConfirmada {}

export interface UpdateStatusCitaCancelada extends UpdateStatusCitaConfirmada {}

export interface UpdateStatusCitaInSala extends UpdateStatusCitaConfirmada {}

export interface UpdateStatusCitaAtendida extends UpdateStatusCitaConfirmada {}
