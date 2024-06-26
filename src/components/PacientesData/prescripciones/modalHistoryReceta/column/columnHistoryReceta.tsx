import RecetaPdfDownload from "@/components/Common/Pdf/Pdf";
import { useGetEmpresa } from "@/services/configuracion";
import { HistoryReceta } from "@/services/pacientes/types/typesPaciente";
import { capitalize } from "@/utils";
import { ColumnProps } from "primereact/column";
import { AiOutlineFilePdf } from "react-icons/ai";

const ColumnHistoryReceta = () => {
  const empresa = useGetEmpresa();

  const pdf = (data: HistoryReceta) => {
    if (empresa.data?.img_logo && empresa.data.nombre_comercial) {
      const nombreComercial = capitalize(empresa.data.nombre_comercial);
      return (
        <div className="flex bg-rose-600/80 p-2 rounded-md items-center gap-2 justify-center">
          <RecetaPdfDownload
            data={data}
            logo={empresa.data.img_logo}
            title={nombreComercial}
          />
          <AiOutlineFilePdf className="text-2xl text-default" />
        </div>
      );
    }
  };

  const columnsHistoryReceta: ColumnProps[] = [
    { field: "medico.name", header: "Medico", filter: true, sortable: true },
    {
      field: "medico.apellidos",
      header: "Apellido",
      filter: true,
      sortable: true,
    },
    { field: "receta", header: "Receta" },
    { field: "notaAdicional", header: "Notas" },
    {
      field: "fechaReceta",
      header: "Fecha",
      filter: true,
      sortable: true,
    },
    { field: "horaReceta", header: "Hora", filter: true, sortable: true },
    { field: "", header: "Acciones", body: (data: HistoryReceta) => pdf(data) },
  ];
  return {
    columnsHistoryReceta,
  };
};

export default ColumnHistoryReceta;
