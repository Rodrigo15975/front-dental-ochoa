import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import { differenceInYears } from "date-fns";
import * as Yup from "yup";
export const validationSchemaMayor = Yup.object().shape({
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
  fuenteCaptacion: Yup.string().required("Requerido"),
  fechaNacimiento: Yup.string()
    .required("Requerido")
    .test(
      "edad-valida",
      "La edad debe estar entre 18 y 80 años",
      function (value) {
        if (!value) {
          return false; // La validación de requerido se encarga de esto
        }
        const today = new Date();
        const birthDate = new Date(value);
        const age = differenceInYears(today, birthDate);
        return age >= 18 && age <= 80;
      }
    ),

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
