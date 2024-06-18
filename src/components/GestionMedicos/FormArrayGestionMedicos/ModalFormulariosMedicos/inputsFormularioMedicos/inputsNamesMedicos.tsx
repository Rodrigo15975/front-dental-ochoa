import { Users } from "@/components/Common";
import { SelectGenero } from "@/components/GestionPacientes/AddPacientes/ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";

// Solo para registrar
export interface RegisterMedico extends Omit<Users, "_id"> {
  // tipado de los servicos , cuando llame
  asistencia: [];
}

export interface InputDefaulsMedico extends InputDefaultNames {}

export const inputDefaulstsMedico: InputDefaulsMedico[] = [
  { name: "dni", textPlaceHolder: "DNI" },
  { name: "name", textPlaceHolder: "Nombre", disabled: true },
  { name: "apellidos", textPlaceHolder: "Apellidos", disabled: true },
  {
    name: "fechaNacimiento",
    textPlaceHolder: "Fecha Nacimiento",
    type: "date",
  },
  // { name: "servicio", textPlaceHolder: "Seleccione un servicio" },
  {
    name: "genero",
    textPlaceHolder: "Genero",
    as: "select",
    Component: <SelectGenero />,
  },
  {
    name: "email",
    textPlaceHolder: "Correo Electronico",
  },
  { name: "contraseña", textPlaceHolder: "Contraseña" },
  { name: "celular", textPlaceHolder: "Teléfono" },
  // {
  //   name: "Role",
  //   textPlaceHolder: "Seleccione un Role",
  //   as: "select",
  //   Component: <SelectRoleMedico />,
  // },
];

export const initialValuesMedico: RegisterMedico = {
  apellidos: "",
  contraseña: "",
  dni: "",
  email: "",
  fechaNacimiento: "",
  genero: "",
  name: "",
  role: "MEDICO",
  celular: "",
  ciudad: "",
  departamento: "",
  direccion: "",
  distrito: "",
  servicios: [],
  asistencia: [],
  url_perfil: "",
};
