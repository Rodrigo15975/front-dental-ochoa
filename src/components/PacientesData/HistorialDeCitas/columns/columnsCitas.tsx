import { HistoryCitas } from "@/services/pacientes/types/typesPaciente";
import dayjs from "dayjs";

import { ColumnProps } from "primereact/column";

const ColumnsListCitas = () => {
  const stadoCita = (data: HistoryCitas) => {
    if (data.estado) {
      return (
        <>
          <p
            className="h-[3rem]  p-2 font-robotoSlab_600 flex items-center justify-center rounded-md shadow "
            style={{ background: data.estado.bg ? data.estado.bg : "#5fff3c" }}
          >
            {data.estado.estado}
          </p>
        </>
      );
    }
  };

  const fechaCita = (data: HistoryCitas) => {
    if (data) {
      if (data.start) {
        const startDate = dayjs(data?.start).format("DD/MM/YYYY");

        return <>{startDate}</>;
      }
    }
  };

  const fechaHora = (data: HistoryCitas) => {
    if (data) {
      if (data.end && data.start) {
        const endTime = dayjs(data?.end).format("hh:mm A");
        const startTime = dayjs(data?.start).format("hh:mm A");
        return (
          <>
            <span>
              {startTime} - {endTime}{" "}
            </span>
          </>
        );
      }
    }
  };

  const columns: ColumnProps[] = [
    {
      field: "medico.name",
      header: "Medico",
      // sortable: true,
      // filter: true,
    },
    {
      field: "medico.apellidos",
      header: "Apellido",
    },
    {
      field: "estado.estado",
      header: "Estado",
      body: (data: HistoryCitas) => stadoCita(data),
      sortable: true,
      filter: true,
    },

    {
      field: "observacion",
      header: "Observacion/Comentarios",
      // sortable: true,
      // filter: true,
    },
    {
      field: "start",
      header: "Fecha",
      body: (data: HistoryCitas) => fechaCita(data),
      sortable: true,
      filter: true,
    },
    {
      field: "end",
      header: "Hora",
      body: (data: HistoryCitas) => fechaHora(data),
    },
  ];
  return {
    columns,
  };
};

export default ColumnsListCitas;
