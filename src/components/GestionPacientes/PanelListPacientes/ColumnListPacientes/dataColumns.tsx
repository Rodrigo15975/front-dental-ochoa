import {
  capitalizeApellido,
  capitalizeNombre,
} from "@/components/Common/CapitalicesComponent/CapitalicesComponen";
import { GetAllPacientes } from "@/services/pacientes/types/typesPaciente";
import { ColumnProps } from "primereact/column";
import columnsAcciones from "./columnsAcciones";
import serviciosPaciente from "./columnsserviciosPaciente";
import registroColumn from "./registroColumn";

export const columnsData = () => {
  const dni = (data: GetAllPacientes) => (
    <>
      <p>
        {data.dni}
        {!data.mayorEdad && (
          <span className="font-robotoSlab_600 text-text_seven ml-1">
            (Menor)
          </span>
        )}
      </p>
    </>
  );

  const columnsPacientes: ColumnProps[] = [
    {
      field: "dni",
      header: "DNI",
      sortable: true,
      filter: true,
      body: (data: GetAllPacientes) => dni(data),
    },

    {
      field: "name",
      header: "Nombre",
      sortable: true,
      filter: true,
      body: (data: GetAllPacientes) => capitalizeNombre(data.name),
    },
    {
      field: "apellidos",
      header: "Apellido",
      sortable: true,
      filter: true,
      body: (data: GetAllPacientes) => capitalizeApellido(data.apellidos),
    },
    {
      header: "Servicios",
      body: (data: GetAllPacientes) => serviciosPaciente(data),
    },
    {
      field: "acciones",
      header: "Acciones",
      body: (data: GetAllPacientes) => columnsAcciones({ data }),
    },
    {
      field: "fechaRegistro",
      header: "Registro",
      sortable: true,
      filter: true,
      body: (data: GetAllPacientes) =>
        registroColumn({ fecha: data.fechaRegistro, hora: data.horaRegistro }),
    },
  ];

  return {
    columnsPacientes,
  };
};
