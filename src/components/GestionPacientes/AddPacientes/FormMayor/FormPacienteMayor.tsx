import { Button } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useCreatePacienteMayor } from "@/services/pacientes/mutation";
import { CreatePaciente } from "@/services/pacientes/types/typesPaciente";
import { Form, Formik } from "formik";
import FormPacientesMayorInputs from "./FormPacientesMayorInputs";
import { initialPacienteMayor } from "./inputsPacienteMayor";
import { validationSchemaMayor } from "./validationSchemaMayor";

const FormPacienteMayor = () => {
  const { mutate, isPending } = useCreatePacienteMayor();
  const hanledSubmit = (data: CreatePaciente) => mutate(data);
  return (
    <>
      <Formik
        initialValues={initialPacienteMayor}
        onSubmit={hanledSubmit}
        validationSchema={validationSchemaMayor}
      >
        {({ getFieldProps }) => (
          <Form className="flex flex-col justify-between max-lg:flex-wrap">
            <FormPacientesMayorInputs fieldProps={getFieldProps} />
            {isPending ? (
              <div className="flex justify-center h-[6rem]">
                <LoadingStatic />
              </div>
            ) : (
              <div className="h-[6rem] flex ">
                <Button type="submit" btnStyled="blue" />
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormPacienteMayor;
