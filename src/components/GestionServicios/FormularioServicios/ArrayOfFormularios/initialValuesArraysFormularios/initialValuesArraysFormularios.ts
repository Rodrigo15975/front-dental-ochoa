import {
  InitialFormulariosServices,
  InputsNamesInitialServices,
} from "./types/typesInitialValuesArraysFormularios";

// Initial Form data
export const INITIAL_VALUES_ARRAYS_SERVICES: InitialFormulariosServices = {
  servicios: [
    {
      costo: "",
      nombre: "",
    },
  ],
};

// InpustData
export const NAME_INPUTS_VALUES_SERVICES: InputsNamesInitialServices[] = [
  {
    name: "nombre",
    textPlaceHolder: "Nombre",
  },

  {
    name: "costo",
    textPlaceHolder: "Costo",
  },
];

export const initialValuesPushServices = {
  costo: "",
  nombre: "",
};

// Initial Edit Form Data
export const INITIAL_EDIT_VALUES_SERVICES = {
  nombre: "",
  costo: "",
};


