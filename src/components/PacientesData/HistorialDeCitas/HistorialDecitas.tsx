import { Typography } from "@/components/Common";
import ContainerData from "@/components/Common/ContainerData/ContainerData";
import { FcViewDetails } from "react-icons/fc";
import HistoryCitas from "./HistoryCitas";

const HistorialDecitas = () => {
  return (
    <>
      <ContainerData>
        <div className="max-h-[80vh]  w-full flex flex-col overflow-y-auto">
          <Typography
            className="p-4 flex items-center gap-2 bg-bg_three/50 mb-4 text-xl text-text_primary/80 rounded-md font-robotoSlab_600"
            label="Historial de citas"
          >
            <FcViewDetails />
          </Typography>
          <HistoryCitas />
        </div>
      </ContainerData>
    </>
  );
};

export default HistorialDecitas;
