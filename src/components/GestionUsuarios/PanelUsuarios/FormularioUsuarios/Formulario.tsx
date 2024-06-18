import { Form, Formik } from "formik";
import TitleFormularioUsuarios from "./TitleFormularioUsuarios";
import InputsFormularioUsuarios from "./InputsFormularioUsuarios";
import { initialValuesUsuarios } from "./inputsUsuarios/inpustNameUsuario";
import { Button } from "@/components/Common";
import { FaWpforms } from "react-icons/fa";
import { validationSchemaUsuario } from "./inputsUsuarios/validationSchemaUsuario";
import { useCreateUsuario } from "@/services/usuarios/mutation";
import { CreateUsuario } from "@/services/usuarios/types/typesUsuarios";

const Formulario = () => {
  const { mutate } = useCreateUsuario();

  const hanledSubmit = (data: CreateUsuario) => mutate(data);
  return (
    <>
      <TitleFormularioUsuarios />
      <Formik
        initialValues={initialValuesUsuarios}
        onSubmit={hanledSubmit}
        validationSchema={validationSchemaUsuario}
      >
        {({ getFieldProps }) => (
          <Form className="mt-8">
            <InputsFormularioUsuarios fieldProps={getFieldProps} />
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

export default Formulario;
