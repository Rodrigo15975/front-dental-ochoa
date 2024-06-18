import { Input, PropsInputOptional } from "@/components/Common";
import InputSelectRenderServices from "../inputs/inputSelectRenderServices";
import { inputsNamesCitasUpdate } from "./inputs";
import { useGetAllEstadosCitas } from "@/services/estado-cita/queries";
import { InitialValuesCitas } from "../inputs/inputNamesCitas";
import { ChangeEvent } from "react";
import { ErrorMessage, useFormikContext } from "formik";
import { STATUSCITA } from "@/services/citas/types/typesCitas";

const InputsFormCitasUpdate = ({ fieldProps }: PropsInputOptional) => {
  const { data } = useGetAllEstadosCitas();

  const { setFieldValue } = useFormikContext<InitialValuesCitas>();

  const handledSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const estadoId = e.target.value;
    setFieldValue(`estado`, estadoId);
  };

  const selectStadoUpdate = data?.filter(
    (status) =>
      status.estado !== STATUSCITA.ATENDIDO &&
      status.estado !== STATUSCITA.EN_SALA
  );

  return (
    <>
      <div className="flex mt-4 gap-4">
        {inputsNamesCitasUpdate.slice(0, 1).map((input) => (
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
      <div className="flex mt-4 gap-4">
        {inputsNamesCitasUpdate.slice(1, 2).map((input) => (
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
      <div className="flex flex-col w-full">
        <label className="text-inputs-gradients font-robotoSlab_500">
          Estado
        </label>
        <select
          className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
          {...fieldProps("estado")}
          onChange={handledSelectChange}
        >
          <option value="">Seleccione un Estado</option>
          {selectStadoUpdate?.map((estado) => (
            <option
              key={`option-medicos-${estado._id}`}
              className="font-robotoSlab_600 text-text_primary"
              value={estado._id}
            >
              {estado.estado.charAt(0).toUpperCase() +
                estado.estado.slice(1).toLowerCase()}
            </option>
          ))}
        </select>
        <ErrorMessage
          className="text-text_seven"
          name={"estado"}
          component={"p"}
        />
      </div>
      {/* <div className="flex gap-4 mt-4">
        {inputsNamesCitasUpdate.slice(3, 4).map((input) => (
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
      </div> */}
      <div className="flex gap-4 mt-4">
        {inputsNamesCitasUpdate.slice(4, 5).map((input) => (
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

export default InputsFormCitasUpdate;
