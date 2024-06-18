import { Button, Input, PropsInputOptional } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useGetDataApoderado } from "@/services/apoderado/mutation";
import { useFormikContext } from "formik";
import { FC, useEffect } from "react";
import { BiSearch, BiTrash } from "react-icons/bi";
import {
  InitialValuesNewServicesPacientes,
  inputsNameServicesMenorEdad,
} from "./inputsNewServices/inputsNewServices";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const InputsFormServicesPacienteMenor: FC<PropsInputOptional> = ({
  fieldProps,
}) => {
  const { mutate, data, isSuccess, isPending } = useGetDataApoderado();

  const { values, setFieldValue } =
    useFormikContext<InitialValuesNewServicesPacientes>();

  const searchDni = () => {
    if (values.apoderado.dni.length === 8) return mutate(values.apoderado.dni);
    return console.error(values.apoderado.dni);
  };

  const dniClear = () => (
    setFieldValue("apoderado.dni", ""),
    setFieldValue("apoderado.nombre", ""),
    setFieldValue("apoderado.apellidos", ""),
    setFieldValue("apoderado.email", ""),
    setFieldValue("apoderado.celular", ""),
    setFieldValue("apoderado.fuenteCaptacion", "")
  );

  useEffect(() => {
    if (isSuccess) {
      setFieldValue("apoderado.dni", data.dni);
      setFieldValue("apoderado.nombre", data.nombre);
      setFieldValue("apoderado.apellidos", data.apellidos);
      setFieldValue("apoderado.email", data.email);
      setFieldValue("apoderado.celular", data.celular);
      setFieldValue("apoderado.fuenteCaptacion", data.fuenteCaptacion);
    }
  }, [setFieldValue, data, isSuccess]);

  return (
    <>
      <div className="w-full border shadow rounded-md  p-4 min-h-[10vh]">
        <p className="text-xl px-4 text-text_six/50">
          Información del Apoderado
        </p>
        <div className="flex gap-3 mt-4 items-center">
          {inputsNameServicesMenorEdad.map((inputs, indexInputs) => (
            <div key={indexInputs} className="flex flex-[0_1_20rem] flex-col">
              <Input
                textPlaceHolder={inputs.textPlaceHolder}
                reset
                className=" border-border_secondary/50 focus:shadow-md text-text_primary transition focus:text-text_primary focus:border-border_three/50 pl-3 h-[3rem] rounded-md"
                labelClassName="text-inputs-gradients"
                disabled={inputs.disabled}
                fieldProps={fieldProps}
                name={`apoderado.${inputs.name}`}
              />
            </div>
          ))}
          {isPending ? (
            <LoadingStatic />
          ) : (
            <CommonTooltip
              title="Buscar apoderado"
              className="flex-[0_1_15rem]"
            >
              <Button
                type="button"
                btnStyled
                onClick={searchDni}
                className="w-full h-[3rem] bg-bg_secondary"
              >
                <BiSearch className="text-default text-3xl" />
              </Button>
            </CommonTooltip>
          )}
          <CommonTooltip title="Limpiar" className="flex-[0_1_8rem]">
            <Button
              type="button"
              onClick={dniClear}
              className="w-full h-[3rem] rounded-md shadow-md flex items-center justify-center bg-bg_three/50"
            >
              <BiTrash className="text-2xl" />
            </Button>
          </CommonTooltip>
        </div>
      </div>
    </>
  );
};

export default InputsFormServicesPacienteMenor;
