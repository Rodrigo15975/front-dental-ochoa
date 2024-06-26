import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { useState } from "react";
import CalendarioCitas from "./calendario/CalendarioCitas";
import CalendarioFormCita from "./calendario/CalendarioFormCita";
// import FormUpdateCita from "./calendario/formUpdate/FormUpdateCita";
import { useUpdateChangeDateCita } from "@/services/citas/mutation";
import { Appointment } from "./calendario/types/typeCalendarioCitas";
import MenuAppointmenCita from "./MenuAppointmenCita";
import { Modal } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { AnimatePresence } from "framer-motion";
// import PanelColoresCitas from "./PanelColoresCitas";

const PanelCitas = () => {
  const [appointment, setAppointment] = useState<Appointment>();
  const [dataAppointment, setDataAppointment] = useState<GetAllCitas>();

  const getCita = ({ end, start }: Appointment) =>
    setAppointment({ end, start });

  const closeCita = () => setAppointment(undefined);

  const { mutate, isPending } = useUpdateChangeDateCita();
  const updateDate = ({ end, start }: Appointment, _id: string) =>
    mutate({ end, start, _id });

  const updateForm = (data: GetAllCitas) => setDataAppointment(data);

  return (
    <div className="flex w-full ">
      {/* El calendario no se adpata en 1430px */}
      <div className="h-[100vh] w-full     justify-between flex p-4">
        <CalendarioCitas
          updateForm={updateForm}
          updateDate={updateDate}
          getCita={getCita}
        />
        {/* Modal */}
        <CalendarioFormCita
          appointment={appointment}
          closeAppointment={closeCita}
        />
        {/* Loading reprogramar cita */}
        <AnimatePresence>
          {isPending && (
            <Modal
              className="flex-[0_1_20rem] bg-default shadow rounded-md"
              type="CENTER"
              animate="OPACITY"
            >
              <LoadingStatic />
            </Modal>
          )}
        </AnimatePresence>
        {/* Actualizar formulario de citas */}
        {/* <FormUpdateCita closeForm={closeUpdateForm} data={updateAppointment} /> */}
        {/* Menu sub cita /> */}

        <MenuAppointmenCita data={dataAppointment} />
      </div>
    </div>
  );
};

export default PanelCitas;
