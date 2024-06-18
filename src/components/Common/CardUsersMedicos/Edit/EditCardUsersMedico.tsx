import { useUpdateMedico } from "@/services/medicos/mutation";
import { AnimatePresence } from "framer-motion";
import { FC, useEffect } from "react";
import { ButtonIcon, Modal, Users } from "../..";
import FormEditCardUserMedico from "./FormEditCardUserMedico";
import { IoMdArrowRoundBack } from "react-icons/io";

interface PropsEditCard {
  onClick: () => void;
  state: boolean;
  medicos: Users;
}

const EditCardUsersMedico: FC<PropsEditCard> = ({
  onClick,
  state,
  medicos,
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
            className="min-h-[90vh] relative flex-[0_1_60rem] bg-default border"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[90vh] p-8 overflow-y-auto">
              <FormEditCardUserMedico onClick={onClick} medicos={medicos} />
            </div>
            <ButtonIcon className="absolute -right-6 -top-6">
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
