import { Modal } from "@/components/Common";
import { storeConfiguracion } from "@/store";
import { AnimatePresence } from "framer-motion";
import FormularioEditarConfiguracion from "./FormularioEditarConfiguracion";

const AppFormularioEditarConfiguracion = () => {
  const { setOpenFormEditConfiguracion, openFormEditConfiguracion } =
    storeConfiguracion();
  return (
    <>
      <AnimatePresence>
        {openFormEditConfiguracion && (
          <Modal
            onClick={setOpenFormEditConfiguracion}
            className="flex bg-white rounded-xl shadow-lg flex-[0_1_60rem] border min-h-[80vh]"
            type="CENTER"
            animate="LEFT"
          >
            <div className="items-center max-h-[88vh]  overflow-y-auto flex justify-center w-full">
              <FormularioEditarConfiguracion />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppFormularioEditarConfiguracion;
