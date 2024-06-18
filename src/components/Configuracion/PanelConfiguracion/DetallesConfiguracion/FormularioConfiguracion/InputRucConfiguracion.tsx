import { Button } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetRucData } from "@/services";
import { PartialEmpresa } from "@/services/configuracion";
import { storeGetDataRuc } from "@/store";
import { useFormikContext } from "formik";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const InputRucConfiguracion = () => {
  const { values, setFieldValue } = useFormikContext<PartialEmpresa>();
  const { dataRuc } = storeGetDataRuc();
  const { mutate, isPending } = useGetRucData();
  const searchRUC = () =>
    !values.ruc || values.ruc.length !== 11
      ? console.error("ruc")
      : mutate(values.ruc);

  useEffect(() => {
    if (dataRuc) {
      const {
        condicion,
        departamento,
        direccion,
        distrito,
        estado,
        numeroDocumento,
        provincia,
        razonSocial,
      } = dataRuc;
      setFieldValue("ruc", numeroDocumento);
      setFieldValue("departamento", departamento);
      setFieldValue("provincia", provincia);
      setFieldValue("distrito", distrito);
      setFieldValue("estado", estado);
      setFieldValue("provincia", provincia);
      setFieldValue("razon_social", razonSocial);
      setFieldValue("condicion", condicion);
      setFieldValue("direccion", direccion);
    }
  }, [dataRuc, setFieldValue]);

  return (
    <>
      {isPending ? (
        <LoadingStatic />
      ) : (
        <Button
          className="h-[2.5rem] flex items-center justify-center border flex-[0_1_10rem] bg-bg_three/50 transition hover:bg-bg_three"
          type="button"
          onClick={searchRUC}
          btnDefault
        >
          <BiSearch className="text-2xl" />
        </Button>
      )}
    </>
  );
};

export default InputRucConfiguracion;
