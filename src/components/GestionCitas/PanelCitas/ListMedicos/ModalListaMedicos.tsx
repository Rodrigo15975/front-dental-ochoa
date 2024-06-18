import { ButtonIcon, Modal } from "@/components/Common";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";
import { AnimatePresence } from "framer-motion";
import ListMedicos from "./ListMedicos";
import { useGetAllMedicos } from "@/services/medicos/queries";
import { IoArrowBack } from "react-icons/io5";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useEffect } from "react";

const ModalListaMedicos = () => {
  const { data, isLoading } = useGetAllMedicos();
  const { openModalListMedico, setOpenModalListMedico } = storeGestionCitas();


  useEffect(() => {
    openModalListMedico
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");

    return () => {
      document.body.style.overflow = "";
    };
  }, [openModalListMedico]);
  
  return (
    <>
      <AnimatePresence>
        {openModalListMedico && (
          <Modal
            onClick={setOpenModalListMedico}
            className="flex-[0_1_80rem] relative rounded-2xl p-8 shadow-md border-border_three/15 bg-default min-h-[70vh] border"
            type="CENTER"
            animate="LEFT"
          >
            {isLoading ? (
              <LoadingStatic />
            ) : (
              <>
                <ButtonIcon
                  className="absolute -right-4 bg-bg_six p-4 hover:scale-105 rounded-full shadow-md -top-4"
                  onClick={setOpenModalListMedico}
                >
                  <IoArrowBack className="text-xl" />
                </ButtonIcon>
                <div className="max-h-[65vh] overflow-y-auto ">
                  <ListMedicos data={data ?? []} />
                </div>
              </>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalListaMedicos;
