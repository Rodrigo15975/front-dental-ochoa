import { Button } from "@/components/Common";
import storeGestionUsuarios from "@/store/storeGestionUsuarios/storeGestionUsuarios";
import { GrAddCircle } from "react-icons/gr";

const ButtonOpenModalPanelUsuarios = () => {
  const { setOpenFormGestionUsuarios } = storeGestionUsuarios();

  const openModalFormUsuarios = () => setOpenFormGestionUsuarios();

  return (
    <>
      <Button
        type="button"
        className="w-full buttons-open-modal transition border border-black/50 hover:border-black h-[2.7rem] flex items-center gap-4 justify-center text-default bg-bg_primary/80 font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
        label="Nuevo Usuario"
        onClick={openModalFormUsuarios}
      >
        <GrAddCircle className="text-xl" />
      </Button>
    </>
  );
};

export default ButtonOpenModalPanelUsuarios;
