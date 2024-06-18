import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

import { Alergia } from "@/services/alergia/types/typeAlergias";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import storeNotasEtiquetasAlergias from "@/store/storeNotasEtiquetasAlergias/storeNotasEtiquetasAlergias";
import { ErrorMessage, Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { InputTextarea } from "primereact/inputtextarea";
import { BiArrowBack, BiEdit } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { useParams } from "react-router-dom";
import { Button, ButtonIcon, Modal, Typography } from "../../Common";
import { validationAlergia } from "./validation";
import { useUpdateAlergia } from "@/services/alergia/mutation";

const Alergias = () => {
  const { openAlergias, setOpenAlergias } = storeNotasEtiquetasAlergias();
  const { id } = useParams<ID>();

  const { mutate, isPending } = useUpdateAlergia(id ?? "");

  const { data } = useGetFindOnePaciente(id ?? "");

  const hanledSubmit = (data: Alergia) => mutate(data);

  return (
    <>
      <div className="flex-[0_1_30rem] hover:scale-105 transition">
        <div className=" text-text_primary text-[1.1rem] font-robotoSlab_500 flex items-center  justify-between gap-1 ">
          <p className=" text-text_primary text-[1.1rem] font-robotoSlab_500 flex items-center gap-1">
            Alergias
            <CiMedicalCross />
          </p>
          <ButtonIcon
            onClick={setOpenAlergias}
            className="text-2xl rounded-full p-1 cursor-pointer"
          >
            <BiEdit className="bg-bg_secondary/50 rounded-lg shadow  hover:bg-bg_three/20 transition" />
          </ButtonIcon>
        </div>
        <div className="p-2 flex-[0_1_18rem] min-h-[8rem] shadow-md rounded-md border bg-bg_eight/50 ">
          <Typography
            className="font-robotoSlab_500"
            label={data?.alergia.alergias ?? ""}
          />
        </div>
      </div>
      <AnimatePresence>
        {openAlergias && (
          <Modal
            className="flex-[0_1_30rem] relative shadow-md p-4 border rounded-2xl bg-default"
            type="CENTER"
            animate="SCALE-CENTER"
          >
            <ButtonIcon
              onClick={setOpenAlergias}
              className="absolute hover:scale-110 transition -top-4 cursor-pointer -right-4 text-3xl rounded-xl bg-bg_primary text-default"
            >
              <BiArrowBack />
            </ButtonIcon>
            <Formik
              initialValues={{
                alergias: data?.alergia.alergias ?? "",
                _id: data?.alergia._id ?? "",
              }}
              validationSchema={validationAlergia}
              onSubmit={hanledSubmit}
            >
              {({ getFieldProps }) => (
                <Form>
                  <div className="flex flex-col">
                    <label
                      htmlFor="Alergia"
                      className="text-xl flex items-center gap-2 font-robotoSlab_600 mb-4  border-b pb-2"
                    >
                      Alergia
                      <CiMedicalCross />
                    </label>
                    <InputTextarea
                      id="alergias"
                      tooltip="Escribe un recordatorio de alergias"
                      tooltipOptions={{
                        position: "top",
                      }}
                      className="rounded-lg shadow-md border-none bg-bg_primary/10"
                      {...getFieldProps("alergias")}
                      rows={5}
                      cols={30}
                    />
                    <ErrorMessage
                      name="alergias"
                      className="text-text_seven font-robotoSlab_700"
                      component={"p"}
                    />
                  </div>
                  {isPending ? (
                    <LoadingStatic />
                  ) : (
                    <Button
                      type="submit"
                      label="Agregar alergia"
                      btnDefault
                      className="w-full bg-bg_nine flex items-center justify-center gap-2 font-robotoSlab_500 p-3 mt-4"
                    >
                      <CiMedicalCross />
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

export default Alergias;
