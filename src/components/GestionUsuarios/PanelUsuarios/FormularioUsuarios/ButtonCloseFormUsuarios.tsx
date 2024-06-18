import { Button } from "@/components/Common";
import storeGestionUsuarios from "@/store/storeGestionUsuarios/storeGestionUsuarios";
import { TiArrowBackOutline } from "react-icons/ti";

const ButtonCloseFormUsuarios = () => {
  const { setOpenFormGestionUsuarios } = storeGestionUsuarios();
  const closeFormularioUsuarios = () => setOpenFormGestionUsuarios();

  return (
    <>
      <Button
        onClick={closeFormularioUsuarios}
        type="button"
        className="flex items-center hover:border-black transition font-robotoSlab_600 justify-center gap-3 bg-bg_three/50 hover:bg-bg_three border-black/50 flex-[0_1_10rem] bg-bg border rounded-full h-[2.5rem]"
        label="Volver"
      >
        <TiArrowBackOutline />
      </Button>
    </>
  );
};

export default ButtonCloseFormUsuarios;
