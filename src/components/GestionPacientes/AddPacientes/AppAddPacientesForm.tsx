import { Modal } from "@/components/Common";
import storeGestionPaciente from "@/store/storeGestionPacientes/storeGestionPacientes";
import { AnimatePresence } from "framer-motion";
import TitleAddPacientesForm from "./TitleAddPacientesForm";
import TabsPacientesForm from "./TabsPacientesForm";

const AppAddPacientesForm = () => {
  const { openFormGestionPaciente } = storeGestionPaciente();
  return (
    <>
      <AnimatePresence>
        {openFormGestionPaciente && (
          <Modal
            className="container border border-border_three/20 flex rounded-2xl pb-[3rem] flex-wrap items-center p-4 justify-center flex-[0_1_80.25rem] min-h-[80vh] bg-white"
            type="CENTER"
            animate="LEFT"
          >
            <div className="max-h-[70vh] p-4 overflow-y-auto w-full">
              <TitleAddPacientesForm />
              <div className="p-4 flex flex-[0_1_75rem] min-h-[40vh]   rounded-lg border shadow">
                <TabsPacientesForm />
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppAddPacientesForm;
