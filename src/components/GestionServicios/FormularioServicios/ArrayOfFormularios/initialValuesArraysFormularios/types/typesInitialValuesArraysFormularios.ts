// valores iniciales de los inputs (names)
export interface InitialValuesArrayFormulariosServices {
  nombre: string;
  costo: string;
}

// Propiedades para el array de formularios
export interface InitialFormulariosServices {
  servicios: InitialValuesArrayFormulariosServices[];
}

// Propiedades para la creacion de names en los inputs
export interface InputsNamesInitialServices {
  name: string;
  as?: string;
  asValues?: PropsServicesSelectAs[];
  textPlaceHolder: string;
}

// Para EL servicio as componente
type PropsServicesSelectAs = {
  name: string;
};

export type PropsArrayFormulariosServices = {
  remove: <X = number>(index: number) => X | undefined;
};
