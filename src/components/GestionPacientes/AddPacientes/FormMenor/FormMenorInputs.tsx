import { Input, PropsInputOptional } from "@/components/Common";
import { FC } from "react";
import { inputsPacienteMenor } from "./inputsPacienteMenor";
import { InputDefaultNames } from "@/types/typeInputs";
import _ from "lodash";
import ButtonApoderadoDni from "./ButtonApoderadoDni";

const FormMenorInputs: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaultNames[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          labelClassName="font-robotoSlab_800 text-inputs-gradients font-robotoSlab_500"
          className="w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
          AsComPonente={input.Component}
          as={input.as}
          disabled={input.disabled}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));

  // Quitamos el primer input del dni
  const columnDni = _.chunk(inputsPacienteMenor.slice(0, 1), 4);
  const column1 = _.chunk(inputsPacienteMenor.slice(1, 4), 3);
  const column2 = _.chunk(inputsPacienteMenor.slice(4, 5), 2);
  const columnDniApo = _.chunk(inputsPacienteMenor.slice(5, 6), 3);
  const column3 = _.chunk(inputsPacienteMenor.slice(6, 11), 3);

  return (
    <>
      {columnDni.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] border-b pb-4 border-border_three/15 mt-4 justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
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
      {/* {column5.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-2 items-end justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
        </div>
      ))} */}

      <div className="px-4 border-border_three/15 pb-4 my-8 border-b">
        <p className="text-xl font-robotoSlab_600 text-inputs-gradients">
          Información del apoderado
        </p>
      </div>
      {columnDniApo.map((inputsGroup, groupIndex) => (
        <div
          key={`input-group-${groupIndex}`}
          className="flex px-[1rem] mt-2 items-end justify-end gap-4 "
        >
          {renderInputs(inputsGroup)}
          <ButtonApoderadoDni />
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

export default FormMenorInputs;
