import { Persona } from "@/types/typeUsuario";
import {
  SelectFuenteCaptacion,
  SelectGenero,
} from "../ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";
import { hourNowDate, registerDateInternational } from "@/utils";

export interface PacienteMayor extends Omit<Persona, "contraseña"> {
  fuenteCaptacion: string;
  mayorEdad: boolean;
  fechaRegistro: string;
  horaRegistro: string;
}

export const inputsPacienteMayor: InputDefaultNames[] = [
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
  {
    name: "fuenteCaptacion",
    textPlaceHolder: "Fuente de Captación",
    as: "select",
    Component: <SelectFuenteCaptacion />,
  },
  { name: "celular", textPlaceHolder: "Celular" },
  { name: "email", textPlaceHolder: "Email" },
];

const fechaRegistro = registerDateInternational();
const horaRegistro = hourNowDate();

export const initialPacienteMayor: PacienteMayor = {
  apellidos: "",
  dni: "",
  name: "",
  email: "",
  mayorEdad: true,
  fechaNacimiento: "",
  genero: "",
  role: "PACIENTE",
  celular: "",
  fuenteCaptacion: "",
  ciudad: "",
  departamento: "",
  direccion: "",
  distrito: "",
  fechaRegistro,
  horaRegistro,
  url_perfil: "",
};
