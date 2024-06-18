import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetServiciosMedico } from "@/services/medicos/getServices/mutation";
import { useGetMedicosActivos } from "@/services/medicos/queries";
import { ErrorMessage, useFormikContext } from "formik";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { InitialValuesNewServicesPacientes } from "../inputsNewServices/inputsNewServices";
import { hourNowDate, registerDateInternational } from "@/utils";

type Props = {
  fieldProps: (name: string) => {
    onChange: (e: React.ChangeEvent) => void; // Función que maneja el evento onChange del campo
    onBlur: (e: React.FocusEvent) => void; // Función que maneja el evento onBlur del campo
    value: string; // Valor actual del campo
    name: string; // Nombre del campo
  };
  name: string;
  index: number;
};

const SelectMedicoNewServices: FC<Props> = ({ name, index, fieldProps }) => {
  const fecha_atencion = registerDateInternational();
  const hour = hourNowDate();

  const medicosActives = useGetMedicosActivos();
  const { values, setFieldValue } =
    useFormikContext<InitialValuesNewServicesPacientes>();

  const [costoComplete, setCostoComplete] = useState<number>(0);
  const [totalMontoPagado, setTotalMontoPagado] = useState<number>(0);

  const monto_pagado = values.detalles_servicio[index].monto_pagado;
  const costo_servicio = values.detalles_servicio[index].costo_servicio;

  const [isDisable, setIsDisable] = useState<boolean>(true);

  const { mutate, isPending, data, isSuccess } = useGetServiciosMedico();

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedMedicoId = e.target.value;
    setFieldValue(`detalles_servicio[${index}].medico`, selectedMedicoId);

    if (selectedMedicoId) {
      mutate(selectedMedicoId);
      setFieldValue(`detalles_servicio[${index}].costo_servicio`, "");
    } else {
      setFieldValue(`detalles_servicio[${index}].servicio`, "");
      setFieldValue(`detalles_servicio[${index}].costo_servicio`, "");
      setFieldValue(`detalles_servicio[${index}].costo_restante`, ``);
      setIsDisable(true);
    }
  };

  const handledSelectServices = (e: ChangeEvent<HTMLSelectElement>) => {
    const changeServicio = e.target.value;

    const costo_servicio = data?.find(
      (servicio) => servicio._id === changeServicio
    );
    if (changeServicio) {
      setFieldValue(`detalles_servicio[${index}].servicio`, changeServicio);
      setFieldValue(
        `detalles_servicio[${index}].costo_servicio`,
        costo_servicio?.costo
      );
    } else setFieldValue(`detalles_servicio[${index}].costo_servicio`, "");
  };

  useEffect(() => {
    if (isSuccess) setIsDisable(false);
  }, [isSuccess]);

  useEffect(() => {
    const totalCost = values.detalles_servicio.reduce(
      (acc, curr) => acc + (parseFloat(curr.costo_servicio) || 0),
      0
    );
    const totalMontoPagado = values.detalles_servicio.reduce(
      (acc, curr) => acc + (parseFloat(curr.monto_pagado) || 0),
      0
    );
    setCostoComplete(totalCost);
    setTotalMontoPagado(totalMontoPagado);
  }, [values.detalles_servicio]);

  useEffect(() => {
    const montoPagadoNumber = parseFloat(monto_pagado);
    const montoCostoServicioNumber = parseFloat(costo_servicio);

    const totalForServicio = montoCostoServicioNumber - montoPagadoNumber;
    // const vueltoTotal = totalMontoPagado - costoComplete;

    if (monto_pagado && costo_servicio) {
      if (
        costo_servicio.includes("-") ||
        costo_servicio.includes("+") ||
        costo_servicio.includes("*") ||
        costo_servicio.includes("/")
      )
        return console.error("incluye - o + * /");
      if (
        monto_pagado.includes("-") ||
        monto_pagado.includes("+") ||
        monto_pagado.includes("/") ||
        monto_pagado.includes("*")
      )
        return console.error("incluye - o + * /");

      if (isNaN(montoPagadoNumber) || isNaN(montoCostoServicioNumber))
        return console.error("isNan");

      if (montoPagadoNumber > montoCostoServicioNumber) {
        setFieldValue(
          `detalles_servicio[${index}].monto_pagado`,
          costo_servicio
        );
      } else {
        setFieldValue(
          `detalles_servicio[${index}].costo_restante`,
          `${totalForServicio.toFixed(2)}`
        );
      }
      // if (totalMontoPagado > costoComplete)
      //   setFieldValue(
      //     `vuelto_restante`,
      //     `Vuelto restante: ${vueltoTotal.toFixed(2).toString()}`
      //   );
      // else setFieldValue(`vuelto_restante`, `Vuelto restante: 0.00`);
    } else setFieldValue(`detalles_servicio[${index}].costo_restante`, "");

    setFieldValue(
      "costo_total",
      `Costo total de servicios: ${costoComplete.toFixed(2).toString()}`
    );
    setFieldValue(
      "montoTotal",
      `Monto total pagado: ${totalMontoPagado.toFixed(2).toString()}`
    );
    setFieldValue(
      `detalles_servicio[${index}].fecha_atencion`,
      `${fecha_atencion} ${hour}`
    );
    setFieldValue(`fecha_atencion`, `${fecha_atencion} ${hour}`);
  }, [
    setFieldValue,
    costo_servicio,
    monto_pagado,
    index,
    costoComplete,
    hour,
    fecha_atencion,
    totalMontoPagado,
  ]);

  return (
    <>
      <div className="flex flex-col w-full">
        {isPending ? (
          <LoadingStatic />
        ) : (
          <select
            onChange={handleSelectChange}
            className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
            value={values.detalles_servicio[index].medico || ""}
            name={name}
          >
            <option value="">Seleccione un médico</option>
            {medicosActives?.map((medicos) => (
              <option
                key={`option-medicos-${medicos._id}`}
                className="font-robotoSlab_600 text-text_primary"
                value={medicos._id}
              >
                {medicos.name.charAt(0).toUpperCase() +
                  medicos.name.slice(1).toLowerCase()}{" "}
                {medicos.apellidos.charAt(0).toUpperCase() +
                  medicos.apellidos.slice(1).toLowerCase()}{" "}
              </option>
            ))}
          </select>
        )}
        <ErrorMessage className="text-text_seven" name={name} component={"p"} />
      </div>

      <div className="flex flex-col w-full">
        <select
          disabled={isDisable}
          className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
          {...fieldProps("servicio")}
          name={`detalles_servicio[${index}].servicio`}
          onChange={handledSelectServices}
        >
          <option value="">{"Seleccione un servicio"}</option>
          {data?.map((servicios) => (
            <option
              key={`servicio-medico-${servicios._id}`}
              value={isDisable ? "" : servicios._id}
            >
              {isDisable ? "Seleccione un servicio" : servicios.nombre}
            </option>
          ))}
        </select>
        <ErrorMessage
          className="text-text_seven"
          name={`detalles_servicio[${index}].servicio`}
          component={"p"}
        />
      </div>
    </>
  );
};

export default SelectMedicoNewServices;
