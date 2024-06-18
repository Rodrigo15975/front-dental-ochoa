import {
  SelectFuenteCaptacion,
  SelectGenero,
} from "@/components/GestionPacientes/AddPacientes/ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";
import { Persona } from "@/types/typeUsuario";

export interface EditPaciente
  extends Omit<Persona, "contraseña" | "Role" | "url_perfil"> {}

export interface InputsNameDataPersonales extends InputDefaultNames {}

export const inputsNameDataPersonales: InputsNameDataPersonales[] = [
  { name: "dni", textPlaceHolder: "DNI", disabled: true },
  { name: "name", textPlaceHolder: "Nombre", disabled: true },
  { name: "apellidos", textPlaceHolder: "Apellidos", disabled: true },
  {
    name: "fechaNacimiento",
    textPlaceHolder: "Fecha Nacimiento",
    type: "date",
  },
  { name: "celular", textPlaceHolder: "Teléfono" },
  {
    name: "fuenteCaptacion",
    textPlaceHolder: "Fuente de Captación",
    Component: <SelectFuenteCaptacion />,
    as: "select",
  },
  {
    name: "email",
    textPlaceHolder: "Email",
  },
  {
    name: "departamento",
    textPlaceHolder: "Departamento",
  },
  {
    name: "ciudad",
    textPlaceHolder: "Ciudad",
  },
  {
    name: "direccion",
    textPlaceHolder: "Direccion",
  },
  {
    name: "distrito",
    textPlaceHolder: "Distrito",
  },

  {
    name: "genero",
    textPlaceHolder: "Genero",
    as: "select",
    Component: <SelectGenero />,
  },
];
