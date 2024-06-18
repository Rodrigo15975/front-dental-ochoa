import { Button } from "@/components/Common";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import { InputTextarea } from "primereact/inputtextarea";
import { FaWpforms } from "react-icons/fa6";

import { useCreateReceta } from "@/services/recetas/mutation";
import { CreateReceta } from "@/services/recetas/types/typesRecetas";
import { hourNowDate, registerDateInternational } from "@/utils";
import { validationNewReceta } from "../../modalHistoryPrescripcion/validation/validationNewPrescrion";
import HeaderNewPrescripcion from "../prescripcion/HeaderNewPrescripcion";
import ButtonOpenHistoryReceta from "./ButtonOpenHistoryReceta";
import InputsFormReceta from "./InputsFormReceta";
import { initialValueNewReceta } from "./inputsNameReceta";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useParams } from "react-router-dom";
import { ID } from "@/services/pacientes/types/typesPaciente";

const FormReceta = () => {
  const { id } = useParams<ID>();
  const fechaNow = registerDateInternational();
  const hourNow = hourNowDate();
  const { mutate, isPending } = useCreateReceta(id ?? "");

  const hanledSubmit = (
    data: CreateReceta,
    helper: FormikHelpers<CreateReceta>
  ) => {
    mutate(data);
    helper.resetForm();
  };

  return (
    <>
      <div className="p-8 flex justify-between ">
        <div className="px-2 flex justify-between w-full">
          <HeaderNewPrescripcion title="Nueva Receta médica" />
          <ButtonOpenHistoryReceta />
        </div>
      </div>
      <Formik
        initialValues={{
          ...initialValueNewReceta,
          fechaReceta: fechaNow,
          horaReceta: hourNow,
        }}
        onSubmit={hanledSubmit}
        validationSchema={validationNewReceta}
      >
        {({ getFieldProps }) => (
          <Form className="flex border mb-8 min-h-[65vh] justify-between border-border_three/50 rounded-3xl shadow flex-col  max-w-[30rem] m-auto p-8">
            <InputsFormReceta fieldProps={getFieldProps} />
            <InputTextarea
              {...getFieldProps("notaAdicional")}
              name="notaAdicional"
              placeholder="Notación adicional"
              className="mt-6 rounded-md bg-bg_six/5 min-h-[20rem] outline-none"
            />
            <ErrorMessage
              name="notaAdicional"
              className="text-text_seven"
              component={"p"}
            />

            <div className="flex flex-col gap-4 mt-4 justify-start h-[3rem]">
              {isPending ? (
                <LoadingStatic />
              ) : (
                <Button
                  type="submit"
                  btnStyled
                  className=" bg-bg_six h-[3rem] hover:bg-bg_six/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-default"
                  label="Guardar"
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

export default FormReceta;
