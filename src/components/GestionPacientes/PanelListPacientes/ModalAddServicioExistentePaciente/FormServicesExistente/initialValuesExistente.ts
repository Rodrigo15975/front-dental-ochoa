export interface InitialServicesExistente {
  medico: string;
  estado_tratamiento: string;
  costo_restante: string;
  servicio: string;
  costo_servicio: string;
  monto_pagado: string;
  comentarios: string;
  vuelto_restante: string;
  costo_total: string;
  montoTotal: string;
  fecha_atencion: string;
  id: string;
}

export const initialValuesServiceExistente: InitialServicesExistente = {
  medico: "",
  estado_tratamiento: "",
  costo_restante: "",
  servicio: "",
  costo_servicio: "",
  monto_pagado: "",
  comentarios: "",
  vuelto_restante: "",
  costo_total: "",
  montoTotal: "",
  fecha_atencion: "",
  id: "",
};
