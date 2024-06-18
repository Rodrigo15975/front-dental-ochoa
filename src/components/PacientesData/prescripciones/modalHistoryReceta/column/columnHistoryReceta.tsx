import { ColumnProps } from "primereact/column";

const columnHistoryReceta = () => {
  const columnsHistoryReceta: ColumnProps[] = [
    { field: "medico.name", header: "Medico", filter: true, sortable: true },
    {
      field: "medico.apellidos",
      header: "Apellido",
      filter: true,
      sortable: true,
    },
    { field: "notaAdicional", header: "Notas" },
    {
      field: "fechaReceta",
      header: "Fecha",
      filter: true,
      sortable: true,
    },
    { field: "horaReceta", header: "Hora", filter: true, sortable: true },
  ];
  return {
    columnsHistoryReceta,
  };
};

export default columnHistoryReceta;
