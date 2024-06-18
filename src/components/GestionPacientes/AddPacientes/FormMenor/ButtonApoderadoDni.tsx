import { ButtonIcon } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useGetDataApoderado } from "@/services/apoderado/mutation";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { BiTrashAlt } from "react-icons/bi";
import { TbReportSearch } from "react-icons/tb";
import { PacienteMenor } from "./inputsPacienteMenor";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const ButtonApoderadoDni = () => {
  const { values, setFieldValue } = useFormikContext<PacienteMenor>();

  const { mutate, data, isSuccess, isPending } = useGetDataApoderado();

  const searchDni = () => {
    if (values.apoderado.dni.length === 8) return mutate(values.apoderado.dni);
    return console.error(values.dni);
  };

  const dniClear = () => (
    setFieldValue("apoderado.dni", ""),
    setFieldValue("apoderado.nombre", ""),
    setFieldValue("apoderado.apellidos", ""),
    setFieldValue("apoderado.celular", ""),
    setFieldValue("apoderado.email", ""),
    setFieldValue("apoderado.fuenteCaptacion", "")
  );

  useEffect(() => {
    if (isSuccess) {
      setFieldValue("apoderado.dni", data.dni);
      setFieldValue("apoderado.nombre", data.nombre);
      setFieldValue("apoderado.apellidos", data.apellidos);
      setFieldValue("apoderado.celular", data.celular);
      setFieldValue("apoderado.email", data.email);
      setFieldValue("apoderado.fuenteCaptacion", data.fuenteCaptacion);
    }
  }, [setFieldValue, data, isSuccess]);

  return (
    <>
      {isPending ? (
        <LoadingStatic />
      ) : (
        <CommonTooltip
          title="Buscar DNI"
          className="h-[2.5rem] bg-bg_five/50 rounded-md cursor-pointer flex-[0_1_10rem]"
        >
          <ButtonIcon
            onClick={searchDni}
            className="w-full h-full flex items-center justify-center"
          >
            <TbReportSearch className="text-2xl text-default" />
          </ButtonIcon>
        </CommonTooltip>
      )}
      <CommonTooltip
        title="Limpiar"
        className="h-[2.5rem] bg-bg_three rounded-md cursor-pointer flex-[0_1_3rem]"
      >
        <ButtonIcon
          onClick={dniClear}
          className="w-full h-full flex items-center justify-center"
        >
          <BiTrashAlt className="text-2xl text-default" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default ButtonApoderadoDni;
