import { Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import {
  DetallesServicios,
  Estados,
} from "@/services/pacientes/types/typesPaciente";
import { storeGestionServicios } from "@/store";
import { hourNowDate, registerDateInternational } from "@/utils";
import { useFormikContext } from "formik";
import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { CiViewList } from "react-icons/ci";

const ListServicesExistente = () => {
  const { idPaciente } = storeGestionServicios();
  const { data, isLoading } = useGetFindOnePaciente(idPaciente ?? "");
  const hour = hourNowDate();
  const date = registerDateInternational();
  const { setFieldValue, values } = useFormikContext<DetallesServicios>();

  const [originalCostoRestante, setOriginalCostoRestante] = useState<string>(
    values.costo_restante
  );
  const [originalMontoPagado, setOriginalMontoPagado] = useState<number>(0);

  const monto_pagado = values.monto_pagado;
  const costo_servicio = values.costo_servicio;

  const serviciosInProcess = data?.detalles.filter((detalles) => {
    if (detalles.estado_tratamiento)
      return (
        detalles.estado_tratamiento.estado_tratamiento !== Estados.CONCLUIDO &&
        detalles.docClone !== true
      );
  });

  const getServiceInProcess = (id: string) => {
    const findService = serviciosInProcess?.find(
      (servicio) => servicio._id === id
    );
    if (findService?.costo_restante === "0.00")
      setFieldValue("monto_pagado", "0.00");
    else setFieldValue("monto_pagado", "");

    // El id por que le valor del estado del tratamiento esta con el id
    setFieldValue("estado_tratamiento", findService?.estado_tratamiento._id);
    setFieldValue("medico", findService?.medico._id);
    setFieldValue("servicio", `${findService?.servicio}`);
    setFieldValue("costo_servicio", `${findService?.costo_servicio}`);
    setFieldValue("costo_restante", findService?.costo_restante);
    setFieldValue("fecha_atencion", `${date} ${hour}`);

    setFieldValue("id", id);
    setOriginalCostoRestante(findService?.costo_restante ?? "");
    setOriginalMontoPagado(parseFloat(findService?.monto_pagado ?? ""));
  };

  useEffect(() => {
    const montoPagadoNumber = parseFloat(monto_pagado);
    const originalCostoRestanteNumber = parseFloat(originalCostoRestante);
    if (monto_pagado && !isNaN(montoPagadoNumber)) {
      const newCostoRestante = originalCostoRestanteNumber - montoPagadoNumber;

      if (montoPagadoNumber > originalCostoRestanteNumber)
        setFieldValue(
          "monto_pagado",
          `${originalCostoRestanteNumber.toFixed(2).toString()}`
        );

      if (
        monto_pagado.includes("-") ||
        monto_pagado.includes("+") ||
        monto_pagado.includes("/") ||
        monto_pagado.includes("*")
      )
        console.error("incluye - o + * /");

      if (montoPagadoNumber > originalCostoRestanteNumber) {
        setFieldValue("costo_restante", "0.00");
      } else
        setFieldValue("costo_restante", newCostoRestante.toFixed(2).toString());

      setFieldValue(
        "costo_total",
        `Costo total del servicio: ${costo_servicio}`
      );
    } else {
      setFieldValue("costo_restante", originalCostoRestante.toString());
      setFieldValue("montoTotal", `Monto total pagado: `);
      setFieldValue("vuelto_restante", `Vuelto Restante: 0.00 `);
    }
    if (originalMontoPagado)
      setFieldValue(
        "montoTotal",
        `Monto total pagado: ${originalMontoPagado.toFixed(2).toString()}`
      );

    const montoTotalDelServicio = montoPagadoNumber + originalMontoPagado;

    if (originalMontoPagado && montoPagadoNumber)
      setFieldValue(
        "montoTotal",
        `Monto total pagado: ${montoTotalDelServicio.toFixed(2).toString()}`
      );
  }, [
    monto_pagado,
    setFieldValue,
    originalCostoRestante,
    costo_servicio,
    originalMontoPagado,
  ]);

  return (
    <>
      <Typography
        className="text-xl border-b pb-4 text-text_six flex items-center gap-2"
        label="Lista en proceso"
      >
        <CiViewList />
      </Typography>
      <div className="max-h-[65vh] overflow-y-auto">
        <div className="mt-4  min-h-[60vh]">
          {isLoading ? (
            <LoadingStatic />
          ) : (
            serviciosInProcess?.map((servicio) => (
              <Button
                tooltipOptions={{
                  position: "top",
                }}
                onClick={() => getServiceInProcess(servicio._id)}
                tooltip={`Servicio`}
                key={`list-proceso-${servicio._id}`}
                type="button"
                className="w-full mt-4 hover:shadow-none rounded-full shadow-md font-robotoSlab_600 bg-bg_three/10 hover:bg-bg_three/80 h-[2.5rem]"
                label={`${
                  servicio.servicio.charAt(0).toUpperCase() +
                  servicio.servicio.slice(1).toLowerCase()
                }`}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ListServicesExistente;
