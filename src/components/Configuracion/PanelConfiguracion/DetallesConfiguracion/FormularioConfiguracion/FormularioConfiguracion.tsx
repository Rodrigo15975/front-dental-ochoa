import { Input, PropsInputOptional } from "@/components/Common";
import { FC } from "react";
import { inputsLabelConfiguracion } from "./inputsConfiguracion";
import { InputDefaultNames } from "@/types/typeInputs";
import _ from "lodash";
import InputRucConfiguracion from "./InputRucConfiguracion";

const FormularioConfiguracion: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaultNames[]) =>
    inputs.map((input, indexInput) => (
      <div key={`configuracion-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
          className="w-full border pl-4  bg-bg_six/10 border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 hover:bg-default p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:bg-default outline"
          AsComPonente={input.Component}
          as={input.as}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));

  const column1 = _.chunk(inputsLabelConfiguracion.slice(0, 1), 3);
  const column2 = _.chunk(inputsLabelConfiguracion.slice(1, 4), 3);
  const column3 = _.chunk(inputsLabelConfiguracion.slice(4, 7), 3);
  const column4 = _.chunk(inputsLabelConfiguracion.slice(7, 10), 3);

  return (
    <>
      {column1.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex items-end px-[1rem] mt-2 justify-evenly gap-2 "
        >
          {renderInputs(inputsGroup)}
          <InputRucConfiguracion />
        </div>
      ))}
      {column2.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex items-end px-[1rem] mt-2 justify-evenly gap-2 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column3.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex items-end px-[1rem] mt-2 justify-evenly gap-2 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column4.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex items-end px-[1rem] mt-2 justify-evenly gap-2 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
    </>
  );
};

export default FormularioConfiguracion;
