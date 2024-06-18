import { Button, Modal } from "@/components/Common";
import ButtonIcon from "@/components/Common/Button/ButtonIcon";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteServicio } from "@/services/servicios";
import { FC, useEffect } from "react";
import { BiTrash } from "react-icons/bi";
import { IoExit } from "react-icons/io5";

type PropsDeleteInformation = {
  setOpenDelete: () => void;
  costo?: string;
  nombre?: string;
  _id?: string;
};

const DeleteInformationCardServices: FC<PropsDeleteInformation> = ({
  setOpenDelete,
  costo,
  _id,
  nombre,
}) => {
  const { mutate, isSuccess, isPending } = useDeleteServicio();
  const hanledSubmit = () => (mutate(_id ?? ""), setOpenDelete());

  useEffect(() => {
    if (isSuccess) return setOpenDelete();
  }, [setOpenDelete, isSuccess]);

  return (
    <>
      <Modal
        className="container items-end flex-wrap justify-center flex shadow-md shadow-blue-100 relative rounded-2xl border-border_three/10 flex-[0_1_30rem] p-12 bg-white border min-h-[20vh]"
        type="CENTER"
        animate="LEFT"
        onClick={setOpenDelete}
      >
        <>
          <p className="mb-8 text-xl text-text_secondary bg-bg_primary/30 py-2 w-full text-center shadow-sm">
            Eliminado Servicio
          </p>
          <div className="flex-[0_1_35rem] text-center flex justify-center gap-4">
            <p className="text-xl font-robotoSlab_600">Servicio: {nombre}</p>
            <p className="text-xl font-robotoSlab_600">Costo: {costo}</p>
          </div>
          <CommonTooltip
            title="Salir"
            className="flex absolute -top-4 -right-4"
          >
            <ButtonIcon onClick={setOpenDelete}>
              <IoExit className="w-[2.2rem] h-[2.2rem] text-white bg-bg_five/50 hover:bg-bg_five/80 rounded-md shadow-xl" />
            </ButtonIcon>
          </CommonTooltip>
          <div className="flex gap-4 mt-8 justify-evenly flex-[0_1_35rem]">
            {isPending ? (
              <LoadingStatic />
            ) : (
              <Button
                type="button"
                onClick={hanledSubmit}
                className="flex items-center gap-2  justify-center bg-bg_eight hover:scale-105 font-robotoSlab_600 h-[2.5rem] w-full "
                btnDefault
                label="Eliminar"
              >
                <BiTrash />
              </Button>
            )}
            <Button
              onClick={setOpenDelete}
              type="button"
              className="hover:bg-bg_five outline-1 text-default font-robotoSlab_500 h-[2.5rem] bg-bg_five/50 w-full"
              btnDefault
              label="Cancelar"
            />
          </div>
        </>
      </Modal>
    </>
  );
};

export default DeleteInformationCardServices;
