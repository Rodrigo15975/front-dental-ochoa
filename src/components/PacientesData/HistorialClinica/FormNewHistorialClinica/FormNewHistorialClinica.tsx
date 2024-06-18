import { Button } from "@/components/Common";
import { useCreateHistorialClinica } from "@/services/historial-clinica/mutation";
import { CreateHistorialClinica } from "@/services/historial-clinica/types/typesHistorialClinica";
import { Form, Formik, FormikHelpers } from "formik";
import Antecedentes from "./Antecedentes/Antecedentes";
import Enfermedad from "./Enfermedad/Enfermedad";
import "./historialClinica.css";
import { initialValueNewHistorialClinica } from "./inputsNameNewHistorialClinica";
import { validationNewHistorialClinica } from "./validationNewHistorialClinica";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
const FormNewHistorialClinica = () => {
  const { id } = useParams<ID>();
  const { mutate, isPending } = useCreateHistorialClinica(id ?? "");
  const hanledSubmit = (
    data: CreateHistorialClinica,
    helper: FormikHelpers<CreateHistorialClinica>
  ) => {
    mutate(data);
    helper.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValueNewHistorialClinica}
        onSubmit={hanledSubmit}
        validationSchema={validationNewHistorialClinica}
      >
        {({ getFieldProps }) => (
          <>
            {isPending ? (
              <LoadingStatic />
            ) : (
              <Form>
                <Enfermedad fieldProps={getFieldProps} />
                <Antecedentes fieldProps={getFieldProps} />

                <div className="h-[4rem] flex items-center">
                  :
                  <Button type="submit" btnStyled="blue" />
                </div>
              </Form>
            )}
          </>
        )}
      </Formik>
    </>
  );
};

export default FormNewHistorialClinica;
