import { Button } from "@/components/Common";
import storeGestionServicios from "@/store/storeGestionServicios/storeGestionServicios";
import { GrAddCircle } from "react-icons/gr";

const ButtonServices = () => {
  const { setOpenFormGestionServicios, setOpenFormAsignarServicios } =
    storeGestionServicios();

  const openFormularioServicios = () => setOpenFormGestionServicios();

  return (
    <div className="flex flex-col w-full gap-4">
      <Button
        type="button"
        className="w-full transition border border-black/50 hover:border-black h-[2.5rem] flex items-center gap-4 justify-center text-text_primary buttons-asignar font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
        label="Asignar Servicio"
        onClick={setOpenFormAsignarServicios}
      >
        <GrAddCircle className="text-xl" />
      </Button>
      <Button
        type="button"
        className="w-full buttons-open-modal transition border border-black/50 hover:border-black h-[2.5rem] flex items-center gap-4 justify-center text-default bg-bg_primary/80 font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
        label="Nuevo Servicio"
        onClick={openFormularioServicios}
      >
        <GrAddCircle className="text-xl" />
      </Button>
    </div>
  );
};

export default ButtonServices;
