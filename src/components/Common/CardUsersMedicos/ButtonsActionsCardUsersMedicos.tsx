import { MdAutoDelete, MdOutlineEdit } from "react-icons/md";
import ButtonIcon from "../Button/ButtonIcon";
import CommonTooltip from "../Tooltip/Tooltip";
import { FC } from "react";
import { useGetId } from "@/services/profile/queries";

interface PropsButonAcitions {
  onClickEdit: () => void;
  onClickDelete: () => void;
  _id?: string;
}

const ButtonsActionsCardUsersMedicos: FC<PropsButonAcitions> = ({
  onClickDelete,
  onClickEdit,
  _id,
}) => {
  const { data } = useGetId();

  return (
    <>
      <CommonTooltip
        className="hover:shadow-none transition flex  flex-[0_1_6rem] cursor-pointer rounded-full shadow-md bg-bg_nine"
        title="Editar información"
      >
        <ButtonIcon
          onClick={onClickEdit}
          className="flex w-full items-center justify-center h-[2rem]"
        >
          <MdOutlineEdit className="text-xl text-text_primary/50" />
        </ButtonIcon>
      </CommonTooltip>
      <CommonTooltip
        className="hover:shadow-none transition flex  flex-[0_1_6rem] cursor-pointer rounded-full shadow-md bg-bg_seven/60"
        title=""
        // title={`${
        //   _id === data?.id
        //     ? "No puede eliminarse uno mismo"
        //     : "Modo inactivo"
        // }`}
      >
        <ButtonIcon
          onClick={_id === data?.id ? () => {} : onClickDelete}
          className="flex w-full items-center justify-center h-[2rem]"
        >
          <MdAutoDelete className="text-xl text-text_primary/50" />
        </ButtonIcon>
      </CommonTooltip>
    </>
  );
};

export default ButtonsActionsCardUsersMedicos;
