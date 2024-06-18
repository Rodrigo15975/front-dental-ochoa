import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";

// Es general para editar medico y usuario
export const validationSchemaUsuario = Yup.object().shape({
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

  name: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),

  genero: Yup.string().required("Requerido"),

  fechaNacimiento: Yup.string().required("Requerido"),

  ciudad: Yup.string()
    .required("Requerido")
    .optional()
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),
  departamento: Yup.string()
    .required("Requerido")
    .optional()
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),
  distrito: Yup.string()
    .required("Requerido")
    .optional()
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),
  direccion: Yup.string()
    .required("Requerido")
    .optional()
    .matches(generalValidation.matchesDireccion, {
      message: messageValidation.msgDireccion,
    }),

  celular: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesPhones, {
      message: messageValidation.msgPhones,
    }),

  email: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesEmail, {
      message: messageValidation.msgEmail,
    }),
});
