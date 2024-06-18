import { Typography } from "@/components/Common";
import ContainerData from "@/components/Common/ContainerData/ContainerData";
import HistoryCitas from "./HistoryCitas";
import { BiDetail } from "react-icons/bi";

const HistorialDecitas = () => {
  return (
    <>
      <ContainerData>
        <div className="max-h-[80vh]  w-full flex flex-col overflow-y-auto">
          <Typography
            className="bg-bg_six flex gap-2 items-center w-full p-2 rounded-md  text-default text-xl"
            label="Historial de citas"
          >
            <BiDetail className="text-2xl" />
          </Typography>
          <HistoryCitas />
        </div>
      </ContainerData>
    </>
  );
};

export default HistorialDecitas;
