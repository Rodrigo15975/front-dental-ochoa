import { Input, PropsInputOptional } from "@/components/Common";
import { FC } from "react";
import { inputsLabelConfiguracion } from "../FormularioConfiguracion/inputsConfiguracion";

const FormularioInputsEditarConfiguracion: FC<PropsInputOptional> = ({
  fieldProps,
}) => {
  return (
    <>
      {inputsLabelConfiguracion.map((input, index) => (
        <div
          key={`input-${index}-configuracion`}
          className="flex w-full flex-wrap items-center justify-between"
        >
          <label
            className="text-text_six flex-[0_0_10rem] font-robotoSlab_600"
            htmlFor={input.name}
          >
            {input.textPlaceHolder}
          </label>
          <div className="flex-[0_1_44rem] flex flex-col">
            <Input
              reset
              className="text-text_primary/60  font-robotoSlab_600 border border-border_three/10 shadow-md   focus:border-border_primary focus:bg-bg_six/15 transition pl-4 h-[2.5rem] rounded-md"
              fieldProps={fieldProps}
              name={input.name}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default FormularioInputsEditarConfiguracion;
