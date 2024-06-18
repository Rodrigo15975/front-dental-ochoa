import { InputDefaultNames } from "@/types/typeInputs";

export interface InputsConfiguracion extends InputDefaultNames {}

// Propiedades para el valor inicial del input
export interface PropsInitialInputsConfiguracion {
  img_consultorio: string;

  img_logo: string;

  id_logo: string;

  ruc: string;

  razon_social: string;
  nombre_comercial: string;

  id_img_consultorio: string;

  telefono: string;

  estado: string;

  condicion: string;

  direccion: string;

  departamento: string;

  provincia: string;

  distrito: string;

  isRegisterConsultorio: boolean;
}

// Valor inicial
export const initialInputsConfiguracion: PropsInitialInputsConfiguracion = {
  img_consultorio: "",
  isRegisterConsultorio: false,
  id_img_consultorio: "",
  id_logo: "",
  img_logo: "",

  ruc: "",
  nombre_comercial: "",
  razon_social: "",
  estado: "",
  condicion: "",
  telefono: "",
  direccion: "",
  departamento: "",
  provincia: "",
  distrito: "",
};

// Inputs
export const inputsLabelConfiguracion: InputsConfiguracion[] = [
  {
    name: "ruc",
    textPlaceHolder: "RUC",
  },
  {
    name: "nombre_comercial",
    textPlaceHolder: "Nombre Comercial",
  },

  {
    name: "razon_social",
    textPlaceHolder: "Razón Social",
  },

  {
    name: "estado",
    textPlaceHolder: "Estado",
  },
  {
    name: "condicion",
    textPlaceHolder: "Condición",
  },
  {
    name: "telefono",
    textPlaceHolder: "Teléfono",
  },
  {
    name: "direccion",
    textPlaceHolder: "Direccion",
  },
  {
    name: "departamento",
    textPlaceHolder: "Departamento",
  },
  {
    name: "provincia",
    textPlaceHolder: "Provincia",
  },
  {
    name: "distrito",
    textPlaceHolder: "Distrito",
  },
];
