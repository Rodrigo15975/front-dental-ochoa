import { ButtonIcon } from "@/components/Common";
import { GetAllMedicos } from "@/services/medicos/types/typesMedicos";
import { useState } from "react";
import { BiBookReader } from "react-icons/bi";
import ModalHistoryMedicosAsistencia from "./ModalHistoryMedicosAsistencia";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";

const HistoryAsistaneciMedicos = (data: GetAllMedicos) => {
  const [openModalHistory, setOpenModalHistory] = useState<boolean>(false);

  const openModal = () => setOpenModalHistory(!openModalHistory);

  return (
    <>
      <CommonTooltip title="Historial" position="rightBottom">
        <ButtonIcon
          onClick={openModal}
          className="cursor-pointer flex justify-center items-center"
        >
          <BiBookReader className="text-3xl" />
        </ButtonIcon>
      </CommonTooltip>

      <ModalHistoryMedicosAsistencia
        data={data}
        onClick={openModal}
        state={openModalHistory}
      />
    </>
  );
};

export default HistoryAsistaneciMedicos;
