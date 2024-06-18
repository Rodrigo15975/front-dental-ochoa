import { AnimatePresence } from "framer-motion";

import { Modal } from "@/components/Common";
import storeGestionUsuarios from "@/store/storeGestionUsuarios/storeGestionUsuarios";
import Formulario from "./Formulario";

const FormularioUsuarios = () => {
  const { openFormGestionUsuarios } = storeGestionUsuarios();
  return (
    <>
      <AnimatePresence>
        {openFormGestionUsuarios && (
          <Modal
            className="flex-[0_1_90rem] p-10 rounded-2xl border-border_three/50 shadow-md min-h-[75vh] border bg-white"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[75vh] overflow-y-auto">
              <Formulario />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default FormularioUsuarios;
