import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
export const validationSchemaMenor = Yup.object().shape({
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

  apoderado: Yup.object().shape({
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
  }),
});
