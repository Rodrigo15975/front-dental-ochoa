import dayjs from "dayjs";
import "dayjs/locale/es";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";

import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetAllCitas } from "@/services/citas/queries";
import { GetAllCitas, STATUSCITA } from "@/services/citas/types/typesCitas";
import { useGetHorario } from "@/services/horario/queries";
import AppointMentEvent from "./AppointMentEvent";
import { Appointment } from "./types/typeCalendarioCitas";
import { storeMenuAppointMent } from "@/store/storeMenuAppointment/storeMenuAppointment";

const localizer = momentLocalizer(moment);

type Props = {
  getCita: (appointment: Appointment) => void;
  updateDate: ({ end, start }: Appointment, id: string) => void;
  updateForm: (data: GetAllCitas) => void;
};

const DndCalendar = withDragAndDrop<GetAllCitas>(Calendar);

// formato standar
// 2024-05-04T04:48:56-05:00
const CalendarioCitas = ({ getCita, updateDate, updateForm }: Props) => {
  const { setStyleMenu, setOpenMenuAppointment } = storeMenuAppointMent();

  const { data } = useGetHorario();
  const inicio = data?.inicio ?? "07:00:00";
  const final = data?.final ?? "23:00:00";
  const events = useGetAllCitas();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const components: any = {
    event: ({ event }: { event: GetAllCitas }) => {
      const data = event;
      if (event) return <AppointMentEvent data={data} />;
      return null;
    },
  };

  const appointment = events.data?.map((appointment) => ({
    ...appointment,
    end: new Date(appointment.end),
    start: new Date(appointment.start),
  }));

  const appointmentDiferenteInEspera = appointment?.filter(
    (appoint) =>
      appoint.estado.estado !== STATUSCITA.EN_ESPERA &&
      appoint.estado.estado !== STATUSCITA.EN_SALA &&
      appoint.estado.estado !== STATUSCITA.ATENDIDO
  );
  if (events.isLoading)
    return (
      <div className="flex justify-center items-start w-full">
        <LoadingStatic />
      </div>
    );

  return (
    <div className="h-full w-full">
      <DndCalendar
        components={components}
        events={appointmentDiferenteInEspera}
        localizer={localizer}
        startAccessor="start"
        selectable
        views={["day", "week", "month"]}
        min={moment(`2024-01-01T${inicio}`).toDate()}
        max={moment(`2024-01-01T${final}`).toDate()}
        onSelectSlot={({ start, end }) => getCita({ end, start })}
        defaultView="week"
        endAccessor="end"
        formats={{
          dayHeaderFormat: (date) => {
            return dayjs(date)
              .locale("es")
              .format("dddd - DD/MM")
              .toUpperCase();
          },
          dayRangeHeaderFormat: () => {
            return dayjs().locale("es").format("dddd - DD-MM").toUpperCase();
          },
          weekdayFormat: (date) => dayjs(date).locale("es").format("dddd"), // Formato para los nombres de los días de la semana
          dayFormat: (date) =>
            dayjs(date).locale("es").format("dddd DD/MM").toLowerCase(),
          timeGutterFormat: "h:mm A",
          monthHeaderFormat: "MMMM YYYY",
        }}
        messages={{
          today: "Hoy",
          previous: "Anterior",
          next: "Siguiente",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "No hay eventos en este rango.",
          showMore: (total) => `+ Ver más (${total})`,
        }}
        onEventDrop={({ event, end, start }) =>
          updateDate({ end, start }, event._id)
        }
        onSelectEvent={(data, e) => {
          const mouseEvent = e as unknown as MouseEvent;
          setStyleMenu({ x: mouseEvent.clientX, y: mouseEvent.clientY });
          updateForm(data);
          setOpenMenuAppointment();
        }}
      />
    </div>
  );
};

export default CalendarioCitas;
