import { SelectMedicos } from "@/components/SelectMedicos/SelectMedicos";
import { InputDefaultNames } from "@/types/typeInputs";
import { hourNowDate, registerDateInternational } from "@/utils";

interface InputsDefaultsArchive extends InputDefaultNames {}

export const inputsDefaultsArchive: InputsDefaultsArchive[] = [
  {
    name: "nombre",
    textPlaceHolder: "Nombre del archivo",
  },
  {
    name: "medico",
    Component: <SelectMedicos />,
    textPlaceHolder: "Seleccione al médico",
    as: "select",
  },
];

export interface InitialArchive {
  nombre: string;
  descripcion: string;
  medico: string;
  fechaCreacion: string;
  horaCreacion: string;
  file: FormData | undefined;
}



const horaCreacion = hourNowDate();
const fechaCreacion = registerDateInternational();

export const initialArchive: InitialArchive = {
  nombre: "",
  descripcion: "",
  medico: "",
  fechaCreacion,
  horaCreacion,
  file: undefined,
};
