import { generalValidation } from "@/utils";
import * as yup from "yup";

export const validationNotas = yup.object().shape({
  nota: yup.string().matches(generalValidation.matchesNotaAndAlergia, {
    message: "Caracteres invalidos",
  }),
});
