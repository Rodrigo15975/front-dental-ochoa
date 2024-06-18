import { Modal } from "@/components/Common";
import { storeHistoryApoderado } from "@/store/storeHistoryApoderado/storeHistoryApoderado";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import TableApoderado from "./tableApoderado/TableApoderado";

const HistorialApoderado = () => {
  const { setOpenHistoryApoderado, openHistoryApoderado } =
    storeHistoryApoderado();

  useEffect(() => {
    openHistoryApoderado
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openHistoryApoderado]);
  return (
    <>
      <AnimatePresence>
        {openHistoryApoderado && (
          <Modal
            className="flex-[0_1_100rem] border-border_primary p-8 container min-h-[80vh] bg-default shadow-md border rounded-3xl"
            type="CENTER"
            onClick={setOpenHistoryApoderado}
            animate="SCALE-CENTER"
          >
            <div className="max-h-[80vh] overflow-y-auto">
              <TableApoderado />
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default HistorialApoderado;
