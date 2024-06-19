import { FaCalendarCheck } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";

import { ColumnProps } from "primereact/column";
import { MonthlyStats } from "@/services/stadisticasPacienteNuevos/types/typesStadisticasPacientesNuevos";

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const ColumnsStadisticas = () => {
  const month = (data: MonthlyStats) => {
    return (
      <>
        <p className="flex items-center gap-2 justify-center">
          <FaCalendarCheck /> {monthNames[data._id.month - 1]}{" "}
          {` ${data._id.year}`}
        </p>
      </>
    );
  };

  const nuevos = (data: MonthlyStats) => {
    return (
      <p className="flex items-center gap-2 justify-center">
        {data.count}
        <GrUserExpert />
      </p>
    );
  };

  const columns: ColumnProps[] = [
    {
      field: "_id.month",
      header: "Mes",
      body: (data: MonthlyStats) => month(data),
      // sortable: true,
      filter: true,
    },
    {
      field: "data.count",
      header: "Nuevos",
      body: (data: MonthlyStats) => nuevos(data),
      sortable: true,
      filter: true,
    },
  ];
  return {
    columns,
  };
};

export default ColumnsStadisticas;
