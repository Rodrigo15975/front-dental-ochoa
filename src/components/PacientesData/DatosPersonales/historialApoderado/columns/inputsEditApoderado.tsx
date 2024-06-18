import { SelectFuenteCaptacion } from "@/components/GestionPacientes/AddPacientes/ComponentsSelectPacientes";
import { InputDefaultNames } from "@/types/typeInputs";
import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
export const inputsApoderadoEdit: InputDefaultNames[] = [
  // Apoderado
  { name: "dni", textPlaceHolder: "DNI", disabled: true },
  { name: "nombre", textPlaceHolder: "Nombre", disabled: true },
  { name: "apellidos", textPlaceHolder: "Apellidos", disabled: true },
  { name: "celular", textPlaceHolder: "Celular" },
  { name: "email", textPlaceHolder: "Email" },
  {
    name: "fuenteCaptacion",
    textPlaceHolder: "Fuente de Captación",
    as: "select",
    Component: <SelectFuenteCaptacion />,
  },
];

export const validationEditApoderadoSchema = Yup.object().shape({
  dni: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesDNI, {
      message: messageValidation.msgDNI,
    }),
  apellidos: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),
  celular: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesPhones, {
      message: "Un celular válido",
    }),
  email: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesEmail, {
      message: "Email inválido",
    }),
  fuenteCaptacion: Yup.string().required("Requerido"),
  nombre: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),
});
