import { FaLongArrowAltLeft } from "react-icons/fa";
import Button from "../../Button/Button";
import Modal from "../../Modal/Modal";
import { ServiciosMedicos } from "../types/typesCardUsersMedicos";
import EditCardMedicoServices from "../Edit/EditCardMedicoServices";
import { AnimatePresence } from "framer-motion";

type Props = {
  servicios: ServiciosMedicos[];
  name: string;
  apellidos: string;
  id: string;
  openModal: () => void;
  open: boolean;
};

function ModalEdtiServicesMedico({
  apellidos,
  id,
  name,
  open,
  openModal,
  servicios,
}: Props) {
  return (
    <>
      <AnimatePresence>
        {open && (
          <Modal
            className="flex-[0_1_40rem] relative rounded-3xl p-8 flex flex-col justify-between min-h-[30vh] border bg-default"
            type="CENTER"
            animate="LEFT"
          >
            <Button
              type="button"
              btnDefault
              onClick={openModal}
              className=" bg-bg_five text-default border absolute -top-5 -right-5 flex items-center justify-center gap-2 hover:bg-bg_six transition w-[3rem] h-[3rem]"
            >
              <FaLongArrowAltLeft className="text-xl" />
            </Button>
            <EditCardMedicoServices
              onClick={openModal}
              id={id}
              name={name}
              apellidos={apellidos}
              servicios={servicios}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ModalEdtiServicesMedico;
