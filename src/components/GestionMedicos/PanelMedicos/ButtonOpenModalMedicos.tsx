import { Button } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import storeGestionMedicos from "@/store/storeGestionMedicos/storeGestionMedicos";
import { GrAddCircle } from "react-icons/gr";

const ButtonOpenModalMedicos = () => {
  const { setOpenFormGestionMedicos } = storeGestionMedicos();
  const { setOpenFormAsignarServicios } = storeGestionServicios();
  return (
    <div className="flex flex-col gap-4 w-full">
      <Button
        type="button"
        className="w-full buttons-asignar transition border border-black/50 hover:border-black h-[2.5rem] flex items-center gap-4 justify-center text-text_primary bg-bg_primary/80 font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
        label="Asignar Servicio"
        onClick={setOpenFormAsignarServicios}
      >
        <GrAddCircle className="text-xl" />
      </Button>
      <Button
        type="button"
        className="w-full buttons-open-modal transition border border-black/50 hover:border-black h-[2.5rem] flex items-center gap-4 justify-center text-default bg-bg_primary/80 font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
        label="Nuevo Médico"
        onClick={setOpenFormGestionMedicos}
      >
        <GrAddCircle className="text-xl" />
      </Button>
    </div>
  );
};

export default ButtonOpenModalMedicos;
