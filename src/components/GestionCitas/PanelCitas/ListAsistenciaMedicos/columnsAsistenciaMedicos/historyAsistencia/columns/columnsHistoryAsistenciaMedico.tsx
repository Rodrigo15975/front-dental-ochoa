import { ButtonIcon } from "@/components/Common";
import { GetAllAsistencia } from "@/services/medicos/types/typesMedicos";
import { ColumnProps } from "primereact/column";
import { FaCalendarCheck } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";

export const ColumnsHistoryAsistenciaMedicos = () => {
  const fechaHistorial = (asistencia: GetAllAsistencia) => (
    <p>
      {asistencia.fecha} - {asistencia.hora}
    </p>
  );

  const asistenciasHistorial = (asistencia: GetAllAsistencia) => {
    const { asistio } = asistencia;

    return (
      <div className="w-full flex">
        {asistencia.asistio ? (
          <ButtonIcon
            className={`flex-1 flex items-center justify-center h-[3rem] transition-all rounded shadow-md border ${
              asistio === true && "bg-bg_three"
            }`}
          >
            <FaCalendarCheck />
          </ButtonIcon>
        ) : (
          <ButtonIcon
            className={`flex-1 flex items-center justify-center h-[3rem] transition-all rounded shadow-md border ${
              asistio === false && "bg-bg_eight"
            }`}
          >
            <FcCancel />
          </ButtonIcon>
        )}
      </div>
    );
  };

  const columnsMedicos: ColumnProps[] = [
    {
      field: "fecha",
      header: "Fechas",
      sortable: true,
      filter: true,
      body: (data: GetAllAsistencia) => fechaHistorial(data),
    },
    {
      field: "asistio",
      header: "Asistencias",
      body: (data: GetAllAsistencia) => asistenciasHistorial(data),
    },
  ];
  return {
    columnsMedicos,
  };
};
