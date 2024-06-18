import { InputDefaultNames } from "@/types/typeInputs";
import { hourNowDate, registerDateInternational } from "@/utils";

interface InpustNewHistorialClinica extends InputDefaultNames {}

export const inpustNewHistorialClinica: InpustNewHistorialClinica[] = [
  {
    name: "enfermedad",
    textPlaceHolder: "Enfermedad",
  },
  {
    name: "tiempo",
    textPlaceHolder: "Tiempo de la enfermedad",
  },
  {
    name: "sintomas",
    textPlaceHolder: "Sintomas principales",
  },
  {
    name: "presion_alta",
    textPlaceHolder: "Presion Alta",
    type: "checkbox",
  },
  {
    name: "presion_baja",
    textPlaceHolder: "Presion Baja",
    type: "checkbox",
  },
  {
    name: "hepatitis",
    textPlaceHolder: "Hepatitis",
    type: "checkbox",
  },
  {
    name: "gastritis",
    textPlaceHolder: "Gastritis",
    type: "checkbox",
  },
  {
    name: "ulcera",
    textPlaceHolder: "Ulcera",
    type: "checkbox",
  },
  {
    name: "alergias",
    textPlaceHolder: "Alergias",
    type: "checkbox",
  },
  {
    name: "diabetes",
    textPlaceHolder: "Diabetes",
    type: "checkbox",
  },
  {
    name: "asma",
    textPlaceHolder: "Asma",
    type: "checkbox",
  },
  {
    name: "enfermedad_sanguinea",
    textPlaceHolder: "Enfermedeades Sanguíneas",
    type: "checkbox",
  },
  {
    name: "problemas_cardiacos",
    textPlaceHolder: "Problemas cardíacos",
    type: "checkbox",
  },
  {
    name: "sangrado_encias",
    textPlaceHolder: "Le sangra sus encías",
    type: "checkbox",
  },
  {
    name: "medicina_permanente",
    textPlaceHolder: "Toma alguna medicación de manera permanente",
    type: "checkbox",
  },
];

export interface InitialValueNewHistorialClinica {
  enfermedad: string;
  tiempo: string;
  sintomas: string;
  presion_alta: boolean;
  presion_baja: boolean;
  hepatitis: boolean;
  ulcera: boolean;
  asma: boolean;
  gastritis: boolean;
  diabetes: boolean;
  alergias: boolean;
  enfermedad_sanguinea: boolean;
  problemas_cardiacos: boolean;
  medicina_permanente: boolean;
  sangrado_encias: boolean;
  fecha: string;
  hora: string;
}

const fecha = registerDateInternational();
const hora = hourNowDate();

export const initialValueNewHistorialClinica: InitialValueNewHistorialClinica =
  {
    fecha: fecha,
    hora: hora,
    enfermedad: "",
    tiempo: "",
    sintomas: "",
    presion_alta: false,
    presion_baja: false,
    hepatitis: false,
    ulcera: false,
    asma: false,
    gastritis: false,
    diabetes: false,
    alergias: false,
    enfermedad_sanguinea: false,
    problemas_cardiacos: false,
    medicina_permanente: false,
    sangrado_encias: false,
  };
