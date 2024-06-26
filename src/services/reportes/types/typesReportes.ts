export interface ReportForDate {
  servicio: string;
  costo_servicio: string;
  costo_restante: string;
  monto_pagado: string;
  paciente: {
    _id: string;
    dni: string;
    name: string;
    apellidos: string;
  };
}

export interface DateReport {
  start: string;
  end: string;
}
