import { PacienteMayor } from "@/components/GestionPacientes/AddPacientes/FormMayor/inputsPacienteMayor";
import {
  Apoderado,
  PacienteMenor,
} from "@/components/GestionPacientes/AddPacientes/FormMenor/inputsPacienteMenor";
import {
  InitialValuesNewServicesPacientes,
  ValueDetallesServicio,
} from "@/components/GestionPacientes/PanelListPacientes/ModalAddServicesPacientes/FormNewServicesPaciente/inputsNewServices/inputsNewServices";
import { InitialArchive } from "@/components/PacientesData/archivos/formArchive/inputsArchive";
import { Alergia } from "@/services/alergia/types/typeAlergias";
import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { GetAllEtiquetas } from "@/services/etiquetas/types/typesEtiquetas";
import { CreateHistorialClinica } from "@/services/historial-clinica/types/typesHistorialClinica";
import { NotaPaciente } from "@/services/notas/types/typesNotas";
import { CreatePrescripciones } from "@/services/prescripciones/types/typesPrescripciones";
import { CreateReceta } from "@/services/recetas/types/typesRecetas";

export interface CreatePaciente extends PacienteMayor {}

// Paciente General(mayor y menor) para traer los datos
export interface Pacientes extends PacienteMayor {
  apoderado: Apoderado[];
  nota: NotaPaciente;
  alergia: Alergia;
  etiquetas: GetAllEtiquetas[];
  archivos: HistoryArchive[];
  historialClinico: CreateHistorialClinica[];
  prescripciones: CreatePrescripciones[];
  recetaMedica: CreateReceta[];
  detallesServicios: HistorialPaciente[];
  detalles: DetallesServicios[];
  citas: HistoryCitas[];
}

export type MedicoData = {
  _id: string;
  apellidos: string;
  name: string;
};

export const enum Estados {
  ENPROCESO = "en proceso",
  CONCLUIDO = "concluido",
}

export const enum FuentesCaptaciones {
  TIKTOK = "tiktok",
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
}

// Omito los datos por que, no me trae los datos de id y los estado y apellids y name
// ya que solo envia los ids a la hora de registrar los datos
export interface DetallesServicios
  extends Omit<ValueDetallesServicio, "estado_tratamiento" | "medico"> {
  _id: string;
  estado_tratamiento: {
    _id: string;
    estado_tratamiento: string;
  };
  medico: MedicoData;
  docClone: boolean;
}

export interface HistoryCitas extends Omit<GetAllCitas, "pacientes"> {}

export interface HistorialPaciente
  extends Omit<
    InitialValuesNewServicesPacientes,
    "detalles_servicio" | "apoderado"
  > {}

export interface HistoryReceta extends Omit<CreateReceta, "medico"> {
  medico: MedicoData;
}
export interface HistoryPrescripcione extends Omit<CreatePrescripciones, "medico"> {
  medico: MedicoData;
}

// datos para el archivos(file paciente)
export interface HistoryArchive
  extends Omit<InitialArchive, "file" | "medico"> {
  url_archivo: string;
  id_url_archivo: string;
  _id: string;
  medico: MedicoData;
}

// id para todo los pacientes (url router-dom)
export type ID = {
  id: string;
};

export interface GetAllPacientes extends Pacientes {
  fuenteCaptacion: string;
  _id: string;
}

export type Message = {
  message: string;
};

export interface CreatePacienteMenor extends PacienteMenor {}

export interface DeletePaciente {
  id: string;
  mayorEdad: boolean;
}

interface UpdatePaciente extends Pacientes {
  message?: string;
  id?: string;
}

export type PartialUpdatePaciente = Omit<
  Partial<UpdatePaciente>,
  "role" | "mayorEdad" | "horaRegistro" | "fechaRegistro" | "url_perfil"
>;
