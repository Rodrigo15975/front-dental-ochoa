import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { FC } from "react";
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";

type PropsButtonActionsServices = {
  openEdit: () => void;
  openDelete: () => void;
};

const TemplateButtonsActionsServices: FC<PropsButtonActionsServices> = ({
  openDelete,
  openEdit,
}) => {
  return (
    <>
      <CommonTooltip
        bgColor="#41a084"
        title="Editar información"
        className="flex items-center justify-center h-full w-full"
      >
        <ButtonIcon
          onClick={openEdit}
          className="border hover:shadow-md transition cursor-pointer flex items-center justify-center flex-[0_1_4.1rem] h-[2rem] rounded-full bg-bg_three/80"
        >
          <MdModeEditOutline className="text-text_primary/80 text-2xl w-full" />
        </ButtonIcon>
      </CommonTooltip>
      <CommonTooltip
        bgColor="#f15430"
        title="Eliminar Información"
        className="flex items-center justify-center h-full w-full"
      >
        <ButtonIcon
          onClick={openDelete}
          className="border hover:shadow-md transition cursor-pointer flex items-center justify-center flex-[0_1_4.1rem] h-[2rem] rounded-full bg-bg_seven"
        >
          <MdDeleteForever className="text-text_primary/80 text-2xl w-full" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default TemplateButtonsActionsServices;
