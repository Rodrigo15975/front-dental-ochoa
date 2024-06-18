import { useCreateServicio } from "@/services/servicios/mutation";
import { CreateServicio } from "@/services/servicios/types/typesServicios";
import { FieldArray, Form, Formik } from "formik";
import {
  INITIAL_VALUES_ARRAYS_SERVICES,
  initialValuesPushServices,
} from "../..";
import ButtonArrayFormulariosServices from "./ButtonArrayFormulariosServices";
import InputsArrayOfFormularios from "./InputsArrayOfFormularios";
import TitlteArrayFormulario from "./TitlteArrayFormulario";
import { InitialFormulariosServicesSchema } from "./initialValuesArraysFormularios/validationServices";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const AppArrayOfFormulariosServices = () => {
  const { mutate, isPending } = useCreateServicio();
  const handledSubmit = (data: CreateServicio) => mutate(data);

  if (isPending) return <LoadingStatic />;
  return (
    <>
      <TitlteArrayFormulario title="Creando Servicio" />
      <Formik
        initialValues={INITIAL_VALUES_ARRAYS_SERVICES}
        onSubmit={handledSubmit}
        validationSchema={InitialFormulariosServicesSchema}
      >
        {({ getFieldProps }) => (
          <Form>
            <FieldArray name="servicios">
              {({ push, remove }) => (
                <div className="flex justify-between">
                  <InputsArrayOfFormularios
                    remove={remove}
                    fieldProps={getFieldProps}
                  />
                  <ButtonArrayFormulariosServices
                    push={() => push(initialValuesPushServices)}
                  />
                </div>
              )}
            </FieldArray>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppArrayOfFormulariosServices;
