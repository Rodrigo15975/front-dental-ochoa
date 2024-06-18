import {
  Button,
  Input,
  PropsInputOptional,
  Typography,
} from "@/components/Common";
import { useFormikContext } from "formik";
import { FC } from "react";
import { MdDelete } from "react-icons/md";
import SelectMedicoNewServices from "./SelectsNewServices/SelectMedicoNewServices";
import {
  InitialValuesNewServicesPacientes,
  inputsNameNewServices,
} from "./inputsNewServices/inputsNewServices";
import { MdOutlinePayments } from "react-icons/md";

const InputsFormServicesPaciente: FC<PropsInputOptional> = ({
  fieldProps,
  remove,
}) => {
  const { values } = useFormikContext<InitialValuesNewServicesPacientes>();

  return (
    <>
      {values.detalles_servicio.map((_, index) => (
        <div key={`servicio-${index}`}>
          <p className="bg-bg_five/10 mb-4 flex items-center justify-start text-text_six border-b p-2">
            Servicio {index + 1}
          </p>
          <div className="flex gap-4 px-4">
            <SelectMedicoNewServices
              name={`detalles_servicio.${index}.${"medico"}`}
              index={index}
              fieldProps={fieldProps}
            />
            {inputsNameNewServices.slice(2, 3).map((inputs, indexInputs) => (
              <div className="flex w-full flex-col" key={indexInputs}>
                <Input
                  textPlaceHolder={inputs.textPlaceHolder}
                  className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
                  labelClassName="text-inputs-gradients font-robotoSlab_700"
                  reset
                  AsComPonente={inputs.Component}
                  as={inputs.as}
                  type={inputs.type}
                  fieldProps={fieldProps}
                  name={`detalles_servicio.${index}.${inputs.name}`}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 px-4">
            {inputsNameNewServices.slice(3, 6).map((inputs, indexInputs) => (
              <div className="flex w-full flex-col" key={indexInputs}>
                <label className="font-robotoSlab_600 text-inputs-gradients">
                  {inputs.textPlaceHolder}
                </label>
                <Input
                  // textPlaceHolder={inputs.textPlaceHolder}
                  className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
                  labelClassName="text-inputs-gradients font-robotoSlab_700"
                  reset
                  AsComPonente={inputs.Component}
                  as={inputs.as}
                  disabled={inputs.disabled}
                  type={inputs.type}
                  fieldProps={fieldProps}
                  name={`detalles_servicio.${index}.${inputs.name}`}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end">
            <Button
              type="button"
              disabled={values.detalles_servicio.length === 1 ? true : false}
              className="flex py-2 px-4 justify-end"
              onClick={() => remove && remove(index)}
            >
              <MdDelete className="text-4xl bg-bg_seven text-white p-1 cursor-pointer rounded-full shadow-md " />
            </Button>
          </div>
        </div>
      ))}
      <Typography
        className="text-2xl px-4 flex items-center gap-2 text-text_seven/50 font-robotoSlab_500"
        label="Información de pago"
      >
        <MdOutlinePayments />
      </Typography>
      <div className="flex gap-4 px-4">
        {inputsNameNewServices.slice(6, 8).map((inputs, indexInputs) => (
          <div className="flex w-full flex-col" key={indexInputs}>
            <Input
              className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              textPlaceHolder={inputs.textPlaceHolder}
              disabled={inputs.disabled}
              type={inputs.type}
              as={inputs.as}
              fieldProps={fieldProps}
              AsComPonente={inputs.Component}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 px-4">
        {inputsNameNewServices.slice(8, 10).map((inputs, indexInputs) => (
          <div className="flex w-full flex-col" key={indexInputs}>
            <Input
              className="w-full border-border_three/0 bg-bg_six/5  shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[6rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              textPlaceHolder={inputs.textPlaceHolder}
              disabled={inputs.disabled}
              type={inputs.type}
              as={inputs.as}
              fieldProps={fieldProps}
              AsComPonente={inputs.Component}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InputsFormServicesPaciente;
