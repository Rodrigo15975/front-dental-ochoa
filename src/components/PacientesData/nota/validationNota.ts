import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationNota = yup.object().shape({
  nota: yup.string().matches(generalValidation.matchesNotaAndAlergia, {
    message: "Ingresa solo carácteres(letras)",
  }),
});
