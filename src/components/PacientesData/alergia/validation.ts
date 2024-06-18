import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationAlergia = yup.object().shape({
  alergias: yup.string().matches(generalValidation.matchesNotaAndAlergia, {
    message: "Carácteres inválidos(Ingresa solo letras)",
  }),
});
