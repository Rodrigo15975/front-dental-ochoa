import { Input, PropsInputOptional, Typography } from "@/components/Common";
import { FC } from "react";
import { GiProgression } from "react-icons/gi";
import { inputsNameNewServices } from "../../ModalAddServicesPacientes/FormNewServicesPaciente/inputsNewServices/inputsNewServices";
import { useGetMedicosActivos } from "@/services/medicos/queries";
import { ErrorMessage } from "formik";

const InputsFormServicesExistente: FC<PropsInputOptional> = ({
  fieldProps,
}) => {
  const medicosActives = useGetMedicosActivos();
  return (
    <>
      <div className="p-4 flex justify-between gap-2 border-b">
        <Typography
          className="text-xl font-robotoSlab_500 flex items-center gap-2 text-text_six"
          label="Tratamiento en progreso"
        >
          <GiProgression />
        </Typography>
      </div>

      <div className="flex w-full gap-4 px-4">
        <div className="flex w-full flex-col">
          <label htmlFor="" className="text-inputs-gradients font-robotoSlab_600 mt-4">
            Médico
          </label>
          <select
            className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
            {...fieldProps("medico")}
            disabled
          >
            <option value=""></option>
            {medicosActives?.map((medicos) => (
              <option
                key={`option-medicos-${medicos._id}`}
                className="font-robotoSlab_600 text-text_primary"
                value={medicos._id}
              >
                {medicos.name.charAt(0).toUpperCase() +
                  medicos.name.slice(1).toLowerCase()}{" "}
                {medicos.apellidos.charAt(0).toUpperCase() +
                  medicos.apellidos.slice(1).toLowerCase()}{" "}
              </option>
            ))}
          </select>

          <ErrorMessage
            className="text-text_seven"
            name={"medico"}
            component={"p"}
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className="text-inputs-gradients font-robotoSlab_600 mt-4">
            Servicio
          </label>
          <Input
            disabled={true}
            name="servicio"
            fieldProps={fieldProps}
            className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
            labelClassName="text-inputs-gradients font-robotoSlab_700"
            reset
          />
        </div>

        {inputsNameNewServices.slice(2, 3).map((inputs, indexInputs) => (
          <div className="flex w-full flex-col" key={indexInputs}>
            <label htmlFor="" className="text-inputs-gradients font-robotoSlab_600 mt-4">
              {inputs.textPlaceHolder}
            </label>
            <Input
              className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              disabled={true}
              AsComPonente={inputs.Component}
              as={inputs.as}
              fieldProps={fieldProps}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 px-4">
        {inputsNameNewServices.slice(3, 6).map((inputs, indexInputs) => (
          <div className="flex w-full flex-col" key={indexInputs}>
            <label
              htmlFor=""
              className="text-inputs-gradients px-2 font-robotoSlab_600"
            >
              {inputs.textPlaceHolder}
            </label>
            <Input
              className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              disabled={inputs.disabled}
              as={inputs.as}
              fieldProps={fieldProps}
              AsComPonente={inputs.Component}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 px-4">
        {inputsNameNewServices.slice(6, 8).map((inputs, indexInputs) => (
          <div className="flex w-full" key={indexInputs}>
            <Input
              textPlaceHolder={inputs.textPlaceHolder}
              className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[5rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              disabled={inputs.disabled}
              as={inputs.as}
              fieldProps={fieldProps}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 px-4">
        {inputsNameNewServices.slice(8, 10).map((inputs, indexInputs) => (
          <div className="flex w-full" key={indexInputs}>
            <Input
              textPlaceHolder={inputs.textPlaceHolder}
              className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[5rem] rounded-md"
              labelClassName="text-inputs-gradients font-robotoSlab_700"
              reset
              disabled={inputs.disabled}
              as={inputs.as}
              fieldProps={fieldProps}
              name={`${inputs.name}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default InputsFormServicesExistente;
