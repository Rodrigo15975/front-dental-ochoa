import { SelectGenero } from "@/components/GestionPacientes/AddPacientes/ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";
import { Persona } from "@/types/typeUsuario";

interface Props extends InputDefaultNames {}

export const dataInputsInformation: Props[] = [
  { textPlaceHolder: "DNI", name: "dni", disabled: true },
  {
    textPlaceHolder: "Nombre",
    name: "name",
    disabled: true,
  },
  { textPlaceHolder: "Apellidos", name: "apellidos", disabled: true },
  { textPlaceHolder: "Email", name: "email" },
  { textPlaceHolder: "Celular", name: "celular" },
  {
    name: "genero",
    textPlaceHolder: "Genero",
    as: "select",
    Component: <SelectGenero />,
  },
  {
    textPlaceHolder: "Fecha de Nacimiento",
    type: "date",
    name: "fechaNacimiento",
  },
  { textPlaceHolder: "Departamento", name: "departamento" },
  { textPlaceHolder: "Distrito", name: "distrito" },

  { textPlaceHolder: "Ciudad", name: "ciudad" },
  { textPlaceHolder: "Dirección", name: "direccion" },
];
interface InitialProfileUpdate extends Omit<Persona, "contraseña"> {}

export const initialInpustInformation: InitialProfileUpdate = {
  dni: "",
  apellidos: "",
  name: "",
  email: "",
  celular: "",
  genero: "",
  fechaNacimiento: "",
  departamento: "",
  distrito: "",
  role: "USUARIO",
  url_perfil: "",
  ciudad: "",
  direccion: "",
};

// hacer el tipado para editar seria partial
