import { Button, ButtonIcon, Modal, Typography } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { useDeleteUsuario } from "@/services/usuarios/mutation";
import { capitalize } from "@/utils";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import { IoExit } from "react-icons/io5";

interface PropsDeleteCard {
  onClick: () => void;
  state: boolean;
  _id?: string;
  name?: string;
  dni?: string;
  apellidos?: string;
}

const DeleteCardUsersUsuarios: FC<PropsDeleteCard> = ({
  _id,
  onClick,
  state,
  dni,
  name,
  apellidos,
}) => {
  const nameCapitalize = capitalize(name ?? "");
  const apellidoCapitalize = capitalize(apellidos ?? "");
  const { mutate, isSuccess, isPending } = useDeleteUsuario();
  const handledSubmit = () => mutate(_id ?? "");

  useEffect(() => {
    if (isSuccess) onClick();
  }, [isSuccess, onClick]);

  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="flex flex-[0_1_45rem] border bg-white min-h-[10rem] rounded-md shadow-md border-border_three/30"
            type="CENTER"
            animate="LEFT"
            onClick={onClick}
          >
            <div className="w-full ">
              <CommonTooltip
                title="Salir"
                className="flex absolute -top-4 -right-4"
              >
                <ButtonIcon onClick={onClick}>
                  <IoExit className="w-[2rem] h-[2rem] text-white bg-bg_five/80 rounded-md shadow-xl" />
                </ButtonIcon>
              </CommonTooltip>
              <div className="flex flex-col items-center font-robotoSlab_600 gap-4 p-8 justify-evenly flex-[0_1_35rem]">
                <Typography
                  className="text-text_primary/70 text-center  text-xl bg-bg_three/50 w-full p-2 "
                  label={"Eliminando Usuario"}
                />
                <div className="flex gap-3">
                  <Typography
                    className="text-text_primary"
                    label={`DNI: ${dni}`}
                  />
                  <Typography
                    className="text-text_primary"
                    label={`Usuario: ${nameCapitalize} ${apellidoCapitalize}`}
                  />
                </div>

                {isPending ? (
                  <LoadingStatic />
                ) : (
                  <Button
                    type="button"
                    className="hover:bg-bg_eight/50 font-robotoSlab_500 h-[2.5rem] w-full bg-bg_eight"
                    btnDefault
                    onClick={handledSubmit}
                    label="Eliminar"
                  />
                )}
                <Button
                  onClick={onClick}
                  type="button"
                  className="hover:bg-bg_five/50 outline-1 font-robotoSlab_500 h-[2.5rem] bg-bg_five w-full"
                  btnDefault
                  label="Cancelar"
                />
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default DeleteCardUsersUsuarios;
