import { SelectMedicos } from "@/components/SelectMedicos/SelectMedicos";
import { InputDefaultNames } from "@/types/typeInputs";

interface InputsNameNewReceta extends InputDefaultNames {}

export interface InitialValuesReceta {
  fechaReceta: string;
  horaReceta: string;
  receta: string;
  medico: string;
  notaAdicional: string;
}

export const inputsNameNewReceta: InputsNameNewReceta[] = [
  {
    name: "medico",
    textPlaceHolder: "Seleccione al Médico",
    as: "select",
    Component: <SelectMedicos />,
  },
  {
    name: "receta",
    textPlaceHolder: "Receta",
  },
];

// la hora por debajo
export const initialValueNewReceta: InitialValuesReceta = {
  fechaReceta: "",
  horaReceta: "",
  receta: "",
  medico: "",
  notaAdicional: "",
};
