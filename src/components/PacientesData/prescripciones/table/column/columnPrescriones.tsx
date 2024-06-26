import { PrescripcionPdfDownload } from "@/components/Common/Pdf/PdfPrescripciones";
import { useGetEmpresa } from "@/services/configuracion";
import { HistoryPrescripcione } from "@/services/pacientes/types/typesPaciente";
import { CreatePrescripciones } from "@/services/prescripciones/types/typesPrescripciones";
import { capitalize } from "lodash";
import { ColumnProps } from "primereact/column";
import { AiOutlineFilePdf } from "react-icons/ai";

const ColumnPrescriones = () => {
  const fecha = (data: CreatePrescripciones) => (
    <>
      <p>
        {data.fechaPrescripcion} {data.horaPrescripcion}{" "}
      </p>
    </>
  );
  const empresa = useGetEmpresa();

  const pdf = (data: HistoryPrescripcione) => {
    if (empresa.data?.img_logo && empresa.data.nombre_comercial) {
      const nombreComercial = capitalize(empresa.data.nombre_comercial);
      return (
        <div className="flex bg-rose-600/80 p-2 rounded-md items-center gap-2 justify-center">
          <PrescripcionPdfDownload
            data={data}
            logo={empresa.data.img_logo}
            title={nombreComercial}
          />
          <AiOutlineFilePdf className="text-2xl text-default" />
        </div>
      );
    }
  };

  const columnsPrescripciones: ColumnProps[] = [
    { field: "medico.name", header: "Medico", filter: true, sortable: true },
    {
      field: "medico.apellidos",
      header: "Apellido",
      filter: true,
      exportable: true,
      sortable: true,
    },
    { field: "prescripcion", header: "Prescripcion" },
    { field: "responsabilidad", header: "Responsable" },
    { field: "notaAdicional", header: "Notas" },
    {
      field: "fechaPrescripcion",
      header: "Registro",
      filter: true,
      sortable: true,
      body: (data: CreatePrescripciones) => fecha(data),
    },
    { header: "Acciones", body: (data: HistoryPrescripcione) => pdf(data) },
  ];
  return {
    columnsPrescripciones,
  };
};

export default ColumnPrescriones;
