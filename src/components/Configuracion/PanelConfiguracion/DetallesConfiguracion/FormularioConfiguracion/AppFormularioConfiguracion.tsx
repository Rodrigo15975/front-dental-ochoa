import { Button } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { PartialEmpresa, useCreateEmpresa } from "@/services/configuracion";
import { Form, Formik } from "formik";
import { BsSave2 } from "react-icons/bs";
import FormularioConfiguracion from "./FormularioConfiguracion";
import { initialInputsConfiguracion } from "./inputsConfiguracion";
import { validationSchemaConfiguracion } from "./schemaValidationConfiguracion";

const AppFormularioConfiguracion = () => {
  const { mutate, isPending } = useCreateEmpresa();

  const handleSubmitConfiguracion = (data: PartialEmpresa) => mutate(data);
  if (isPending) return <LoadingStatic />;

  return (
    <>
      <Formik
        onSubmit={handleSubmitConfiguracion}
        validationSchema={validationSchemaConfiguracion}
        initialValues={initialInputsConfiguracion}
        className="p-4"
      >
        {({ getFieldProps }) => (
          <Form className="p-8 flex flex-col gap-4">
            <FormularioConfiguracion fieldProps={getFieldProps} />
            <Button
              type="submit"
              btnDefault
              className="flex mt-[2rem] items-center justify-center gap-3 hover:bg-bg_three font-robotoSlab_600 bg-bg_three/50  text-text_primary transition h-[3rem]"
              label="Guardar"
            >
              <BsSave2 />
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AppFormularioConfiguracion;
