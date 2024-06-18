import { Modal } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { AnimatePresence } from "framer-motion";
import TitleExistenteServicesPacientes from "./TitleExistenteServicesPacientes";
import FormServicesExistente from "./FormServicesExistente/FormServicesExistente";

const AppModalAddServicioExistentePaciente = () => {
  const { openAddExistinServicio } = storeGestionServicios();

  return (
    <>
      <AnimatePresence>
        {openAddExistinServicio && (
          <Modal
            className="flex-[0_1_100rem] container p-8 rounded-3xl min-h-[90vh] bg-default border"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[84vh] overflow-y-auto">
              <TitleExistenteServicesPacientes />
              <FormServicesExistente />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppModalAddServicioExistentePaciente;
