import { Modal } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { AnimatePresence } from "framer-motion";
import FormAsignarServicios from "./FormAsignarServicios";
import { useEffect } from "react";

const AsignarServicios = () => {
  const { openFormAsignarServicios } = storeGestionServicios();

  useEffect(() => {
    if (openFormAsignarServicios) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openFormAsignarServicios]);

  return (
    <>
      <AnimatePresence>
        {openFormAsignarServicios && (
          <Modal
            className="flex-[0_1_50rem] bg-default min-h-[40vh] shadow-md rounded-lg border-border_three/50 border"
            type="CENTER"
            animate="RIGHT"
          >
            <FormAsignarServicios />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AsignarServicios;
