import {
  DetallesServicios,
  Estados,
} from "@/services/pacientes/types/typesPaciente";
import { ColumnProps } from "primereact/column";
import EditAction from "./editAction";

const columnsHistoryServicios = () => {
  const estado = (data: DetallesServicios) => (
    <>
      {data.estado_tratamiento && (
        <p
          className={` font-robotoSlab_700 h-full flex items-center justify-center rounded-md ${
            data.estado_tratamiento.estado_tratamiento === Estados.ENPROCESO
              ? "bg-bg_six/50"
              : "bg-bg_three/50"
          } `}
        >
          {data.estado_tratamiento.estado_tratamiento}
        </p>
      )}
    </>
  );

  const costoRestante = (data: DetallesServicios) => (
    <>
      {data.costo_servicio && (
        <p
          className={`h-full font-robotoSlab_600 rounded-md flex items-center justify-center ${
            data.costo_restante === "0.00" ? "bg-bg_nine" : " bg-bg_seven"
          }`}
        >
          S/ {data.costo_restante}
        </p>
      )}
    </>
  );
  const costoServicio = (data: DetallesServicios) => (
    <>{data.costo_restante && <p>S/ {data.costo_servicio}</p>}</>
  );
  const montoPagado = (data: DetallesServicios) => (
    <>{data.monto_pagado && <p>S/ {data.monto_pagado}</p>}</>
  );
  const name = (data: DetallesServicios) => (
    <>
      {data.medico && (
        <p className="font-robotoSlab_600">
          {data.medico.name.charAt(0).toUpperCase() +
            data.medico.name.slice(1).toLowerCase()}
        </p>
      )}
    </>
  );

  const apellido = (data: DetallesServicios) => (
    <>
      {data.medico && (
        <p className="font-robotoSlab_600">
          {data.medico.apellidos.charAt(0).toUpperCase() +
            data.medico.apellidos.slice(1).toLowerCase()}
        </p>
      )}
    </>
  );

  const columns: ColumnProps[] = [
    {
      field: "servicio",
      header: "Servicio",
      sortable: true,
      filter: true,
    },
    {
      field: "estado_tratamiento.estado_tratamiento",
      header: "Estado del tratamiento",
      sortable: true,
      filter: true,
      body: (data: DetallesServicios) => estado(data),
    },
    {
      field: "medico.name",
      header: "Medico nombre",
      body: (data: DetallesServicios) => name(data),
    },
    {
      field: "medico.apellidos",
      header: "Medico apellidos",
      body: (data: DetallesServicios) => apellido(data),
    },

    {
      field: "costo_servicio",
      header: "Costo del servicio",
      sortable: true,
      filter: true,
      body: (data: DetallesServicios) => costoServicio(data),
    },
    {
      field: "monto_pagado",
      header: "Monto pagado",
      sortable: true,
      filter: true,
      body: (data: DetallesServicios) => montoPagado(data),
    },
    {
      field: "costo_restante",
      header: "Costo restante",
      body: (data: DetallesServicios) => costoRestante(data),
      sortable: true,
      filter: true,
    },
    {
      field: "fecha_atencion",
      header: "Fecha de atención",
      sortable: true,
      filter: true,
    },
    {
      header: "Acciones",
      body: (data: DetallesServicios) => EditAction(data),
    },
  ];
  return {
    columns,
  };
};

export default columnsHistoryServicios;
