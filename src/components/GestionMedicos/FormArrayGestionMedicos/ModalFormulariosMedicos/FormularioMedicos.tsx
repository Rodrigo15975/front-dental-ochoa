import { Button } from "@/components/Common";
import { ErrorMessage, Form, Formik } from "formik";
import InputFormularioMedicos from "./InputFormularioMedicos";
import { initialValuesMedico } from "./inputsFormularioMedicos/inputsNamesMedicos";
import { validationSchemaMedico } from "./inputsFormularioMedicos/validationFormularioMedicos";

import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import SelectMulti from "@/components/Common/MultiSelect/MultiSelect";
import { useCreateMedico } from "@/services/medicos/mutation";
import { CreateMedico } from "@/services/medicos/types/typesMedicos";
import { useGetServicios } from "@/services/servicios";
import { useEffect, useState } from "react";

const FormularioMedicos = () => {
  const { mutate, isPending, isSuccess } = useCreateMedico();

  const [selectServices, setSelectServices] = useState<
    CreateMedico["servicios"]
  >([]);

  const { data } = useGetServicios();
  const handledSubmit = (data: CreateMedico) => mutate(data);

  useEffect(() => {
    if (isSuccess) return setSelectServices([]);
  }, [isSuccess]);

  return (
    <>
      <Formik
        initialValues={initialValuesMedico}
        onSubmit={handledSubmit}
        validationSchema={validationSchemaMedico}
      >
        {({ getFieldProps, setFieldValue }) => (
          <Form className="mt-8">
            {/*  */}
            <SelectMulti
              titleOption="Seleccione servicios"
              optionsLabel={data}
              valueOptions={selectServices}
              getFieldProps={getFieldProps}
              onChange={(value) => {
                setSelectServices(value);
                setFieldValue("servicios", value);
              }}
              className="mb-3 w-full"
              name="nombre"
            />
            <ErrorMessage
              name="servicios"
              className="text-text_seven"
              component={"p"}
            />
            <InputFormularioMedicos fieldProps={getFieldProps} />
            {isPending ? (
              <LoadingStatic />
            ) : (
              <Button type="submit" btnStyled="blue" />
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormularioMedicos;
