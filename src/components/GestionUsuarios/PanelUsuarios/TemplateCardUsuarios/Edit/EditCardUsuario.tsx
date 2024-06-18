import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

import { ButtonIcon, Modal } from "@/components/Common";
import { useUpdateMedico } from "@/services/medicos/mutation";
import { DataCardUsuario } from "../types/typesTemplateCardUsuarios";
import FormEditCardUsuarios from "./FormEditCardUsuarios";

interface PropsEditCard {
  onClick: () => void;
  state: boolean;
  usuarios: DataCardUsuario;
}

const EditCardUsersMedico: FC<PropsEditCard> = ({
  onClick,
  state,
  usuarios,
}) => {
  const { isSuccess } = useUpdateMedico();

  useEffect(() => {
    if (isSuccess) return onClick();
  }, [isSuccess, onClick]);

  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="min-h-[90vh] relative flex-[0_1_70rem] bg-default border"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[90vh] p-8 overflow-y-auto">
              <FormEditCardUsuarios
                state={state}
                onClick={onClick}
                usuarios={usuarios}
              />
            </div>
            <ButtonIcon className="absolute -right-6 -top-8">
              <IoMdArrowRoundBack
                onClick={onClick}
                className="curso-poteiner bg-bg_six hover:bg-bg_six/50 text-4xl text-white rounded-full"
              />
            </ButtonIcon>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default EditCardUsersMedico;
