import { generalValidation, messageValidation } from "@/utils";
import * as Yup from "yup";

// Define the schema for InitialValuesCitas
export const initialValuesCitasSchema = Yup.object().shape({
  dni: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesDNI, messageValidation.msgDNI),
  estado: Yup.string().required("Requerido"),
  medico: Yup.string().required("Requerido"),
  observacion: Yup.string()
    .optional()
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo letras y números",
    }), // Optional field, can be null
  paciente: Yup.string().required("Requerido"),
});
