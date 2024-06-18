import { Button, Input, PropsInputOptional } from "@/components/Common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { InitialFormulariosServices, NAME_INPUTS_VALUES_SERVICES } from "../..";

const InputsArrayOfFormularios: FC<PropsInputOptional> = ({
  fieldProps,
  remove,
}) => {
  const { values } = useFormikContext<InitialFormulariosServices>();

  return (
    <div className="flex-[0_1_45rem] p-4 rounded-md border shadow-md">
      {values.servicios.map((_, index) => (
        <div key={`formulario-${index}`} className="mt-4">
          <p className="bg-bg_five/10 flex items-center justify-center text-text_six border-b p-2">
            Formulario {index + 1}
          </p>
          {NAME_INPUTS_VALUES_SERVICES.map((inputs, indexInputs) => (
            <Input
              label={inputs.textPlaceHolder}
              className="w-full border-border_three/10 focus:shadow-md text-text_primary/20 transition focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-full"
              labelClassName="text-inputs-gradients"
              reset
              as={inputs.as}
              key={indexInputs}
              fieldProps={fieldProps}
              name={`servicios.${index}.${inputs.name}`}
            />
          ))}
          <Button
            type="button"
            disabled={values.servicios.length === 1 ? true : false}
            className="flex justify-end"
            onClick={() => remove && remove(index)}
          >
            <MdDelete className="text-2xl bg-bg_seven text-white p-1 cursor-pointer rounded-full shadow-md " />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default InputsArrayOfFormularios;
