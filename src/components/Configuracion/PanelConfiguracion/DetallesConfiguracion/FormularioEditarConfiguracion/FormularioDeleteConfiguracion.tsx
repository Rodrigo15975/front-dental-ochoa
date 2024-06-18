import { Button, Modal } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useDeleteEmpresa, useGetEmpresa } from "@/services/configuracion";
import { storeConfiguracion } from "@/store";
import { AnimatePresence } from "framer-motion";
import { RiDeleteBin3Line } from "react-icons/ri";

function FormularioDeleteConfiguracion() {
  const { setOpenDeleteConfiguracion, openDeleteConfiguracion } =
    storeConfiguracion();
  const { data } = useGetEmpresa();
  const { mutate, isPending } = useDeleteEmpresa();

  const deleteInformacion = () => {
    mutate(data!);
    setOpenDeleteConfiguracion();
  };

  if (isPending) return <LoadingStatic />;

  return (
    <>
      <AnimatePresence>
        {openDeleteConfiguracion && (
          <Modal
            onClick={setOpenDeleteConfiguracion}
            className="flex bg-bg_default rounded-xl border-border_four/50 justify-center shadow-lg flex-[0_1_40rem] border min-h-[20vh]"
            type="CENTER"
            animate="LEFT"
          >
            <div className="flex items-center py-4 text-text_primary justify-center flex-col">
              <p className="text-xl">
                La información será borrada y será irreversible
              </p>
              <div className="flex gap-4 w-full mt-8 justify-evenly">
                <Button
                  onClick={deleteInformacion}
                  type="button"
                  btnStyled
                  className="flex-[0_1_12rem] font-robotoSlab_500 hover:bg-bg_three/30 bg-bg_three h-[2.5rem] border"
                  label="Borrar información"
                >
                  <RiDeleteBin3Line className="" />
                </Button>
                <Button
                  onClick={setOpenDeleteConfiguracion}
                  type="button"
                  btnStyled
                  className="flex-[0_1_12rem] border-border_four font-robotoSlab_500 h-[2.5rem] border"
                  label="Cancelar"
                />
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default FormularioDeleteConfiguracion;
