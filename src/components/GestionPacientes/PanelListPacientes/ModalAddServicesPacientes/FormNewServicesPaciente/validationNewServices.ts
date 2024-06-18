import { generalValidation, messageValidation } from "@/utils";
import * as Yup from "yup";

// Esquema para detalles_servicio
export const detalleServicioSchema = Yup.object().shape({
  medico: Yup.string().required("Requerido"),
  servicio: Yup.string().required("Requerido"),
  costo_servicio: Yup.string()
    .required("Requerido")
    .matches(
      /^(?:\d+|\d*\.\d+)$/,
      "Solo se permiten números positivos, enteros o decimales"
    ),
  monto_pagado: Yup.string()
    .required("Requerido")
    .matches(
      /^(?:\d+|\d*\.\d+)$/,
      "Solo se permiten números positivos, enteros o decimales"
    ),
  estado_tratamiento: Yup.string().required("Requerido"),
});

// Esquema para apoderado
const apoderadoSchema = Yup.object().shape({
  apellidos: Yup.string().required("Los apellidos son requeridos"),
  dni: Yup.string()
    .required("El DNI es requerido")
    .matches(generalValidation.matchesDNI, {
      message: messageValidation.msgDNI,
    }),
  nombre: Yup.string().required("El nombre es requerido"),
});

// Esquema principal
export const initialValuesMayorSchema = Yup.object().shape({
  detalles_servicio: Yup.array().of(detalleServicioSchema),

  comentarios: Yup.string()
    .optional()
    .matches(generalValidation.matchesLetrasAndNumbers, {
      message: "Solo letras y números",
    }), // Comentarios pueden ser opcionales
});

export const initialValuesMenorSchema = Yup.object().shape({
  detalles_servicio: Yup.array().of(detalleServicioSchema),
  apoderado: apoderadoSchema,
});
