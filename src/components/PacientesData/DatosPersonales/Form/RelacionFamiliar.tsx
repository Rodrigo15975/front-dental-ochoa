import { Button, Typography } from "@/components/Common";
import { FaBookMedical } from "react-icons/fa6";
import HistorialApoderado from "../historialApoderado/HistorialApoderado";
import { storeHistoryApoderado } from "@/store/storeHistoryApoderado/storeHistoryApoderado";

const RelacionFamiliar = () => {
  const { setOpenHistoryApoderado } = storeHistoryApoderado();
  return (
    <>
      <div className="text-text_primary mt-8 p-2 items-center flex justify-between">
        <div className="px-6  items-center flex justify-between w-full">
          <Typography
            label="Relación Familiar"
            className="font-robotoSlab_500 flex gap-2 items-center text-xl text-text_primary "
          ></Typography>

          <Button
            type="button"
            onClick={setOpenHistoryApoderado}
            btnDefault
            className="bg-bg_nine flex items-center gap-2 justify-center font-robotoSlab_500  h-[3rem] flex-[0_1_15rem]"
          >
            <FaBookMedical />
            <Typography className="" label="Historial de apoderado" />
          </Button>
        </div>
      </div>
      <HistorialApoderado />
    </>
  );
};

export default RelacionFamiliar;
