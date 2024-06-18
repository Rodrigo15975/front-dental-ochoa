import { SelectMedicos } from "@/components/SelectMedicos/SelectMedicos";
import { InputDefaultNames } from "@/types/typeInputs";
import { SelectEstadoCita } from "../SelectEstadoCita";

export interface InputsNamesCitas extends InputDefaultNames {}

export const inputsNamesCitas: InputsNamesCitas[] = [
  {
    name: "dni",
    textPlaceHolder: "Paciente DNI",
  },
  {
    name: "paciente",
    textPlaceHolder: "Paciente",
  },
  {
    name: "medico",
    textPlaceHolder: "Medico",
    Component: <SelectMedicos />,
    as: "select",
  },
  // {
  //   name: "servicio",
  //   textPlaceHolder: "Servicio",
  //   as: "select",
  //   Component: <SelectServicioCita />,
  // },
  {
    name: "estado",
    textPlaceHolder: "Estado",
    as: "select",
    Component: <SelectEstadoCita />,
  },

  {
    name: "observacion",
    textPlaceHolder: "Observación/Comentarios",
    as: "textarea",
  },
];
export type InitialValuesCitas = {
  medico: string;
  // servicio: string;
  observacion: string;
  dni: string;
  estado: string;
  paciente: string;
  idPaciente: string;
};

export const initialValuesInputsCitas: InitialValuesCitas = {
  dni: "",
  estado: "",
  medico: "",
  observacion: "",
  // servicio: "",
  paciente: "",
  idPaciente: "",
};
