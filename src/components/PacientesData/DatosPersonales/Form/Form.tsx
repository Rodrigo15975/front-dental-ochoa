import { Input, PropsInputOptional } from "@/components/Common";
import { InputDefaultNames } from "@/types/typeInputs";
import { FC } from "react";
import { inputsNameDataPersonales } from "./inputs/inputsDataPersonales";
import _ from "lodash";
const FormDataPacientes: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaultNames[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          disabled={input.disabled}
          labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
          className={`${
            input.disabled ? "cursor-no-drop " : ""
          } w-full border pl-4  bg-bg_six/10 border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 hover:bg-default p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-full focus:bg-default outline`}
          AsComPonente={input.Component}
          as={input.as}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));
  const column1 = _.chunk(inputsNameDataPersonales.slice(0, 3), 3);
  const column2 = _.chunk(inputsNameDataPersonales.slice(3, 6), 3);
  const column3 = _.chunk(inputsNameDataPersonales.slice(6, 9), 3);
  const column4 = _.chunk(inputsNameDataPersonales.slice(9, 12), 3);

  return (
    <>
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
      {column4.map((inputsGroup, groupIndex) => (
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

export default FormDataPacientes;
