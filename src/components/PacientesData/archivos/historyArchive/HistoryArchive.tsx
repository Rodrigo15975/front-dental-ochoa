import { Typography } from "@/components/Common";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { ID } from "@/services/pacientes/types/typesPaciente";
import { Timeline } from "primereact/timeline";
import { CiCircleCheck } from "react-icons/ci";
import { RiFolderHistoryLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import CardHistory from "./CardHistory";
import { useEffect, useState } from "react";

const HistoryArchive = () => {
  const customizedMarker = () => {
    return (
      <span className="flex bg-bg_secondary w-2rem h-2rem align-items-center rounded-full justify-content-center text-white border-circle z-1 shadow-1">
        <CiCircleCheck className="text-3xl" />
      </span>
    );
  };

  const { id } = useParams<ID>();
  const { data } = useGetFindOnePaciente(id ?? "");

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1400);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1400);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        </div>

        <Timeline
          marker={customizedMarker}
          content={CardHistory}
          value={data?.archivos}
          align={isLargeScreen ? "alternate" : "bottom"}
          className="bg-default shadow-sm font-robotoSlab"
        />
      </div>
    </>
  );
};

export default HistoryArchive;
