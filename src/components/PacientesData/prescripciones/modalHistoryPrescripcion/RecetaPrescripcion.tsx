import { Button, Input } from "@/components/Common";
import storePrescripcion from "@/store/storeDataPacientes/prescripciones/storePrescripcion";
import dayjs from "dayjs";
import { ErrorMessage, Form, Formik } from "formik";
import { InputTextarea } from "primereact/inputtextarea";
import { FaWpforms } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";

import HeaderNewPrescripcion from "../tabs/prescripcion/HeaderNewPrescripcion";
import { inputsNameNewReceta } from "../tabs/receta/inputsNameReceta";
import { validationNewPrescripcion } from "./validation/validationNewPrescrion";

const RecetaPrescripcion = () => {
  const dateTime = dayjs();
  const fecha_receta = dateTime.format("YYYY-MM-DD");
  const hora_receta = dateTime.format("HH:mm A");
  const { setOpenModalNewPrescripcion } = storePrescripcion();

  return (
    <>
      <div className="p-8 flex flex-col">
        <HeaderNewPrescripcion title="Nueva receta" />
      </div>
      <Formik
        initialValues={{
          fecha_receta,
          hora_receta,
        }}
        onSubmit={(data) => {
          console.log(data);
        }}
        validationSchema={validationNewPrescripcion}
      >
        {({ getFieldProps }) => (
          <Form className="flex border max-w-[30rem] mb-8 flex-[0_1_40rem] border-border_three/50 rounded-3xl shadow flex-col m-auto p-8">
            {inputsNameNewReceta.map((input, index) => (
              <div
                key={`input-prescripcion-${index}`}
                className="flex flex-col mt-4 flex-[0_1_100%]"
              >
                <Input
                  label={input.textPlaceHolder}
                  reset
                  labelClassName="font-robotoSlab_600 text-inputs-gradients font-robotoSlab_500"
                  className="w-full border pl-4  bg-bg_six/10 border-border_three/15 text-text_primary/90 shadow-md font-robotoSlab_600 hover:bg-default p-2 h-[2.5rem] mt-[0.5rem] focus:outline-1 transition-all rounded-sm focus:bg-default outline"
                  as={input.as}
                  type={input.type}
                  name={input.name}
                  fieldProps={getFieldProps}
                />
              </div>
            ))}

            <InputTextarea
              {...getFieldProps("nota_adicional")}
              name="nota_adicional"
              placeholder="Notación adicional"
              className="mt-6 rounded-md bg-bg_six/5 outline-none min-h-[15rem]"
            />
            <ErrorMessage
              name="nota_adicional"
              className="text-text_seven"
              component={"p"}
            />

            <div className="flex flex-col gap-4 mt-4 justify-start">
              <Button
                type="submit"
                btnStyled
                className=" bg-bg_six h-[3rem] hover:bg-bg_six/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-default"
                label="Registrar"
              >
                <FaWpforms className="text-default text-xl" />
              </Button>
              <Button
                type="button"
                onClick={setOpenModalNewPrescripcion}
                btnStyled
                className=" bg-bg_seven h-[3rem] hover:bg-bg_seven/50 flex items-center justify-center gap-2 font-robotoSlab_500 text-text_primary"
                label="Cancelar"
              >
                <GrClose className="text-text_primary text-xl" />
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RecetaPrescripcion;
