import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationArchive = yup.object().shape({
  nombre: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Letras y números",
    }),

  medico: yup.string().required("Seleccione al médico"),

  descripcion: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Letras y números",
    }),
  file: yup.string().required("Seleccione un archivo"),
});
