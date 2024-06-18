import { Input, PropsInputOptional } from "@/components/Common";
import { inputsNamesCitas } from "./inputNamesCitas";
import { InputDniPacienteCitas } from "./inputDniPacienteCitas";
import InputSelectRenderServices from "./inputSelectRenderServices";

const InputsFormCitas = ({ fieldProps }: PropsInputOptional) => {
  return (
    <>
      <InputDniPacienteCitas fieldProps={fieldProps} />
      <div className="flex mt-4 gap-4">
        {inputsNamesCitas.slice(1, 2).map((input) => (
          <div
            key={`form-array-${input.name}`}
            className="flex flex-col flex-[0_1_100%]"
          >
            <Input
              label={input.textPlaceHolder}
              reset
              disabled={true}
              labelClassName="font-robotoSlab_700 text-inputs-gradients font-robotoSlab_500"
              className="w-full border border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
              AsComPonente={input.Component}
              as={input.as}
              type={input.type}
              name={input.name}
              fieldProps={fieldProps}
            />
          </div>
        ))}
      </div>
      <InputSelectRenderServices fieldProps={fieldProps} />
      <div className="flex gap-4 mt-4">
        {inputsNamesCitas.slice(3, 4).map((input) => (
          <div
            key={`form-array-${input.name}`}
            className="flex flex-col flex-[0_1_100%]"
          >
            <Input
              label={input.textPlaceHolder}
              reset
              labelClassName="font-robotoSlab_700 text-inputs-gradients font-robotoSlab_500"
              className="w-full border border-border_three/15 min-h-[2rem] text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
              AsComPonente={input.Component}
              as={input.as}
              type={input.type}
              name={input.name}
              fieldProps={fieldProps}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        {inputsNamesCitas.slice(4, 5).map((input) => (
          <div
            key={`form-array-${input.name}`}
            className="flex flex-col flex-[0_1_100%]"
          >
            <Input
              label={input.textPlaceHolder}
              reset
              labelClassName="font-robotoSlab_700 text-inputs-gradients font-robotoSlab_500"
              className="w-full border border-border_three/15 min-h-[8rem] text-text_primary/90 shadow-md font-robotoSlab_600 p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-md focus:outline-border_three outline"
              AsComPonente={input.Component}
              as={input.as}
              type={input.type}
              name={input.name}
              fieldProps={fieldProps}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InputsFormCitas;
