import { InputDefaultNames } from "@/types/typeInputs";
import { Final, Inicio } from "./InicioFinalHour";

export const INICIO = [
  { name: "7:00AM", value: "07:00:00" },
  { name: "8:00AM", value: "08:00:00" },
  { name: "9:00AM", value: "09:00:00" },
  { name: "10:00AM", value: "10:00:00" },
  { name: "11:00AM", value: "11:00:00" },
];
export const FINAL = [
  { name: "12:00PM", value: "12:00:00" },
  { name: "1:00PM", value: "13:00:00" },
  { name: "2:00PM", value: "14:00:00" },
  { name: "3:00PM", value: "15:00:00" },
  { name: "4:00PM", value: "16:00:00" },
  { name: "5:00PM", value: "17:00:00" },
  { name: "6:00PM", value: "18:00:00" },
  { name: "7:00PM", value: "19:00:00" },
  { name: "8:00PM", value: "20:00:00" },
  { name: "9:00PM", value: "21:00:00" },
  { name: "10:00PM", value: "22:00:00" },
  { name: "11:00PM", value: "23:00:00" },
];

export const inputsHorario: InputDefaultNames[] = [
  {
    name: "inicio",
    textPlaceHolder: "Inicio",
    as: "select",
    Component: <Inicio />,
  },
  {
    name: "final",
    textPlaceHolder: "Final",
    as: "select",
    Component: <Final />,
  },
];

