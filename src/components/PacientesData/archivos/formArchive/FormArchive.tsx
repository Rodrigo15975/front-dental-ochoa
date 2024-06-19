import { Button, Input } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import UploadPhotos from "@/components/Common/UploadPhotos/UploadPhotos";
import { useCreateArchivos } from "@/services/archivos/mutation";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { InputTextarea } from "primereact/inputtextarea";
import { useParams } from "react-router-dom";
import {
  InitialArchive,
  initialArchive,
  inputsDefaultsArchive,
} from "./inputsArchive";
import { validationArchive } from "./validationArchive";
import { hourNowDate, registerDateInternational } from "@/utils";
const FormArchive = () => {
  const { id } = useParams<ID>();
  const { isPending, mutate } = useCreateArchivos(id ?? "");

  const horaRegistro = hourNowDate();
  const fechaRegistro = registerDateInternational();

  const handledSubmit = (
    data: InitialArchive,
    helper: FormikHelpers<InitialArchive>
  ) => {
    const { descripcion, nombre, file, medico } = data;
    file?.append("nombre", nombre);
    file?.append("descripcion", descripcion);
    file?.append("medico", medico);
    file?.append("horaCreacion", horaRegistro);
    file?.append("fechaCreacion", fechaRegistro);
    mutate(file);

    helper.setFieldValue("file", "");
    helper.resetForm();
  };
  if (isPending)
    return (
      <div className="flex w-full h-full  items-center justify-center">
        <LoadingStatic />
      </div>
    );

  return (
    <>
      <div className="flex p-1 justify-center items-center w-full"></div>
      <Formik
        initialValues={initialArchive}
        onSubmit={handledSubmit}
        validationSchema={validationArchive}
      >
        {({ getFieldProps, setFieldValue }) => (
          <Form className="flex max-2xl:flex-wrap gap-2 p-8 justify-between max-lg:flex-wrap">
            <div className="flex-[0_1_45rem] border shadow-md">
              <div className="border-b">
                <p className="text-xl font-robotoSlab_600 bg-bg_six/50 p-3 text-default">
                  Nuevo archivo Digital
                </p>
              </div>
              <UploadPhotos
                name="file"
                onSelect={(e) => setFieldValue("file", e)}
              />
              <ErrorMessage
                name="file"
                component={"p"}
                className="text-text_seven text-center"
              />
            </div>
            <div className="w-full p-4 flex flex-col gap-4">
              {inputsDefaultsArchive.slice(0, 2).map((inputs, index) => (
                <Input
                  as={inputs.as}
                  key={`input-archive-${index}`}
                  labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
                  className={
                    "w-full border pl-4  h-[3rem] bg-bg_six/10 border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 hover:bg-default p-2 mt-[0.5rem] focus:outline-1 transition-all rounded-full focus:bg-default outline"
                  }
                  reset
                  AsComPonente={inputs.Component}
                  fieldProps={getFieldProps}
                  name={inputs.name}
                  textPlaceHolder={inputs.textPlaceHolder}
                />
              ))}
              <InputTextarea
                {...getFieldProps("descripcion")}
                name="descripcion"
                placeholder="Descripción del archivo"
                className="mt-6 rounded-md w-full bg-bg_six/5 outline-none min-h-[15rem] "
              />
              <ErrorMessage
                name="descripcion"
                component={"p"}
                className="text-text_seven"
              />
              <Button type="submit" btnStyled="blue" />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormArchive;
