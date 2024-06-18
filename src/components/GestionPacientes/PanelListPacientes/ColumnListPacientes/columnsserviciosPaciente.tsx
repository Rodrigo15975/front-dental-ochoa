import { ButtonIcon } from "@/components/Common";
import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { GetAllPacientes } from "@/services/pacientes/types/typesPaciente";
import { storeGestionServicios } from "@/store";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GoChecklist } from "react-icons/go";

const serviciosPaciente = (data: GetAllPacientes) => {
  const { _id, apellidos, name, mayorEdad } = data;
  const { setOpenAddNewServicios, setIdPaciente, setOpenAddExistinServicio } =
    storeGestionServicios();

  const openNewServicio = () => {
    setIdPaciente(_id, apellidos, name, mayorEdad);
    setOpenAddNewServicios();
  };

  const openExistingServicio = () => {
    setIdPaciente(_id, apellidos, name, mayorEdad);
    setOpenAddExistinServicio();
  };

  return (
    <div className="flex justify-center gap-2">
      <CommonTooltip
        title="Nuevo servicio"
        className="flex justify-center flex-[0_1_5rem]"
      >
        <ButtonIcon
          onClick={openNewServicio}
          className="w-full flex rounded-3xl cursor-pointer hover:shadow-none hover:rounded-md transition-all justify-center p-1 shadow-md bg-text_five/80"
        >
          <MdOutlineMedicalServices className="text-[1.7rem] text-default" />
        </ButtonIcon>
      </CommonTooltip>
      <CommonTooltip
        title="En tratamiento"
        className="flex justify-center flex-[0_1_5rem]  "
      >
        <ButtonIcon
          onClick={openExistingServicio}
          className="w-full rounded-3xl cursor-pointer flex hover:shadow-none hover:rounded-md transition-all justify-center p-1 items-center bg-bg_five/50"
        >
          <GoChecklist className="text-[1.7rem] text-default " />
        </ButtonIcon>
      </CommonTooltip>
    </div>
  );
};

export default serviciosPaciente;
