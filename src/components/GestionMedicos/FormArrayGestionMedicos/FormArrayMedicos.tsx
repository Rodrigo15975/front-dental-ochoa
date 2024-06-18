import { Modal } from "@/components/Common";
import storeGestionMedicos from "@/store/storeGestionMedicos/storeGestionMedicos";
import { AnimatePresence } from "framer-motion";
import AppFormulariosMedicos from "./ModalFormulariosMedicos/AppFormulariosMedicos";
import { useEffect } from "react";

const FormArrayMedicos = () => {
  const { openFormGestionMedicos } = storeGestionMedicos();

  useEffect(() => {
    if (openFormGestionMedicos) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [openFormGestionMedicos]);

  return (
    <>
      <AnimatePresence>
        {openFormGestionMedicos && (
          <Modal
            className="flex-[0_1_80rem] border p-8 bg-white border-border_three/50 rounded-3xl min-h-[70vh]"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[75vh] p-4 overflow-y-auto">
              <AppFormulariosMedicos />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormArrayMedicos;
