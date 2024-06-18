import SelectEstadoTratamiento from "@/components/SelectDetallesServices/SelectDetallesServices";
import { InputDefaultNames } from "@/types/typeInputs";
import { hourNowDate, registerDateInternational } from "@/utils";

interface InpustNamesNewServices extends InputDefaultNames {}

export interface ValueDetallesServicio {
  estado_tratamiento: string;
  medico: string;
  servicio: string;
  costo_servicio: string;
  monto_pagado: string;
  costo_restante: string;
  fecha_atencion: string;
}

export interface InitialValuesNewServicesPacientes {
  detalles_servicio: ValueDetallesServicio[];
  apoderado: {
    nombre: string;
    dni: string;
    apellidos: string;
    celular: string;
    email: string;
    fuenteCaptacion: string;
    fechaRegistro: string;
    horaRegistro: string;
  };

  // vuelto_restante: string;
  comentarios: string;
  fecha_atencion: string;
  montoTotal: string;
  costo_total: string;
}

export const inputsNameNewServices: InpustNamesNewServices[] = [
  {
    name: "medico",
    textPlaceHolder: "Seleccione al médico",
    as: "select",
  },
  {
    name: "servicio",
    textPlaceHolder: "Seleccione el servicio",
    as: "select",
  },
  {
    name: "costo_servicio",
    textPlaceHolder: "Costo del servicio",
  },
  {
    name: "monto_pagado",
    textPlaceHolder: "Monto a pagar",
  },

  {
    name: "estado_tratamiento",
    textPlaceHolder: "Estado del tratamiento",
    as: "select",
    Component: <SelectEstadoTratamiento />,
  },
  {
    name: "costo_restante",
    textPlaceHolder: "Costo restante",
    disabled: true,
  },

  {
    name: "montoTotal",
    textPlaceHolder: "Monto Total",
    disabled: true,
    as: "textarea",
  },
  {
    name: "costo_total",
    textPlaceHolder: "Costo total",
    as: "textarea",
    disabled: true,
  },
  {
    name: "comentarios",
    textPlaceHolder: "Comentarios",
    as: "textarea",
  },
  // Monto total ira por debajo
  // {
  //   name: "vuelto_restante",
  //   textPlaceHolder: "Vuelto Restante",
  //   as: "textarea",
  //   disabled: true,
  // },
];

export const inputsNameServicesMenorEdad: InpustNamesNewServices[] = [
  {
    name: "dni",
    textPlaceHolder: "DNI",
  },
  {
    name: "nombre",
    textPlaceHolder: "Nombre",
    disabled: true,
  },
  {
    name: "apellidos",
    textPlaceHolder: "Apellidos",
    disabled: true,
  },
];

export const initialPushNewServices: ValueDetallesServicio = {
  estado_tratamiento: "",
  medico: "",
  servicio: "",
  costo_servicio: "",
  costo_restante: "",
  fecha_atencion: "",
  monto_pagado: "",
};

const fecha_atencion = registerDateInternational();
const hour = hourNowDate();

export const initialValuesNewServicesPacientes: InitialValuesNewServicesPacientes =
  {
    detalles_servicio: [
      {
        estado_tratamiento: "",
        medico: "",
        servicio: "",
        costo_servicio: "",
        costo_restante: "",
        fecha_atencion: "",
        monto_pagado: "",
      },
    ],
    // Solo un apoderado, para todo los servicios si es menor de edad
    apoderado: {
      apellidos: "",
      dni: "",
      nombre: "",
      email: "",
      celular: "",
      fuenteCaptacion: "",
      fechaRegistro: fecha_atencion,
      horaRegistro: hour,
    },
    fecha_atencion: ``,
    comentarios: "",
    // vuelto_restante: "",
    montoTotal: "",
    costo_total: "",
  };
