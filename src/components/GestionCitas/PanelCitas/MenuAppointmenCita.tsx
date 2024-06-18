import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import {
  useDeleteCita,
  useUpdateStatusCitaCancelar,
  useUpdateStatusCitaConfirmada,
  useUpdateStatusCitaListaEspera,
} from "@/services/citas/mutation";
import { GetAllCitas } from "@/services/citas/types/typesCitas";
import { storeMenuAppointMent } from "@/store/storeMenuAppointment/storeMenuAppointment";
import { AnimatePresence, m } from "framer-motion";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { FiEdit } from "react-icons/fi";
import { GiConfirmed } from "react-icons/gi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { FormUpdateCita } from "./calendario/formUpdate/FormUpdateCita";
import { FaRegCalendarTimes } from "react-icons/fa";

import dayjs from "dayjs";

type Props = {
  data: GetAllCitas | undefined;
};

const MenuAppointmenCita = ({ data }: Props) => {
  const { styleMenu, openMenuAppointment, setOpenMenuAppointment } =
    storeMenuAppointMent();
  const [openForm, setOpenForm] = useState<boolean>(false);
  const citaConfirmada = useUpdateStatusCitaConfirmada(setOpenMenuAppointment);
  const citaListaEspera = useUpdateStatusCitaListaEspera(
    setOpenMenuAppointment
  );
  const citaCancelada = useUpdateStatusCitaCancelar(setOpenMenuAppointment);
  const citaDelete = useDeleteCita(setOpenMenuAppointment);
  useEffect(() => {
    // msotrar esto a nilo
    const timeContentElement = document.querySelector(".rbc-time-content");
    if (openMenuAppointment) {
      document.body.style.overflow = "hidden";
      timeContentElement?.classList.add("hidden-scroll");
    } else {
      document.body.style.overflow = "";
      timeContentElement?.classList.remove("hidden-scroll");
    }

    return () => {
      document.body.style.overflow = "";
      timeContentElement?.classList.remove("custom-class");
    };
  }, [openMenuAppointment]);

  const closeForm = () => setOpenForm(false);

  const openFormModal = () => {
    setOpenMenuAppointment();
    setOpenForm(true);
  };
  const changeCitaConfirmada = () => {
    citaConfirmada.mutate({
      idDocStado: data?._id ?? "",
    });
  };
  const changeCitaListaEspera = () => {
    citaListaEspera.mutate({
      idDocStado: data?._id ?? "",
    });
  };

  const changeCitaCancelada = () =>
    citaCancelada.mutate({ idDocStado: data?._id ?? "" });

  const borrarCita = () =>
    citaDelete.mutate({
      idCita: data?._id ?? "",
      idPaciente: data?.paciente._id ?? "",
    });

  // Suponiendo que `data` tiene los campos `start` y `end` en formato Date
  const startDate = dayjs(data?.start).format("DD/MM/YYYY");
  const startTime = dayjs(data?.start).format("hh:mm A");
  const endTime = dayjs(data?.end).format("hh:mm A");
  const mensaje = `Estimado/a ${data?.paciente.name.toUpperCase()}, le recordamos que tiene una cita programada, fecha ${startDate} a las horas ${startTime}-${endTime} . Por favor, confirme su asistencia.`;

  const whatsappLink = `https://wa.me/+51${
    data?.paciente.celular
  }?text=${encodeURIComponent(mensaje)}`;

  return (
    <>
      <AnimatePresence>
        {openMenuAppointment && (
          <m.div
            initial={{ opacity: 0, translate: "-100%" }}
            animate={{ opacity: 1, translate: 0 }}
            exit={{ opacity: 0, translate: "-100%" }}
            className="bg-bg_six w-[18rem] p-2 rounded-md shadow-md text-3xl text-white min-h-[3rem] "
            style={{
              left: styleMenu.x - 80,
              top: styleMenu.y - 80,
              position: "fixed",
              zIndex: 1000,
            }}
          >
            <div className="flex justify-between items-center">
              <IoCloseCircleOutline
                className="cursor-pointer"
                onClick={setOpenMenuAppointment}
              />
              <div className="flex gap-2">
                <CommonTooltip
                  className="p-1 bg-rose-500/80 text-default rounded-md cursor-pointer"
                  title="Borrar cita"
                  onClick={borrarCita}
                >
                  <FaRegCalendarTimes className="text-[1.5rem]" />
                </CommonTooltip>
                <CommonTooltip
                  className="p-1 cursor-pointer"
                  title="Cambiar a lista de espera"
                  onClick={changeCitaListaEspera}
                >
                  <MdChecklist className="text-[1.5rem]" />
                </CommonTooltip>

                <CommonTooltip
                  className="p-1 cursor-pointer"
                  onClick={changeCitaConfirmada}
                  title="Paciente confirmado"
                >
                  <GiConfirmed className=" text-[1.5rem]" />
                </CommonTooltip>
                <CommonTooltip
                  className="p-1 bg-default flex items-center rounded-full shadow cursor-pointer"
                  title="Cancelar Cita"
                  onClick={changeCitaCancelada}
                >
                  <FcCancel className="text-[1.3rem]" />
                </CommonTooltip>

                <CommonTooltip
                  className="p-1 cursor-pointer"
                  title="Actualizar cita"
                  onClick={openFormModal}
                >
                  <FiEdit className="text-[1.5rem]" />
                </CommonTooltip>

                <CommonTooltip
                  className="cursor-pointer bg-bg_three/50 p-1 rounded-full"
                  title="WhatsApp Paciente"
                >
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-[1.5rem]" />
                  </a>
                </CommonTooltip>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* FormEditCita */}
      <FormUpdateCita closeForm={closeForm} data={data} openForm={openForm} />
    </>
  );
};

export default MenuAppointmenCita;
