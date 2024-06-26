import { Tooltip } from "@/components/Common";
import {
  capitalizeApellido,
  capitalizeNombre,
} from "@/components/Common/CapitalicesComponent/CapitalicesComponen";
import { useGetEmpresa } from "@/services/configuracion";
import { GetAllPacientes } from "@/services/pacientes/types/typesPaciente";
import { esCumpleañosHoy, faltaDiasHastaCumpleaños } from "@/utils";
import { ColumnProps } from "primereact/column";
import { BsWhatsapp } from "react-icons/bs";
import { LiaBirthdayCakeSolid } from "react-icons/lia";

const ColumnsListRecordatorio = () => {
  const empresa = useGetEmpresa();

  const enviarRecordatorio = (data: GetAllPacientes) => {
    const { apellidos, name } = data;
    const birthday = esCumpleañosHoy(data.fechaNacimiento);

    const nombreEmpresa = empresa.data?.nombre_comercial
      ? empresa.data?.nombre_comercial?.toUpperCase()
      : "Consultorio";

    const nombrePaciente =
      name && apellidos
        ? `${name.toUpperCase()} ${apellidos.toUpperCase()}`
        : "";

    const mensajeCumpleaños = `🎉¡Feliz Cumpleaños, 🎉 Querido/a ${nombrePaciente},
    En este día tan especial, queremos desearte un cumpleaños lleno de alegría, amor y momentos inolvidables. Esperamos que este nuevo año en tu vida esté repleto de éxitos y felicidad.🌟🌟
    🎂
    Atte: ${nombreEmpresa}
   `;

    const whatsappLink = `https://wa.me/+51${
      data?.celular
    }?text=${encodeURIComponent(mensajeCumpleaños)}`;

    if (birthday) {
      return (
        <Tooltip
          title="Enviar recordatorio"
          className="flex items-center cursor-pointer justify-center"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp className="text-3xl text-bg_three  " />
          </a>
        </Tooltip>
      );
    }
  };

  const cumpleaños = (data: GetAllPacientes) => {
    const { fechaNacimiento, } = data;

    const birthday = esCumpleañosHoy(fechaNacimiento);
    const diasRestante = faltaDiasHastaCumpleaños(fechaNacimiento);
    return (
      <>
        {birthday ? (
          <p className="flex justify-center text-text_primary/80 font-robotoSlab_600 gap-2 items-center">
            Hoy
            <LiaBirthdayCakeSolid className="text-3xl text-text_primary/80 rounded-lg shadow-md text-default bg-bg_list_espera" />
          </p>
        ) : (
          <p> Dias Restante: {diasRestante + 1}</p>
        )}
      </>
    );
  };

  const columns: ColumnProps[] = [
    {
      field: "dni",
      header: "DNI",
      sortable: true,
      filter: true,
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
      header: "Apellidos",
      body: (data: GetAllPacientes) => capitalizeApellido(data.apellidos),
      // sortable: true,
      // filter: true,
    },
    {
      field: "fechaNacimiento",
      header: "Fecha de nacimiento",
      sortable: true,
      filter: true,
    },
    {
      header: "Cumpleaños",
      body: (data: GetAllPacientes) => cumpleaños(data),
    },
    {
      header: "Acciones",
      body: (data: GetAllPacientes) => enviarRecordatorio(data),
    },
  ];
  return {
    columns,
  };
};

export default ColumnsListRecordatorio;
