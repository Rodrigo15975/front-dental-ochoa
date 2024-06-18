import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useUpdateNota } from "@/services/notas/mutation";
import { Nota } from "@/services/notas/types/typesNotas";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import storeNotasEtiquetasAlergias from "@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias";
import { ErrorMessage, Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { InputTextarea } from "primereact/inputtextarea";
import { BiArrowBack, BiEdit, BiTagAlt } from "react-icons/bi";
import { PiCodeBlockLight } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { Button, ButtonIcon, Modal, Typography } from "../../Common";
import { validationNota } from "./validationNota";

const Notas = () => {
  const { id } = useParams<ID>();

  const { mutate, isPending } = useUpdateNota(id ?? "");

  const { data } = useGetFindOnePaciente(id ?? "");

  const { setOpenNotas, openNotas } = storeNotasEtiquetasAlergias();

  const hanledSubmit = (data: Nota) => mutate(data);
  return (
    <>
      <div className="flex-[0_1_30rem] hover:scale-105 transition">
        <div className="flex items-center justify-between">
          <p className="pb-2 text-text_primary text-[1.1rem] font-robotoSlab_500 flex items-center  justify-between gap-1 ">
            Nota
            <PiCodeBlockLight className="text-2xl" />
          </p>
          <ButtonIcon
            onClick={setOpenNotas}
            className="text-2xl rounded-full p-1 cursor-pointer"
          >
            <BiEdit className="bg-bg_secondary/50 rounded-lg shadow  hover:bg-bg_three/20 transition" />
          </ButtonIcon>
        </div>
        <div className="p-2 flex-[0_1_18rem] min-h-[8rem] shadow-md rounded-md border bg-bg_seven/15 ">
          <Typography
            className="font-robotoSlab_500"
            label={data?.nota.nota ?? ""}
          />
        </div>
      </div>
      <AnimatePresence>
        {openNotas && (
          <Modal
            className="flex-[0_1_30rem] relative shadow-md p-4 border rounded-2xl bg-default"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <ButtonIcon
              onClick={setOpenNotas}
              className="absolute hover:scale-110 transition -top-4 cursor-pointer -right-4 text-3xl rounded-xl bg-bg_primary text-default"
            >
              <BiArrowBack />
            </ButtonIcon>
            <Formik
              initialValues={{
                nota: data?.nota.nota ?? "",
                _id: data?.nota._id ?? "",
              }}
              onSubmit={hanledSubmit}
              validationSchema={validationNota}
            >
              {({ getFieldProps }) => (
                <Form>
                  <div className="flex flex-col">
                    <label
                      htmlFor="nota"
                      className="text-xl flex items-center gap-2 font-robotoSlab_600 mb-4  border-b pb-2"
                    >
                      Nota
                      <PiCodeBlockLight className="text-2xl" />
                    </label>
                    <InputTextarea
                      id="nota"
                      tooltip="Escribe una nota"
                      tooltipOptions={{
                        position: "top",
                      }}
                      className="rounded-lg shadow-md border-none bg-bg_primary/10"
                      {...getFieldProps("nota")}
                      rows={5}
                      cols={30}
                    />
                    <ErrorMessage
                      name="nota"
                      className="font-robotoSlab_600 text-text_seven"
                      component={"p"}
                    />
                  </div>
                  {isPending ? (
                    <LoadingStatic />
                  ) : (
                    <Button
                      type="submit"
                      label="Agregar nota"
                      btnDefault
                      className="w-full bg-bg_nine flex items-center justify-center gap-2 font-robotoSlab_500 p-3 mt-4"
                    >
                      <BiTagAlt />
                    </Button>
                  )}
                </Form>
              )}
            </Formik>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Notas;
