import { InputDefaultNames } from "@/types/typeInputs";
import {
  SelectFuenteCaptacion,
  SelectGenero,
} from "../ComponentsSelectPacientes";
import { Persona } from "@/types/typeUsuario";
import { hourNowDate, registerDateInternational } from "@/utils";

export interface PacienteMenor
  extends Omit<Persona, "contraseña" | "email" | "celular"> {
  apoderado: Apoderado;
  mayorEdad: boolean;
  fechaRegistro: string;
  horaRegistro: string;
}

export interface Apoderado {
  nombre: string;
  dni: string;
  apellidos: string;
  celular: string;
  email: string;
  fuenteCaptacion: string;
  fechaRegistro: string;
  horaRegistro: string;
}

export interface ApoderadoEdit extends Apoderado {
  _id: string;
  message?: string;
}

export const inputsPacienteMenor: InputDefaultNames[] = [
  { name: "dni", textPlaceHolder: "DNI" },
  { name: "name", textPlaceHolder: "Nombre" },
  { name: "apellidos", textPlaceHolder: "Apellidos" },
  {
    name: "fechaNacimiento",
    textPlaceHolder: "Fecha Nacimiento",
    type: "date",
  },
  {
    name: "genero",
    textPlaceHolder: "Genero",
    as: "select",
    Component: <SelectGenero />,
  },

  // Apoderado
  { name: "apoderado.dni", textPlaceHolder: "DNI" },
  { name: "apoderado.nombre", textPlaceHolder: "Nombre" },
  { name: "apoderado.apellidos", textPlaceHolder: "Apellidos" },
  { name: "apoderado.celular", textPlaceHolder: "Celular" },
  { name: "apoderado.email", textPlaceHolder: "Email" },
  {
    name: "apoderado.fuenteCaptacion",
    textPlaceHolder: "Fuente de Captación",
    as: "select",
    Component: <SelectFuenteCaptacion />,
  },
];

const horaRegistro = hourNowDate();
const fechaRegistro = registerDateInternational();
export const initialPacienteMenor: PacienteMenor = {
  apellidos: "",
  dni: "",
  name: "",
  mayorEdad: false,
  fechaNacimiento: "",
  genero: "",
  ciudad: "",
  departamento: "",
  direccion: "",
  distrito: "",
  url_perfil: "",
  role: "PACIENTE",
  fechaRegistro,
  horaRegistro,
  apoderado: {
    apellidos: "",
    celular: "",
    dni: "",
    email: "",
    fuenteCaptacion: "",
    nombre: "",
    fechaRegistro,
    horaRegistro,
  },
};
