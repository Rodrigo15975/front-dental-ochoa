import { ButtonIcon } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetDni } from "@/services";
import { CreateMedico } from "@/services/medicos/types/typesMedicos";
import { storeGetDataDni } from "@/store";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

const ButtonInputDniMedico = () => {
  const { values, setFieldValue } = useFormikContext<CreateMedico>();
  const { updateDatDni, clearDataDni } = storeGetDataDni();
  const { mutate, data, isPending } = useGetDni();
  const searchDni = () => {
    if (values.dni.length === 8) return mutate(values.dni);
    return console.error(values.dni);
  };

  const dniClear = () => (
    clearDataDni(),
    setFieldValue("dni", ""),
    setFieldValue("apellidos", ""),
    setFieldValue("name", "")
  );
  useEffect(() => {
    if (data) {
      const { apellidoMaterno, apellidoPaterno, nombres, numeroDocumento } = data;
      updateDatDni(data);
      if (
        data.apellidoMaterno !== undefined ||
        data.apellidoMaterno !== undefined ||
        data.nombres !== undefined ||
        data.numeroDocumento !== undefined
      ) {
        setFieldValue("dni", numeroDocumento);
        setFieldValue("apellidos", `${apellidoPaterno} ${apellidoMaterno}`);
        setFieldValue("name", nombres);
        return;
      }
    }
  }, [data, updateDatDni, setFieldValue]);

  return (
    <>
      {isPending ? (
        <LoadingStatic />
      ) : (
        <>
          <div className="flex-[0_1_10rem] bg-bg_five hover:bg-bg_five/50 transition text-default h-[2.5rem] rounded-md">
            <ButtonIcon
              onClick={searchDni}
              className="h-full w-full cursor-pointer  flex items-center justify-center"
            >
              <BiSearchAlt2 className="text-2xl" />
            </ButtonIcon>
          </div>
          <div className="flex-[0_1_3rem] bg-bg_nine transition h-[2.5rem] rounded-md">
            <ButtonIcon
              onClick={dniClear}
              className="h-full w-full cursor-pointer  flex items-center justify-center"
            >
              <BsTrash className="text-xl text-text_primary" />
            </ButtonIcon>
          </div>
        </>
      )}
    </>
  );
};

export default ButtonInputDniMedico;
