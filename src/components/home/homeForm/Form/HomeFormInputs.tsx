import { Input, PropsInputOptional } from "@/components/Common";
import { labelInputs } from "./labeInputs/labelInputs";

const HomeInputs = ({ fieldProps }: PropsInputOptional) => {
  return (
    <div className="flex flex-col gap-8">
      {labelInputs.map((inputs, index) => (
        <Input
          Icon={inputs.icon}
          label={inputs.label}
          labelClassName="text-inputs-gradients y font-robotoSlab_700 pl-[1rem]"
          classNameParentInputs="w-full flex flex-col gap-2"
          className="pl-[1.5rem] focus:bg-bg_primary/10 transition focus:border-1 text-text_primary font-robotoSlab_600 text-[1rem] h-[2.5rem] rounded-full border-border_three/50"
          type={inputs.type}
          name={inputs.name}
          textPlaceHolder={inputs.textPlaceHolder}
          key={index}
          fieldProps={fieldProps}
        />
      ))}
    </div>
  );
};

export default HomeInputs;
