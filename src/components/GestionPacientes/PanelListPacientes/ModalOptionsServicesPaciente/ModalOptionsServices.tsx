import { Button, ButtonIcon, Modal } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { AnimatePresence } from "framer-motion";
import { BiArrowBack, BiBookAlt } from "react-icons/bi";
import { PiNewspaperBold } from "react-icons/pi";

const ModalOptionsServicios = () => {
  const {
    openOptionsServicios,
    setOpenOptionsServicios,
    setOpenAddExistinServicio,
    setOpenAddNewServicios,
  } = storeGestionServicios();

  const openAddExistingServicio = () => {
    setOpenAddExistinServicio();
    setOpenOptionsServicios();
  };
  const openAddNewServicios = () => {
    setOpenAddNewServicios();
    setOpenOptionsServicios();
  };

  return (
    <>
      <AnimatePresence>
        {openOptionsServicios && (
          <Modal
            className="flex-[0_1_20rem] p-8 flex-col gap-8 relative flex items-center justify-center rounded-3xl border-border_three/50 bg-default border min-h-[15rem] shadow-lg"
            type="CENTER"
            animate="LEFT"
          >
            <ButtonIcon
              onClick={setOpenOptionsServicios}
              className="absolute flex rounded-md cursor-pointer items-center justify-center text-default -top-4 -right-3 h-[3em] w-[3rem] bg-bg_six"
            >
              <BiArrowBack className="text-3xl" />
            </ButtonIcon>
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-2 h-[4rem] rounded shadow-lg  bg-bg_secondary font-robotoSlab_600 hover:shadow-none transition  text-default"
              label="Servico Nuevo"
              onClick={openAddNewServicios}
            >
              <PiNewspaperBold className="text-2xl" />
            </Button>
            <Button
              onClick={openAddExistingServicio}
              type="button"
              className="w-full flex items-center justify-center gap-2 h-[4rem] rounded shadow-lg  bg-bg_nine font-robotoSlab_600 hover:shadow-none transition  text-text_primary"
              label="Servicio Existente"
            >
              <BiBookAlt className="text-2xl" />
            </Button>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalOptionsServicios;
