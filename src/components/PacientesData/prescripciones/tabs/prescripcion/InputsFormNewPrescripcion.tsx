import { Input, PropsInputOptional } from "@/components/Common";
import { FC } from "react";
import { inputsNameNewPrescription } from "./inputsNameNewPrescripcion";
const InputsFormNewPrescripcion: FC<PropsInputOptional> = ({ fieldProps }) => {
  return (
    <>
      {inputsNameNewPrescription.map((input, index) => (
        <div
          key={`input-prescripcion-${index}`}
          className="flex flex-col mt-4 flex-[0_1_100%]"
        >
          <Input
            label={input.textPlaceHolder}
            reset
            labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
            className="w-full border pl-4  bg-bg_six/10 border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 hover:bg-default p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-sm focus:bg-default outline"
            as={input.as}
            AsComPonente={input.Component}
            type={input.type}
            name={input.name}
            fieldProps={fieldProps}
          />
        </div>
      ))}
    </>
  );
};

export default InputsFormNewPrescripcion;
