import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as Yup from "yup";
export const validationSchemaPacienteUpdate = Yup.object().shape({
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
  fuenteCaptacion: Yup.string().required("Requerido"),

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
  // .optional(),
  // .optional(),
});
