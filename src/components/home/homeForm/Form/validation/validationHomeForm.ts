import { generalValidation, messageValidation } from "@/utils";
import * as yup from "yup";

export const validationValuesFormLogin = yup.object().shape({
  identifier: yup
    .string()
    .required("El usuario es requerido")
    .matches(generalValidation.matchesAuth, {
      message: "Ingrese un usuario correcto",
    }),
  contraseña: yup
    .string()
    .required("Password requerido")
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: `${messageValidation.msgPassword}`,
    }),
});
