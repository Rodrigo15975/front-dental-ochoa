import { useGetReportForDate } from "@/services/reportes/mutation";
import { useState } from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { TbPaywall, TbReportAnalytics } from "react-icons/tb";

import {
  useGetPacienteDestacado,
  useGetServiceDestacado,
} from "@/services/pacientes-servicios/destacado/querie";
import { toast } from "react-toastify";
import * as XLSX from "xlsx";
import { Button } from "../Common";
import LoadingStatic from "../Common/Loading/LoadingStatic";
const Reportes = () => {
  const [start, setStart] = useState<string>();
  const [end, setEnd] = useState<string>();

  const { mutate, data = [], isPending, isSuccess } = useGetReportForDate();

  const getDataForDate = () => {
    if (!start || !end) return toast.warn("Seleccione fecha inicial y final");
    return mutate({ end, start });
  };
  const dataExcel = data?.length > 0 ? data : null;

  function exportToExcel() {
    // Convertir los datos en un formato plano
    const flatData = data?.map((item) => ({
      paciente_dni: item.paciente.dni,
      paciente_nombre: item.paciente.name,
      paciente_apellidos: item.paciente.apellidos,
      servicio: item.servicio,
      costo_servicio: item.costo_servicio,
      monto_pagado: item.monto_pagado,
      costo_restante: item.costo_restante,
    }));
    const worksheet = XLSX.utils.json_to_sheet(flatData ?? []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

    // Exportar el libro de trabajo a un archivo Excel
    XLSX.writeFile(workbook, "pagoTotal.xlsx");
  }

  const servicioDestacado = useGetServiceDestacado();
  const exportExcelServicioDestacado = () => {
    const { data } = servicioDestacado;
    const flatData = [
      {
        nombre: data?.nombre ?? "",
        costo: data?.costo ?? "",
        pedidas: data?.count ?? "",
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(flatData ?? []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

    // Exportar el libro de trabajo a un archivo Excel
    XLSX.writeFile(workbook, "servicioDestacado.xlsx");
  };

  const pacienteDestacado = useGetPacienteDestacado();
  const exportExcelPacienteDestacado = () => {
    const { data } = pacienteDestacado;
    const flatData = [
      {
        dni: data?.dni ?? "",
        nombre: data?.name ?? "",
        apellidos: data?.apellidos ?? "",
        gastoTotal: data?.totalGasto.toFixed(2) ?? 0,
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(flatData ?? []);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Datos");

    // Exportar el libro de trabajo a un archivo Excel
    XLSX.writeFile(workbook, "pacienteDestacado.xlsx");
  };

  return (
    <>
      <div className="m-auto w-full p-8 justify-evenly gap-4 shadow bg-bg_primary/5 border-border_three/20 border rounded-2xl flex container mt-8 min-h-[85vh]">
        <div className="flex flex-col hover:shadow-xl transition flex-[0_1_100%] gap-4 p-8 shadow-sm border rounded-md w-full  bg-default">
          <div className="bg-bg_primary/20 mb-4 p-2 rounded">
            <p className="w-full flex justify-center items-center gap-2 text-2xl font-robotoSlab_400 text-text_primary/80 ">
              Pago total de los pacientes
              <TbPaywall />
            </p>
          </div>
          <div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-xl text-text_six mb-4">
                Fecha Inicial
              </label>
              <input
                onChange={(e) => setStart(e.target.value)}
                className="border border-border_three/50 shadow rounded-md"
                type="date"
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="" className="text-xl mb-4 text-text_six mt-4">
                Fecha Final
              </label>
              <input
                onChange={(e) => setEnd(e.target.value)}
                className="border border-border_three/50 shadow rounded-md"
                type="date"
              />
            </div>
            <div className="mt-8">
              {isPending ? (
                <LoadingStatic />
              ) : (
                <Button
                  onClick={getDataForDate}
                  type="button"
                  btnStyled
                  className="bg-bg_six/50 flex items-center justify-center gap-2 text-default h-[3rem] hover:bg-bg_six"
                >
                  <TbReportAnalytics className="text-2xl" />
                  Obtener reporte
                </Button>
              )}
              {dataExcel && isSuccess && (
                <Button
                  type="button"
                  btnStyled
                  className="bg-bg_three/80 text-text_primary font-robotoSlab_500 hover:bg-bg_three/50 mt-8 h-[3rem]"
                  onClick={exportToExcel}
                >
                  Descargar
                  <SiMicrosoftexcel />
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className="flex-[0_1_100%] p-8 hover:shadow-xl border shadow-sm bg-default rounded-md">
          <div className="bg-bg_primary/20 mb-4 p-2 rounded">
            <p className="w-full flex justify-center items-center gap-2 text-2xl font-robotoSlab_400 text-text_primary/80 ">
              Servicio General
              <TbPaywall />
            </p>
          </div>
          {servicioDestacado.data && (
            <Button
              type="button"
              btnStyled
              onClick={exportExcelServicioDestacado}
              className="bg-bg_nine flex mb-4 text-xl items-center justify-center gap-2 text-text_primary/80 h-[3rem] hover:bg-bg_six/50"
            >
              <TbReportAnalytics className="text-2xl" />
              Servicio destacado
            </Button>
          )}
          {pacienteDestacado.data && (
            <Button
              type="button"
              btnStyled
              onClick={exportExcelPacienteDestacado}
              className="bg-bg_secondary flex text-xl mt-4 items-center justify-center gap-2 text-default h-[3rem] hover:bg-bg_six/80"
            >
              <TbReportAnalytics className="text-2xl" />
              Paciente Destacado
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Reportes;
