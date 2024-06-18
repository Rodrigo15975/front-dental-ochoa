import * as Yup from "yup";

export interface InitialEditAction {
  estado_tratamiento: string;
  idDoc: string;
  message?: string;
}

// Esquema para detalles_servicio
export const schemaValidationEstadoTratamiento = Yup.object().shape({
  estado_tratamiento: Yup.string().required("Seleccione un estado"),
});
