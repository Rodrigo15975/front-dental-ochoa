import { generalValidation, messageValidation } from "@/utils";
import * as Yup from "yup";

export const validationSchemaAsignarServicio = Yup.object().shape({
  servicios: Yup.array()
    .of(Yup.object().shape({}).required())
    .min(1, "Selecciona al menos un servicio"),
  dni: Yup.string()
    .required("Requerido")
    .matches(generalValidation.matchesDNI, {
      message: messageValidation.msgDNI,
    }),
});
