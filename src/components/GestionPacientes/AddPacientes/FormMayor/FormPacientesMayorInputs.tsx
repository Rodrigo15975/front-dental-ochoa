import { Input, PropsInputOptional } from "@/components/Common";
import { InputDefaultNames } from "@/types/typeInputs";
import _ from "lodash";
import { FC } from "react";
import { inputsPacienteMayor } from "./inputsPacienteMayor";
import ButtonInputDniPacienteMayor from "./ButtonInputDniPacienteMayor";

const FormPacientesMayorInputs: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaultNames[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          disabled={input.disabled}
          labelClassName="font-robotoSlab_400 text-inputs-gradients font-robotoSlab_500"
          className="w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
          AsComPonente={input.Component}
          as={input.as}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));

  const columnDni = _.chunk(inputsPacienteMayor.slice(0, 1), 4);
  const column1 = _.chunk(inputsPacienteMayor.slice(1, 4), 3);
  const column2 = _.chunk(inputsPacienteMayor.slice(4, 6), 3);
  const column3 = _.chunk(inputsPacienteMayor.slice(6, 8), 3);

  return (
    <>
      {columnDni.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] items-end border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
          <ButtonInputDniPacienteMayor />
        </div>
      ))}
      {column1.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-2 justify-evenly gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column2.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-2 justify-evenly gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column3.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-2 justify-evenly gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
    </>
  );
};

export default FormPacientesMayorInputs;
