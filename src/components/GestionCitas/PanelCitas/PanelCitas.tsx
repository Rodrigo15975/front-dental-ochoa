import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { useState } from "react";
import CalendarioCitas from "./calendario/CalendarioCitas";
import CalendarioFormCita from "./calendario/CalendarioFormCita";
// import FormUpdateCita from "./calendario/formUpdate/FormUpdateCita";
import { useUpdateChangeDateCita } from "@/services/citas/mutation";
import { Appointment } from "./calendario/types/typeCalendarioCitas";
import MenuAppointmenCita from "./MenuAppointmenCita";
// import PanelColoresCitas from "./PanelColoresCitas";

const PanelCitas = () => {
  const [appointment, setAppointment] = useState<Appointment>();
  const [dataAppointment, setDataAppointment] = useState<GetAllCitas>();

  const getCita = ({ end, start }: Appointment) =>
    setAppointment({ end, start });

  const closeCita = () => setAppointment(undefined);

  const { mutate } = useUpdateChangeDateCita();
  const updateDate = ({ end, start }: Appointment, _id: string) =>
    mutate({ end, start, _id });

  const updateForm = (data: GetAllCitas) => setDataAppointment(data);

  return (
    <div className="h-[200vh] justify-between flex p-4">
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
      {/* Actualizar formulario de citas */}
      {/* <FormUpdateCita closeForm={closeUpdateForm} data={updateAppointment} /> */}
      {/* Menu sub cita /> */}

      <MenuAppointmenCita data={dataAppointment} />
    </div>
  );
};

export default PanelCitas;
