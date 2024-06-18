import { Input, PropsInputOptional } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetFindByDniPaciente } from "@/services/pacientes-servicios/mutation";
import { useFormikContext } from "formik";
import { Button } from "primereact/button";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { InitialValuesCitas, inputsNamesCitas } from "./inputNamesCitas";

export const InputDniPacienteCitas = ({ fieldProps }: PropsInputOptional) => {
  const { setFieldValue, values } = useFormikContext<InitialValuesCitas>();
  const { data, mutate, isPending, isSuccess } = useGetFindByDniPaciente();
  const clearDni = () => {
    setFieldValue("paciente", "");
    setFieldValue("dni", "");
    setFieldValue("idPaciente", "");
  };

  useEffect(() => {
    if (isSuccess) {
      setFieldValue("idPaciente", data._id);
      setFieldValue("paciente", `${data.name} ${data.apellidos}`);
    }
  }, [setFieldValue, isSuccess, data]);

  const getDataDni = () => {
    if (values.dni.length === 8) return mutate(values.dni);
    return console.error("Dni,paciente in completo, citas");
  };

  return (
    <>
      <div className="flex gap-4 items-end">
        {inputsNamesCitas.slice(0, 1).map((input) => (
          <div
            key={`form-array-${input.name}`}
            className="flex flex-col flex-[0_1_100%]"
          >
            <Input
              label={input.textPlaceHolder}
              reset
              labelClassName="font-robotoSlab_700 text-inputs-gradients font-robotoSlab_500"
              className="w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
              AsComPonente={input.Component}
              as={input.as}
              type={input.type}
              name={input.name}
              fieldProps={fieldProps}
            />
          </div>
        ))}
        {isPending ? (
          <LoadingStatic />
        ) : (
          <div className="flex gap-2 items-start">
            <Button
              tooltipOptions={{
                position: "top",
              }}
              onClick={getDataDni}
              type="button"
              tooltip="Buscar DNI"
              className="flex bg-bg_nine h-[2.7rem]  rounded-md shadow-md hover:bg-bg_nine/50  transition p-2 cursor-pointer items-end"
            >
              <BiSearchAlt className="text-2xl h-full w-full " />
            </Button>

            <Button
              type="button"
              onClick={clearDni}
              tooltipOptions={{
                position: "top",
              }}
              className="flex cursor-pointer h-[2.7rem]  rounded-md shadow-md hover:bg-bg_seven transition  p-2 bg-bg_eight/50  items-end"
              tooltip="Limpiar"
            >
              <FaTrashAlt className="text-2xl h-full w-full  text-text_primary/50" />
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
