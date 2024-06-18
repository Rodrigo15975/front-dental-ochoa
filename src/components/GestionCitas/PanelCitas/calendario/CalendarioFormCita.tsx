import { Button, Modal, Typography } from "@/components/Common";
import { Form, Formik } from "formik";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { FaWpforms } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { TbBookmarkEdit } from "react-icons/tb";
import InputsFormCitas from "./inputs/InputsFormCitas";
import {
  InitialValuesCitas,
  initialValuesInputsCitas,
} from "./inputs/inputNamesCitas";
import { Appointment } from "./types/typeCalendarioCitas";
import { initialValuesCitasSchema } from "./inputs/validation";
import { useCreateCita } from "@/services/citas/mutation";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

type Props = {
  appointment: Appointment | undefined;
  closeAppointment: () => void;
};

const CalendarioFormCita = ({ appointment, closeAppointment }: Props) => {
  const { mutate, isPending } = useCreateCita(closeAppointment);

  const handledSubmit = (data: InitialValuesCitas) =>
    mutate({
      ...data,
      end: appointment?.end ?? "",
      start: appointment?.start ?? "",
    });

  useEffect(() => {
    if (appointment) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [appointment]);

  return (
    <>
      <AnimatePresence>
        {appointment && (
          <Modal
            className="flex-[0_1_35rem]  border-border_three/20 p-8 container min-h-[85vh] bg-default border shadow-lg rounded-3xl"
            type="CENTER"
            animate="OPACITY"
          >
            <div className="max-h-[85vh]  overflow-y-auto">
              <div className="flex justify-between mb-4 pb-4 items-center gap-2">
                <Typography
                  className="text-text_eight flex items-center gap-2  text-3xl  font-robotoSlab_600"
                  label="Registro de citas"
                >
                  <FaWpforms />
                </Typography>
                <div
                  onClick={closeAppointment}
                  className="border shadow rounded-md flex items-center p-3 hover:bg-bg_primary/50 cursor-pointer transition"
                >
                  <IoArrowBack />
                </div>
              </div>
              <Formik
                initialValues={initialValuesInputsCitas}
                onSubmit={handledSubmit}
                validationSchema={initialValuesCitasSchema}
                enableReinitialize
              >
                {({ getFieldProps }) => (
                  <Form className="pr-4">
                    <InputsFormCitas fieldProps={getFieldProps} />
                    {isPending ? (
                      <LoadingStatic />
                    ) : (
                      <>
                        <Button
                          type="submit"
                          className="flex mt-8 items-center text-default font-robotoSlab_600 shadow-md hover:bg-bg_nine/50 transition hover:text-text_primary/80 h-[2.5rem] bg-bg_six/80 rounded-full w-full gap-2 justify-center"
                          label="Registrar"
                        >
                          <TbBookmarkEdit />
                        </Button>
                        <Button
                          onClick={closeAppointment}
                          type="button"
                          label="Cancelar"
                          className="bg-bg_eight/20 flex items-center gap-2 justify-center text-text_primary/50 font-robotoSlab_500 hover:bg-bg_seven hover:text-text_primary transition shadow-md border mt-3 w-full h-[2.5rem] rounded-full"
                        >
                          <IoArrowBack />
                        </Button>
                      </>
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default CalendarioFormCita;
