import _ from "lodash";
import {
  InputDefaulsMedico,
  inputDefaulstsMedico,
} from "./inputsFormularioMedicos/inputsNamesMedicos";
import { FC } from "react";
import { Input, PropsInputOptional } from "@/components/Common";
import ButtonInputDniMedico from "./ButtonInputDniMedico";
const InputFormularioMedicos: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaulsMedico[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          disabled={input.disabled}
          labelClassName="font-robotoSlab_400 text-inputs-gradients font-robotoSlab_500"
          className={
            "w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
          }
          AsComPonente={input.Component}
          as={input.as}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));
  const columnDNI = _.chunk(inputDefaulstsMedico.slice(0, 1), 1);
  const column1 = _.chunk(inputDefaulstsMedico.slice(1, 4), 3);
  const column2 = _.chunk(inputDefaulstsMedico.slice(4, 7), 3);
  const column3 = _.chunk(inputDefaulstsMedico.slice(7, 10), 2);

  return (
    <div className="border rounded-lg border-border_three/10">
      {columnDNI.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] items-end border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
          <ButtonInputDniMedico />
        </div>
      ))}
      {column1.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column2.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
      {column3.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))}
    </div>
  );
};

export default InputFormularioMedicos;
