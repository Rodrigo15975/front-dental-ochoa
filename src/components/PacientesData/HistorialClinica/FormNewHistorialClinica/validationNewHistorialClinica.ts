import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationNewHistorialClinica = yup.object().shape({
  enfermedad: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo se permite letras y números",
    }),
  tiempo: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo se permite letras y números",
    }),
  sintomas: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo se permite letras y números",
    }),
});
