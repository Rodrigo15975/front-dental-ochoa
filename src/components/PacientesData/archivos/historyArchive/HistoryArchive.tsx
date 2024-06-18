import { Typography } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { Timeline } from "primereact/timeline";
import { CiCircleCheck } from "react-icons/ci";
import { RiFolderHistoryLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import CardHistory from "./CardHistory";

const HistoryArchive = () => {
  const customizedMarker = () => {
    return (
      <span className="flex bg-bg_secondary w-2rem h-2rem align-items-center rounded-full justify-content-center text-white border-circle z-1 shadow-1">
        <CiCircleCheck className="text-3xl" />
      </span>
    );
  };

  // const events: PropsDate[] = [
  //   {
  //     fecha: "18/10/2024",
  //     icon: "pi pi-shopping-cart",
  //     color: "#9C27B0",
  //     image: "game-controller.jpg",
  //   },
  //   {
  //     fecha: "15/10/2020",
  //     icon: "pi pi-cog",
  //     color: "#673AB7",
  //     image: "game-controller.jpg",
  //   },
  // ];

  // // intentar hacer reutilizable si no ,dejarlo y hacer todo ahora a mimir
  // const [filteredData, setFilteredData] = useState<PropsDate[]>([]);
  // const [date, setDate] = useState<Date | null>(new Date());

  // const filtrarPorFecha = (fecha: Date | null) => {
  //   const filtered = events.filter((item) =>
  //     dayjs(item.fecha, "DD/MM/YYYY").isSame(fecha, "day")
  //   );
  //   if (filtered.length > 0) {
  //     setFilteredData(filtered);
  //     toast.success("Datos encontrados", { toastId: "foundArchive" });
  //     return;
  //   }
  //   toast.warn("No hubo datos", { toastId: "foundArchive" });
  // };

  // const buscar = () => filtrarPorFecha(date);

  // const onchange = (e: ChangeEvent<HTMLInputElement>) =>
  //   setDate(dayjs(e.target.value).toDate());

  // const limpiar = () => setFilteredData(events);

  const { id } = useParams<ID>();
  const { data } = useGetFindOnePaciente(id ?? "");

  return (
    <>
      <div className="max-h-[80vh] p-8  border mt-8 shadow-md border-border_three/20 rounded-md overflow-y-auto">
        <div className="flex  justify-center bg-default shadow-md border-b mb-4 px-4 pb-4 w-full">
          <Typography
            className="text-2xl font-robotoSlab_600 flex justify-center items-center gap-2 text-text_secondary"
            label="Historial de Archivos"
          >
            <RiFolderHistoryLine />
          </Typography>
          {/* <div className="flex gap-2 items-center">
            <InputText
              tooltip="Busqueda por fecha"
              tooltipOptions={{
                position: "top",
              }}
              placeholder="Ejemplo 18/10/2024"
              onChange={onchange}
              type="date"
              className="shadow-md flex-[0_1_15rem] border border-border_three/50 outline-none rounded-lg"
            />

            <CommonTooltip title="Buscar">
              <ButtonIcon
                className="bg-bg_six h-[2rem] cursor-pointer  w-[2rem] rounded-full text-default flex items-center justify-center "
                onClick={buscar}
              >
                <BiSearch />
              </ButtonIcon>
            </CommonTooltip>
            <CommonTooltip title="Restablecer">
              <ButtonIcon
                onClick={limpiar}
                className="bg-bg_three/50  cursor-pointer h-[2rem] w-[2rem] rounded-full flex items-center justify-center gap-2"
              >
                <VscDebugRestart />
              </ButtonIcon>
            </CommonTooltip>
          </div> */}
        </div>

        <Timeline
          marker={customizedMarker}
          content={CardHistory}
          value={data?.archivos}
          align="alternate"
          className="bg-default shadow-sm font-robotoSlab"
        />
      </div>
    </>
  );
};

export default HistoryArchive;
