import { Button, Modal, Typography } from "@/components/Common";
import { storeGestionMedicos } from "@/store";
import { AnimatePresence } from "framer-motion";
import TableAsistenciaMedicos from "./TableAsistenciaMedicos";
import { BiBookAlt } from "react-icons/bi";
import { MdArrowBack } from "react-icons/md";
import { useEffect } from "react";

const ModalListAsistenciaMedicos = () => {
  const { openAsistenciaMedicos, setOpenAsistenciaMedicos } =
    storeGestionMedicos();
 
  useEffect(() => {
    openAsistenciaMedicos
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openAsistenciaMedicos]);

  return (
    <>
      <AnimatePresence>
        {openAsistenciaMedicos && (
          <Modal
            className="flex-[0_1_80rem] border-border_four/50 shadow-md container p-8 bg-default border rounded-xl min-h-[80vh]"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[82vh] overflow-y-auto">
              <div className="w-full rounded-md items-center border shadow-md bg-bg_nine/50 p-4 flex justify-between">
                <Typography
                  className="text-2xl text-text_six flex items-center gap-2 font-robotoSlab_600"
                  label="Asistencia de Médicos"
                >
                  <BiBookAlt />
                </Typography>
                <Button
                  type="button"
                  btnDefault
                  className="flex-[0_1_10rem] bg-bg_six text-default flex items-center gap-2 justify-center font-robotoSlab_500 hover:bg-bg_six/50 h-[2.5rem]"
                  label="Volver"
                  onClick={setOpenAsistenciaMedicos}
                >
                  <MdArrowBack />
                </Button>
              </div>
              <TableAsistenciaMedicos />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalListAsistenciaMedicos;
