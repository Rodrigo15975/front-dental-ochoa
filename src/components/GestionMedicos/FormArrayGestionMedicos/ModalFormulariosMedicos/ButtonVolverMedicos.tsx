import { Button } from "@/components/Common";
import storeGestionMedicos from "@/store/storeGestionMedicos/storeGestionMedicos";
import { TbArrowBackUpDouble } from "react-icons/tb";

const ButtonVolverFormularioMedicos = () => {
  const { setOpenFormGestionMedicos } = storeGestionMedicos();
  return (
    <>
      <Button
        onClick={setOpenFormGestionMedicos}
        type="button"
        btnDefault
        className="flex justify-center items-center gap-3 bg-bg_three border-black/50 font-robotoSlab_800 border flex-[0_1_10rem] h-[2.5rem]"
        label="Volver"
      >
        <TbArrowBackUpDouble className="text-2xl" />
      </Button>
    </>
  );
};

export default ButtonVolverFormularioMedicos;
