import { generalValidation, messageValidation } from "@/utils";
import * as yup from "yup";

export const ServicioSchema = yup.object().shape({
  costo: yup
    .string()
    .required("El costo es requerido")
    .matches(/^\d+(\.\d+)?$/, {
      message: "El costo debe ser un número positivo",
      excludeEmptyString: true,
    }),
  nombre: yup
    .string()
    .required("El nombre es requerido")
    .matches(generalValidation.matchesLetras, {
      message: `Solo puede ingresar ${messageValidation.msgLetras}`,
    }),
});

export const InitialFormulariosServicesSchema = yup.object().shape({
  servicios: yup.array().of(ServicioSchema),
});
