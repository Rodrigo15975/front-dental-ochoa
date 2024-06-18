import { CreatePrescripciones } from "@/services/prescripciones/types/typesPrescripciones";
import { ColumnProps } from "primereact/column";

const columnPrescriones = () => {
  const fecha = (data: CreatePrescripciones) => (
    <>
      <p>
        {data.fechaPrescripcion} {data.horaPrescripcion}{" "}
      </p>
    </>
  );

  const columnsPrescripciones: ColumnProps[] = [
    { field: "medico.name", header: "Medico", filter: true, sortable: true },
    {
      field: "medico.apellidos",
      header: "Apellido",
      filter: true,
      exportable: true,
      sortable: true,
    },
    { field: "responsabilidad", header: "Responsable" },
    { field: "notaAdicional", header: "Notas" },
    {
      field: "fechaPrescripcion",
      header: "Registro",
      filter: true,
      sortable: true,
      body: (data: CreatePrescripciones) => fecha(data),
    },
  ];
  return {
    columnsPrescripciones,
  };
};

export default columnPrescriones;
