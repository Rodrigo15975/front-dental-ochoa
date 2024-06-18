import { Button, Modal, Typography } from "@/components/Common";
import { useUpdateCita } from "@/services/citas/mutation";
import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { FaWpforms } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { TbBookmarkEdit } from "react-icons/tb";
import { InitialValuesCitas } from "../inputs/inputNamesCitas";
import { initialValuesCitasSchema } from "../inputs/validation";
import InputsFormCitasUpdate from "./inputsFormUpdateCita";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

type Props = {
  data: GetAllCitas | undefined;
  openForm: boolean;
  closeForm: () => void;
};

export function FormUpdateCita({ data, closeForm, openForm }: Props) {
  const { mutate, isPending } = useUpdateCita(closeForm);

  const handledSubmit = (cita: InitialValuesCitas) =>
    mutate({ ...cita, _id: data?._id ?? "" });

  const dataUpdate = {
    idPaciente: data?.paciente._id ?? "",
    dni: data?.paciente.dni ?? "",
    estado: data?.estado._id ?? "",
    medico: data?.medico._id ?? "",
    observacion: data?.observacion ?? "",
    paciente: `${data?.paciente.name} ${data?.paciente.apellidos}` ?? "",
  };

  if (data) {
    return (
      <>
        <AnimatePresence>
          {openForm && (
            <Modal
              className="flex-[0_1_35rem] z-50 border-border_three/20 p-8 container min-h-[80vh] bg-default border shadow-lg rounded-3xl"
              type="CENTER"
              animate="OPACITY"
            >
              <div className="max-h-[85vh]  overflow-y-auto">
                <div className="flex justify-between mb-4 pb-4 items-center gap-2">
                  <Typography
                    className="text-text_eight flex items-center gap-2  text-3xl  font-robotoSlab_600"
                    label="Actualizar cita"
                  >
                    <FaWpforms />
                  </Typography>
                  <div
                    onClick={closeForm}
                    className="border shadow rounded-md flex items-center p-3 hover:bg-bg_primary/50 cursor-pointer transition"
                  >
                    <IoArrowBack />
                  </div>
                </div>
                <Formik
                  initialValues={{ ...dataUpdate }}
                  onSubmit={handledSubmit}
                  validationSchema={initialValuesCitasSchema}
                  enableReinitialize
                >
                  {({ getFieldProps }) => (
                    <Form className="pr-4">
                      <InputsFormCitasUpdate fieldProps={getFieldProps} />
                      <>
                        {isPending ? (
                          <LoadingStatic />
                        ) : (
                          <Button
                            type="submit"
                            className="flex mt-8 items-center text-default font-robotoSlab_600 shadow-md hover:bg-bg_nine/50 transition hover:text-text_primary/80 h-[2.5rem] bg-bg_six/80 rounded-full w-full gap-2 justify-center"
                            label="Registrar"
                          >
                            <TbBookmarkEdit />
                          </Button>
                        )}
                        <Button
                          onClick={closeForm}
                          type="button"
                          label="Cancelar"
                          className="bg-bg_eight/20 flex items-center gap-2 justify-center text-text_primary/50 font-robotoSlab_500 hover:bg-bg_seven hover:text-text_primary transition shadow-md border mt-3 w-full h-[2.5rem] rounded-full"
                        >
                          <IoArrowBack />
                        </Button>
                      </>
                    </Form>
                  )}
                </Formik>
              </div>
            </Modal>
          )}
        </AnimatePresence>
      </>
    );
  }
}
