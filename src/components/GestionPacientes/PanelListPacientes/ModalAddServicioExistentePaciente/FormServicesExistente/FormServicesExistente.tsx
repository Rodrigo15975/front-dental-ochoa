import { Button } from "@/components/Common";
import { Form, Formik } from "formik";
import { useEffect } from "react";
import { toast } from "react-toastify";
import InputsFormServicesExistente from "./InputsFormServicesExistente";
import ListServicesExistente from "./ListServicesExistente";
import { detalleServicioSchema } from "../../ModalAddServicesPacientes/FormNewServicesPaciente/validationNewServices";
import {
  InitialServicesExistente,
  initialValuesServiceExistente,
} from "./initialValuesExistente";
import { storeGestionServicios } from "@/store";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useCreateTratamientoServicio } from "@/services/pacientes-servicios/tratamiento/mutation";

const FormServicesExistente = () => {
  const { idPaciente } = storeGestionServicios();

  const { mutate, isPending } = useCreateTratamientoServicio(idPaciente);

  const handledSubmit = (data: InitialServicesExistente) => mutate(data);

  const notification = () =>
    toast.success(
      "Seleccione su servicio en tratamiento, en la lista de proceso",
      {
        autoClose: 5000,
        position: "bottom-center",
        toastId: "select",
      }
    );
  useEffect(() => {
    notification();
  }, []);

  return (
    <>
      <Formik
        initialValues={initialValuesServiceExistente}
        onSubmit={handledSubmit}
        validationSchema={detalleServicioSchema}
      >
        {({ getFieldProps }) => (
          <>
            {isPending ? (
              <div className="flex justify-center w-full p-4 items-center">
                <LoadingStatic />
              </div>
            ) : (
              <Form className="flex justify-evenly gap-4 mt-10 min-h-[72vh]">
                <div className="flex-[0_0_20rem] p-4 shadow-lg hover:shadow-none transition hover:border-border_three/50 rounded-lg bg-default border min-h-[20rem]">
                  <ListServicesExistente />
                </div>
                <div className="flex-[0_1_70rem] shadow-lg hover:shadow-none transition hover:border-border_three/50 rounded-lg bg-default border min-h-[20rem]">
                  <InputsFormServicesExistente fieldProps={getFieldProps} />
                  <div className="px-4">
                    <Button type="submit" btnStyled="blue" />
                  </div>
                </div>
              </Form>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

export default FormServicesExistente;
