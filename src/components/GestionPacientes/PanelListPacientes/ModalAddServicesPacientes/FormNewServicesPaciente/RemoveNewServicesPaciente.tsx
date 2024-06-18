import { Button } from "@/components/Common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { InitialValuesNewServicesPacientes } from "./inputsNewServices/inputsNewServices";

type Props = {
  push: () => void;
};

const RemoveNewServicesPaciente: FC<Props> = ({ push }) => {
  const { values } = useFormikContext<InitialValuesNewServicesPacientes>();

  return (
    <>
      <div className="flex flex-col gap-2 flex-[0_1_13rem]">
        <div className="top-0 sticky text-text_primary">
          <Button
            type="button"
            btnDefault
            onClick={push}
            disabled={values.detalles_servicio.length === 3}
            className={`w-full bg-bg_nine/40 ${
              values.detalles_servicio.length === 3 ? "cursor-no-drop" : ""
            } font-robotoSlab_600 h-[3rem]  `}
            label="Nuevo Servicio"
          />

          <Button
            type="submit"
            btnStyled
            className="mt-4 h-[3rem] text-default bg-bg_six"
            label="Registrar"
          />
        </div>
      </div>
    </>
  );
};

export default RemoveNewServicesPaciente;
