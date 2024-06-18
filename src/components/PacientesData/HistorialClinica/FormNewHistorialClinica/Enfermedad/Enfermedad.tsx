import { Input, PropsInputOptional, Typography } from "@/components/Common";
import { InputDefaultNames } from "@/types/typeInputs";
import _ from "lodash";
import { FC } from "react";
import { inpustNewHistorialClinica } from "../inputsNameNewHistorialClinica";

const Enfermedad: FC<PropsInputOptional> = ({ fieldProps }) => {
  const renderInputs = (inputs: InputDefaultNames[]) =>
    inputs.map((input, indexInput) => (
      <div key={`form-array-${indexInput}`} className="flex-[0_1_100%]">
        <Input
          label={input.textPlaceHolder}
          reset
          labelClassName="font-robotoSlab_600 text-text_primary/80"
          className="w-full border pl-4  rounded-md bg-bg_six/5 border-none border-border_three/15 text-text_primary/90  shadow-md font-robotoSlab_600 hover:bg-default p-2 h-[4rem] mt-[0.5rem] focus:outline-1 transition-all focus:bg-bg_three/20 outline"
          as={input.as}
          type={input.type}
          name={input.name}
          fieldProps={fieldProps}
        />
      </div>
    ));
  const column1 = _.chunk(inpustNewHistorialClinica.slice(0, 3), 1);
  return (
    <>
      <Typography
        className="bg-clinica w-full rounded-lg text-default text-xl flex items-center h-[3rem] p-2"
        label="Enfermedad Actual"
      />
      <div className=" bg-default p-4 my-4 rounded-md shadow-sm px-[1rem] flex flex-col gap-4 mt-4 ">
        {column1.map((inputsGroup, groupIndex) => (
          <div
            key={`input-group-${groupIndex}`}
            className="flex justify-evenly"
          >
            {renderInputs(inputsGroup)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Enfermedad;
