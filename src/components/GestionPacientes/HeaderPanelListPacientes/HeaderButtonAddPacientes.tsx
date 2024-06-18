import { Button } from "@/components/Common";
import storeGestionPaciente from "@/store/storeGestionPacientes/storeGestionPacientes";
import { IoMdPersonAdd } from "react-icons/io";

const HeaderButtonAddPacientes = () => {
  const { setOpenFormGestionPaciente } = storeGestionPaciente();
  return (
    <div className="flex flex-col items-end justify-end flex-[0_1_20rem] gap-4">
      <Button
        type="button"
        label="Nuevo Paciente"
        onClick={setOpenFormGestionPaciente}
        className="flex-[0_1_2.5rem] w-full buttons-open-modal text-default transition border border-black/50 hover:border-black h-[2.7rem] flex items-center gap-4 justify-center font-robotoSlab_800 rounded-full shadow-md shadow-black hover:shadow-sm"
      >
        <IoMdPersonAdd className="text-xl" />
      </Button>
    </div>
  );
};

export default HeaderButtonAddPacientes;
