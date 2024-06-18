import { Modal } from "@/components/Common";
import storeGestionServicios from "@/store/storeGestionServicios/storeGestionServicios";
import { AnimatePresence } from "framer-motion";
import AppArrayOfFormularios from "./ArrayOfFormularios/AppArrayOfFormularios";

const Formularios = () => {
  const { openFormGestionServicios } = storeGestionServicios();
  return (
    <>
      <AnimatePresence>
        {openFormGestionServicios && (
          <Modal
            animate="LEFT"
            type="CENTER"
            className="container flex-[0_1_60rem] min-h-[80vh] bg-white rounded-2xl shadow-md border-border_three/50  p-4 border"
          >
            {/* Max h, para envitar que crezca akmas y el y auto para que aparezca el scroll */}
            <div className="max-h-[70vh] p-8 overflow-y-auto">
              <AppArrayOfFormularios />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Formularios;
