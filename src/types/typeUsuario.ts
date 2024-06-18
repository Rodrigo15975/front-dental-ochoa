import { ROLES } from "./typeRoles";

interface PropsPersona {
  dni: string;
  name: string;
  apellidos: string;
  contraseña: string;
  email: string;
  celular: string;
  genero: string;
  fechaNacimiento: string;
  url_perfil: string;
  direccion: string;
  departamento: string;
  ciudad: string;
  distrito: string;
  role: keyof typeof ROLES;
}

export class Persona implements PropsPersona {
  dni: string = "";
  name: string = "";
  apellidos: string = "";
  contraseña: string = "";
  email: string = "";
  celular: string = "";
  genero: string = "";
  fechaNacimiento: string = "";
  url_perfil: string = "";
  direccion: string = "";
  departamento: string = "";
  ciudad: string = "";
  distrito: string = "";
  role: "USUARIO" | "PACIENTE" | "MEDICO" = "PACIENTE";
}
