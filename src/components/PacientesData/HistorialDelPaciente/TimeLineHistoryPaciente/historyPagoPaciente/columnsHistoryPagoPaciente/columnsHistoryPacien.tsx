import { ColumnProps } from "primereact/column";

const columnsHistoryPaciente = () => {
  const columns: ColumnProps[] = [
    {
      field: "comentarios",
      header: "Comentarios",
      sortable: true,
      filter: true,
    },
    {
      field: "costo_total",
      header: "Costo Total",
      sortable: true,
      filter: true,
    },

    {
      field: "montoTotal",
      header: "Monto total pagado",
      sortable: true,
      filter: true,
    },
    {
      field: "fecha_atencion",
      header: "Fecha atención",
      sortable: true,
      filter: true,
    },
  ];
  return {
    columns,
  };
};

export default columnsHistoryPaciente;
