import { ButtonIcon, Modal } from "@/components/Common";
import { AnimatePresence } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { DataCardUsuario } from "../types/typesTemplateCardUsuarios";
import FormEdit from "./FormEdit";

type Props = {
  usuarios: DataCardUsuario;
  state: boolean;
  onClick: () => void;
};

const FormEditCardUsuarios = ({ usuarios, onClick, state }: Props) => {
  return (
    <>
      <AnimatePresence>
        {state && (
          <Modal
            className="min-h-[85vh] relative flex-[0_1_60rem] p-4 bg-default border"
            type="CENTER"
            animate="LEFT"
          >
            <ButtonIcon className="absolute -right-4 -top-5">
              <IoMdArrowRoundBack
                onClick={onClick}
                className="curso-poteiner bg-bg_three hover:bg-bg_three/50 text-4xl text-text_primary rounded-full"
              />
            </ButtonIcon>
            <FormEdit onClick={onClick} usuarios={usuarios} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormEditCardUsuarios;
