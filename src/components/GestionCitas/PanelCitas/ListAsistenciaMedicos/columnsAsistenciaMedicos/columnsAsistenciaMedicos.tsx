import { Button } from "@/components/Common";
import {
  capitalizeApellido,
  capitalizeNombre,
} from "@/components/Common/CapitalicesComponent/CapitalicesComponen";
import { useCreateAsistencia } from "@/services/asistencia/mutation";
import { CreateAsistencia } from "@/services/asistencia/types/typeAsistencia";
import { GetAllMedicos } from "@/services/medicos/types/typesMedicos";
import { hourNowDate } from "@/utils";
import Avatar from "antd/es/avatar/avatar";
import dayjs from "dayjs";
import { ColumnProps } from "primereact/column";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import HistoryAsistaneciMedicos from "./historyAsistencia/historyAsistaneciMedicos";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

export const ColumnsAsistenciaMedicos = () => {
  const { mutate, isPending } = useCreateAsistencia();
  // este estado es el que contorlara los dias
  // const [nuevaFecha, setNuevaFecha] = useState<string>("");
  // const date = registerDateInternational();

  // estre es prueba
  const [dateNow, setDateNow] = useState(dayjs().format("YYYY-MM-DD"));
  // console.log(dateNow);
  const hourNow = hourNowDate();

  // este es el que añadire nueva fecha
  // useEffect(() => {
  //   setNuevaFecha(date);
  // }, [date]);

  const marcarAsistencia = (data: CreateAsistencia) => mutate(data);
  const columnsData = (data: GetAllMedicos) => {
    const { asistencia, _id: idMedico } = data;

    const asistenciaNow = asistencia.find((dates) => dates.fecha === dateNow);

    return (
      <div className="flex flex-1 gap-2 justify-center items-center font-robotoSlab_600">
        <input
          type="date"
          disabled
          value={dateNow}
          onChange={(e) => setDateNow(e.target.value)}
          className="border rounded p-2"
        />
        <Button
          type="button"
          className={`flex-[0_1_15rem] h-[3rem] transition-all rounded shadow-md border hover:rounded-3xl ${
            asistenciaNow?.asistio === true && "bg-bg_three/80"
          }`}
          onClick={() =>
            marcarAsistencia({
              _id: asistenciaNow?._id,
              asistio: true,
              fecha: dateNow,
              idMedico,
              hora: hourNow,
            })
          }
        >
          {isPending ? <LoadingStatic /> : "Presente"}
        </Button>
        <Button
          type="button"
          onClick={() =>
            marcarAsistencia({
              _id: asistenciaNow?._id,
              asistio: false,
              fecha: dateNow,
              idMedico,
              hora: hourNow,
            })
          }
          className={`flex-[0_1_15rem] h-[3rem] transition-all rounded shadow-md border hover:rounded-3xl ${
            asistenciaNow?.asistio === false && "bg-bg_seven/70"
          }`}
        >
          {isPending ? <LoadingStatic /> : "Ausente"}
        </Button>
      </div>
    );
  };
  const imageBodyTemplate = (url: string) => (
    <Avatar
      icon={<FaUserDoctor className="text-default" />}
      src={url}
      alt={"médico"}
      className="w-6rem shadow-2 bg-bg_six/50 border-round"
    />
  );

  const columnsMedicos: ColumnProps[] = [
    {
      field: "name",
      header: "Médico",
      sortable: true,
      filter: true,
      body: (data: GetAllMedicos) => capitalizeNombre(data.name),
    },
    {
      field: "apellidos",
      header: "Apellido",
      sortable: true,
      filter: true,
      body: (data: GetAllMedicos) => capitalizeApellido(data.apellidos),
    },
    {
      field: "url_perfil",
      header: "Perfil",
      body: (data: GetAllMedicos) => imageBodyTemplate(data.url_perfil),
    },
    {
      field: "asistencia",
      header: "Marcar Asistencia",
      body: (data: GetAllMedicos) => columnsData(data),
    },
    {
      field: "historial",
      header: "Historial",
      body: (data: GetAllMedicos) => HistoryAsistaneciMedicos(data),
    },
  ];
  return {
    columnsMedicos,
  };
};
