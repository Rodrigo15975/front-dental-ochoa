import { Modal } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { AnimatePresence } from "framer-motion";
import TitleNewServicesPacientes from "./TitleNewServicesPacientes";
import FormNewServicesPaciente from "./FormNewServicesPaciente/FormNewServicesPaciente";

const AppModalAddNewServicesPacientes = () => {
  const { openAddNewServicios } = storeGestionServicios();
  return (
    <>
      <AnimatePresence>
        {openAddNewServicios && (
          <Modal
            className="flex-[0_1_100rem] border-border_three/50 container rounded-3xl p-8  shadow-lg min-h-[90vh] bg-default border"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <TitleNewServicesPacientes />
              <FormNewServicesPaciente />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppModalAddNewServicesPacientes;
