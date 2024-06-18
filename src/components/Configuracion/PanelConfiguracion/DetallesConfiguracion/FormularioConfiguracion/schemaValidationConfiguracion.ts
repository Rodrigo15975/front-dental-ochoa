import {
  generalValidation,
  messageValidation,
} from "@/utils/validationsSchemasGeneral";
import * as yup from "yup";

export const validationSchemaConfiguracion = yup.object().shape({
  direccion: yup
    .string()
    .required("Requerida")
    .matches(generalValidation.matchesDireccion, {
      message: messageValidation.msgDireccion,
    })
    .optional(),

  nombre_comercial: yup
    .string()
    .optional()
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    }),

  razon_social: yup
    .string()
    .required("Requerida")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
  ruc: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesRuc, {
      message: messageValidation.msgRuc,
    }),

  telefono: yup
    .string()
    .matches(generalValidation.matchesPhones, {
      message: messageValidation.msgPhones,
    })
    .optional(),

  distrito: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
  provincia: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
  departamento: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
  estado: yup
    .string()
    .required("Requerido")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
  condicion: yup
    .string()
    .required("Requerida")
    .matches(generalValidation.matchesLetras, {
      message: messageValidation.msgLetras,
    })
    .optional(),
});
