import { Button, ErrorNetWork } from "@/components/Common";
import { Form, Formik } from "formik";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { BsSave2 } from "react-icons/bs";

import { validationSchemaConfiguracion } from "../FormularioConfiguracion/schemaValidationConfiguracion";

import {
  PartialEmpresa,
  useGetEmpresa,
  useUpdateEmpresa,
} from "@/services/configuracion";
import { storeConfiguracion } from "@/store";
import FormularioInputsEditarConfiguracion from "./FormularioInputsEditarConfiguracion";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const FormularioEditarConfiguracion = () => {
  const { setOpenFormEditConfiguracion } = storeConfiguracion();

  const { data } = useGetEmpresa();
  const { mutate, isPending, isError } = useUpdateEmpresa();

  const handleSubmit = (dataUpdate: PartialEmpresa) => mutate(dataUpdate);

  if (isPending) return <LoadingStatic />;
  if (isError) return <ErrorNetWork />;
  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={validationSchemaConfiguracion}
        initialValues={{
          ...data,
        }}
        className="p-4"
      >
        {({ getFieldProps }) => (
          <Form
            className="p-8 max-md:p-4 max-md:gap-4 flex flex-col h-full
           justify-between gap-4 w-full"
          >
            <div className="flex justify-between bg-bg_five/20 p-2">
              <p className="text-2xl max-md:text-xl flex gap-4  items-center rounded-xl text-text_three">
                Editando Información
                <BiEdit />
              </p>
              <Button
                type="button"
                btnDefault
                label="Volver"
                onClick={setOpenFormEditConfiguracion}
                className="text-xl flex items-center justify-center gap-3 flex-[0_1_10rem] bg-default"
              >
                <BiArrowBack />
              </Button>
            </div>
            <FormularioInputsEditarConfiguracion fieldProps={getFieldProps} />
            <Button
              type="submit"
              btnDefault
              className="flex my-[2rem] h-[3rem] items-center p-4 justify-center gap-2 font-robotoSlab_500 bg-bg_six text-default hover:bg-bg_three/50 hover:text-text_primary transition"
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

export default FormularioEditarConfiguracion;
