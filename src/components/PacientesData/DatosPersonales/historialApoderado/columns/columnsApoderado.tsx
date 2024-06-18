import {
  capitalizeApellido,
  capitalizeNombre,
} from "@/components/Common/CapitalicesComponent/CapitalicesComponen";
import {
  Apoderado,
  ApoderadoEdit,
} from "@/components/GestionPacientes/AddPacientes/FormMenor/inputsPacienteMenor";
import { ColumnProps } from "primereact/column";

import EditApoderado from "./editApoderado";

const columnsApoderado = () => {
  const fecha = (data: Apoderado) => (
    <>
      <p>
        {data.fechaRegistro} {data.horaRegistro}
      </p>
    </>
  );

  const columns: ColumnProps[] = [
    {
      field: "dni",
      header: "DNI",
      sortable: true,
      filter: true,
    },
    {
      field: "nombre",
      header: "Nombre",
      sortable: true,
      filter: true,
      body: (data: Apoderado) => capitalizeNombre(data.nombre),
    },
    {
      field: "apellidos",
      header: "Apellido",
      sortable: true,
      filter: true,
      body: (data: Apoderado) => capitalizeApellido(data.apellidos),
    },
    {
      field: "celular",
      header: "Celular",
    },
    {
      field: "email",
      header: "Email",
    },
    {
      field: "fuenteCaptacion",
      header: "Captación",
    },
    {
      field: "fechaRegistro",
      header: "Registro",
      sortable: true,
      filter: true,
      body: (data: Apoderado) => fecha(data),
    },
    {
      header: "Acciones",
      body: (data: ApoderadoEdit) => EditApoderado(data),
    },
  ];
  return {
    columns,
  };
};

export default columnsApoderado;
