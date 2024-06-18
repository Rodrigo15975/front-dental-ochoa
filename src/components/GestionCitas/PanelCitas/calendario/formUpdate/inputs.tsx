import { SelectMedicos } from "@/components/SelectMedicos/SelectMedicos";
import { InputDefaultNames } from "@/types/typeInputs";
// import { SelectEstadoEditCit } from "../SelectEstadoCita";]

export interface InputsNamesCitas extends InputDefaultNames {}

export const inputsNamesCitasUpdate: InputsNamesCitas[] = [
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

  {
    name: "estado",
    textPlaceHolder: "Estado",
    as: "select",
    // Component: <SelectEstadoEditCit />,
  },

  {
    name: "observacion",
    textPlaceHolder: "Observación",
    as: "textarea",
  },
];
export type InitialValuesCitasUpdate = {
  medico: string;
  // servicio: string;
  observacion: string;
  dni: string;
  estado: string;
  paciente: string;
  idPaciente: string;
};

export const initialValuesInputsCitasUpdate: InitialValuesCitasUpdate = {
  dni: "",
  estado: "",
  medico: "",
  observacion: "",
  paciente: "",
  idPaciente: "",
};
