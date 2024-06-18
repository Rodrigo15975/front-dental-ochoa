import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationNewPrescripcion = yup.object().shape({
  prescripcion: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      
      message: "Solo es válido letras y números",
    }),
  medico: yup.string().required("Seleccione un médico"),

  notaAdicional: yup
    .string()
    .optional()
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo es válido letras y números",
    }),
});

export const validationNewReceta = yup.object().shape({
  medico: yup.string().required("Seleccione un médico"),

  receta: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo es válido letras y números",
    }),
  notaAdicional: yup
    .string()
    .optional()
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo es válido letras y números",
    }),
});
