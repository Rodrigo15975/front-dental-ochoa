import { Button } from "@/components/Common";
import { CreatePacienteMenor } from "@/services/pacientes/types/typesPaciente";
import { Form, Formik } from "formik";
import { FaWpforms } from "react-icons/fa";
import FormMenorInputs from "./FormMenorInputs";
import { initialPacienteMenor } from "./inputsPacienteMenor";
import { validationSchemaMenor } from "./validationSchemaMenor";
import { useCreatePacienteMenor } from "@/services/pacientes/mutation";

const FormPacienteMenor = () => {
  const { mutate } = useCreatePacienteMenor();
  const handledSubmit = (data: CreatePacienteMenor) => mutate(data);

  return (
    <>
      <Formik
        initialValues={initialPacienteMenor}
        onSubmit={handledSubmit}
        validationSchema={validationSchemaMenor}
        // enableReinitialize
      >
        {({ getFieldProps }) => (
          <Form className="flex flex-col justify-between max-lg:flex-wrap">
            <FormMenorInputs fieldProps={getFieldProps} />
            <div className="px-4">
              <Button
                type="submit"
                btnStyled
                className="my-8 bg-bg_six h-[3rem] hover:bg-bg_six/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-default"
                label="Registrar"
              >
                <FaWpforms className="text-default text-xl" />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormPacienteMenor;
