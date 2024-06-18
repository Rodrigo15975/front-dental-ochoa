import { SelectMedicos } from "@/components/SelectMedicos/SelectMedicos";
import { InputDefaultNames } from "@/types/typeInputs";

interface InputsNameNewPrescripcion extends InputDefaultNames {}

export interface InitialPrescripciones {
  fechaPrescripcion: string;
  horaPrescripcion: string;
  medico: string;
  prescripcion: string;
  notaAdicional: string;
  responsabilidad: string;
}

export const inputsNameNewPrescription: InputsNameNewPrescripcion[] = [
  {
    name: "medico",
    textPlaceHolder: "Seleccione al Médico",
    Component: <SelectMedicos />,
    as: "select",
  },
  {
    name: "prescripcion",
    textPlaceHolder: "Prescripción",
  },
];
// la hora por debajo
export const initialValueNewPrescripcion: InitialPrescripciones = {
  medico: "",
  prescripcion: "",
  notaAdicional: "",
  responsabilidad: "Consentimiento del paciente",
  fechaPrescripcion: "",
  horaPrescripcion: "",
};
