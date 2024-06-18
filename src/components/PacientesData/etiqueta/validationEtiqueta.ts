import * as Yup from "yup";

export const validationSchemaEtiquetas = Yup.object().shape({
  tags: Yup.array()
    .of(Yup.object().shape({}).required())
    .min(1, "Selecciona al menos una etiqueta"),
});
