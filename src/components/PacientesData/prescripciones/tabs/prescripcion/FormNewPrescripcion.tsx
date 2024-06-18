import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { InputTextarea } from "primereact/inputtextarea";
import { FaWpforms } from "react-icons/fa6";

import { Button } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useCreatePrescripciones } from "@/services/prescripciones/mutation";
import { CreatePrescripciones } from "@/services/prescripciones/types/typesPrescripciones";
import { hourNowDate, registerDateInternational } from "@/utils";
import HeaderNewPrescripcion from "./HeaderNewPrescripcion";
import InputsFormNewPrescripcion from "./InputsFormNewPrescripcion";
import { initialValueNewPrescripcion } from "./inputsNameNewPrescripcion";
import ButtonNewPrescripcion from "../../table/ButtonOpenHistoryPrescripcion";
import { validationNewPrescripcion } from "../../modalHistoryPrescripcion/validation/validationNewPrescrion";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";

const FormPrescripcion = () => {
  const { id } = useParams<ID>();
  const fechaNow = registerDateInternational();
  const hourNow = hourNowDate();

  const { mutate, isPending } = useCreatePrescripciones(id ?? "");

  const hanledSubmit = (
    data: CreatePrescripciones,
    helper: FormikHelpers<CreatePrescripciones>
  ) => {
    mutate(data);
    helper.resetForm();
  };

  return (
    <>
      <div className="p-8 flex flex-col bg-default">
        <div className="px-2 flex w-full justify-between">
          <HeaderNewPrescripcion title="Nueva Prescripción" />
          <ButtonNewPrescripcion />
        </div>
      </div>
      <Formik
        initialValues={{
          ...initialValueNewPrescripcion,
          fechaPrescripcion: fechaNow,
          horaPrescripcion: hourNow,
        }}
        onSubmit={hanledSubmit}
        validationSchema={validationNewPrescripcion}
      >
        {({ getFieldProps }) => (
          <Form className="flex border pb-8 mb-8 min-h-[65vh] justify-between border-border_three/50 rounded-3xl shadow flex-col max-w-[30rem] m-auto p-8">
            <InputsFormNewPrescripcion fieldProps={getFieldProps} />
            <InputTextarea
              {...getFieldProps("responsabilidad")}
              name="responsabilidad"
              placeholder="Responsable"
              className="mt-6 rounded-md bg-bg_six/5 outline-none min-h-[4rem]"
            />

            <InputTextarea
              {...getFieldProps("notaAdicional")}
              name="notaAdicional"
              placeholder="Notación adicional"
              className="mt-6 rounded-md bg-bg_six/5 outline-none min-h-[20rem]"
            />
            <ErrorMessage
              name="notaAdicional"
              className="text-text_seven"
              component={"p"}
            />

            <div className="flex flex-col h-[3rem] gap-4 mt-4 justify-start">
              {isPending ? (
                <LoadingStatic />
              ) : (
                <Button
                  type="submit"
                  btnStyled
                  className=" bg-bg_six h-[3rem] hover:bg-bg_six/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-default"
                  label="Registrar"
                >
                  <FaWpforms className="text-default text-xl" />
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormPrescripcion;
