import { SelectGenero } from "@/components/GestionPacientes/AddPacientes/ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";
import { Persona } from "@/types/typeUsuario";

export interface RegisterUsuario extends Persona {}

export interface InputDefaulsUsuario extends InputDefaultNames {}

export const inputDefaulstsUsuario: InputDefaulsUsuario[] = [
  { name: "dni", textPlaceHolder: "DNI" },
  { name: "name", textPlaceHolder: "Nombre", disabled: true },
  { name: "apellidos", textPlaceHolder: "Apellidos", disabled: true },
  {
    name: "fechaNacimiento",
    textPlaceHolder: "Fecha Nacimiento",
    type: "date",
  },
  {
    name: "selectFecha",
    textPlaceHolder: "Genero",
    as: "select",
    Component: <SelectGenero />,
  },
  {
    name: "selectGenero",
    textPlaceHolder: "Correo Electronico",
  },
  { name: "celular", textPlaceHolder: "Teléfono" },
  { name: "contraseña", textPlaceHolder: "Contraseña" },
  // {
  //   name: "Role",
  //   textPlaceHolder: "Seleccione un Role",
  //   as: "select",
  //   Component: <SelectRoleUsuario />,
  // },
];

export const initialValuesUsuarios: RegisterUsuario = {
  apellidos: "",
  contraseña: "",
  dni: "",
  email: "",
  fechaNacimiento: "",
  genero: "",
  name: "",
  role: "USUARIO",
  celular: "",
  ciudad: "",
  departamento: "",
  direccion: "",
  distrito: "",
  url_perfil: "",
};
