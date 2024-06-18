import { Button } from "@/components/Common";
import { useFormikContext } from "formik";
import { FC, useEffect } from "react";
import { toast } from "react-toastify";
import { InitialFormulariosServices } from "../..";
type PropsButtonArrayFormularioServices = {
  push: () => void;
};

const ButtonArrayFormulariosServices: FC<
  PropsButtonArrayFormularioServices
> = ({ push }) => {
  const { values } = useFormikContext<InitialFormulariosServices>();

  useEffect(() => {
    if (values.servicios.length === 3) {
      toast.warning("3 Formularios máximos", {
        autoClose: 1500,
        position: "top-center",
        toastId: "max",
      });
    }
  }, [values.servicios.length]);

  return (
    <div className="flex-[0_1_12rem] ml-4">
      <div className="sticky top-0">
        <Button
          disabled={values.servicios.length === 3}
          onClick={push}
          className="flex p-2 gap-3 items-center justify-center w-full font-robotoSlab_600 h-[3rem] bg-bg_three/20"
          type="button"
          btnDefault
          label="Nuevo Form"
        />
        <Button
          className="flex justify-center items-center gap-3 hover:bg-bg_six/50 text-default transition font-robotoSlab_600 bg-bg_six  w-full mt-4 h-[3rem]"
          type="submit"
          btnDefault
          label="Crear Servicios"
        />
      </div>
    </div>
  );
};

export default ButtonArrayFormulariosServices;
