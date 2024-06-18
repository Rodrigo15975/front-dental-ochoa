import { PropsInputOptional } from "@/components/Common";
import { useGetMedicosActivos } from "@/services/medicos/queries";
import { ErrorMessage, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import { InitialValuesCitas } from "./inputNamesCitas";

const InputSelectRenderServices = ({ fieldProps }: PropsInputOptional) => {
  const { setFieldValue } = useFormikContext<InitialValuesCitas>();
  const medicosActives = useGetMedicosActivos();
  // const [isDisable, setIsDisable] = useState<boolean>(true);
  // const { mutate, isPending } = useGetServiciosMedico();

  const handledSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const medicoId = e.target.value;
    setFieldValue(`medico`, medicoId);
    // if (medicoId) {
    //   mutate(medicoId);
    // }
    // setIsDisable(true);
  };
  // const handledSelectServices = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const changeServicio = e.target.value;

  //   if (changeServicio) {
  //     setFieldValue(`servicio`, changeServicio);
  //   } else {
  //     setFieldValue(`servicio`, "");
  //   }
  // };
  // useEffect(() => {
  //   if (isSuccess) setIsDisable(false);
  // }, [isSuccess]);

  return (
    <>
      <div className="flex items-center  gap-4 mt-4 w-full">
        {/* {isPending ? (
          <div className="flex-[0_1_30rem]">
            <LoadingStatic />
          </div>
        ) : ( */}
        <div className="flex flex-col w-full">
          <label className="text-inputs-gradients font-robotoSlab_500">
            Medico
          </label>
          <select
            className="w-full border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
            {...fieldProps("medico")}
            onChange={handledSelectChange}
          >
            <option value="">Seleccione un médico</option>
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
        {/* )} */}

        {/* <div className="flex max-w-[20rem] flex-col w-full">
          <label
            className="text-inputs-gradients font-robotoSlab_500"
            htmlFor=""
          >
            Servicio
          </label>
          <select
            disabled={isDisable}
            className="w-full  border-border_three/0 bg-bg_six/5 shadow focus:shadow-md text-text_primary transition font-robotoSlab_500 focus:text-text_primary focus:border-border_three/50 my-4 pl-3 h-[3rem] rounded-md"
            {...fieldProps("servicio")}
            name={`servicio`}
            onChange={handledSelectServices}
          >
            <option value="">{"Seleccione un servicio"}</option>
            {data?.map((servicios) => (
              <option
                key={`servicio-medico-${servicios._id}`}
                value={isDisable ? "" : servicios._id}
              >
                {isDisable ? "Seleccione un servicio" : servicios.nombre}
              </option>
            ))}
          </select>
          <ErrorMessage
            className="text-text_seven"
            name={`servicio`}
            component={"p"}
          />
        </div> */}
      </div>
    </>
  );
};

export default InputSelectRenderServices;
