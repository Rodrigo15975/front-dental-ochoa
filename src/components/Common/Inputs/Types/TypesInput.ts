import React, { ReactNode } from "react";

export type PropsInput = {
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  componentField?: React.JSX.Element & ReactNode;
  label?: string; // Texto que se utilizará como etiqueta para el input
  type?: string; // Tipo de input, por ejemplo, "text", "password", etc
  name: string; // Nombre único del input.
  className?: string; // Clase CSS que se puede aplicar al input para estilizarlo
  textPlaceHolder?: string;
  disabled?: boolean;
  labelClassName?: string;
  classNameParentInputs?: string;
  Icon?: string;
  reset?: boolean;
  as?: string;
  AsComPonente?: React.JSX.Element & ReactNode;
};

// Props para pasar a los inputs componentes diferentes
export type PropsInputOptional = {
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  // Para pasar el valor
  value?: string;
  // Si es un array para pasarle la posicion y hacer mas formularios
  index?: number | string;
  remove?: <X = number>(index: number) => X | undefined;
};
