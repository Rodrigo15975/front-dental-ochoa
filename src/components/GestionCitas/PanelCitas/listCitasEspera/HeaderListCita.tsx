import { Button } from "@/components/Common";
import { IoSettingsOutline } from "react-icons/io5";

import CommonTooltip from "@/components/Common/Tooltip/Tooltip";
import { GiNotebook } from "react-icons/gi";
import storeGestionCitas from "@/store/storeGestionCitas/storeGestionCitas";
import { storeGestionMedicos } from "@/store";
import { FaCarBattery } from "react-icons/fa6";

import { CiViewList } from "react-icons/ci";
import { useGetAllCitas } from "@/services/citas/queries";
import { STATUSCITA } from "@/services/citas/types/typesCitas";

const HeaderListCitas = () => {
  const {
    setOpenConfiguration,
    setOpenModalListEspera,
    setOpenModalListMedico,
    setOpenModalListSala,
  } = storeGestionCitas();
  const { setOpenAsistenciaMedicos } = storeGestionMedicos();

  const { data } = useGetAllCitas();
  const appointInEspera =
    data?.filter(
      (appointments) => appointments.estado.estado === STATUSCITA.EN_ESPERA
    ) || [];

  const appointInSala =
    data?.filter(
      (appointments) => appointments.estado.estado === STATUSCITA.EN_SALA
    ) || [];

  return (
    <div className="flex w-full justify-between items-center bg-bg_six/5 p-4 rounded-lg shadow-md">
      <div className="flex gap-4">
        <CommonTooltip title="Lista de Médicos">
          <Button
            type="button"
            onClick={setOpenModalListMedico}
            className="flex items-center gap-3 hover:translate-y-1 p-2 rounded-sm shadow-md hover:shadow-none transition text-default border border-border_three/150 bg-bg_six/40"
            label="Lista de Médicos"
          >
            <GiNotebook className="text-3xl order-1" />
          </Button>
        </CommonTooltip>
        <CommonTooltip title="Lista de Asistencias">
          <Button
            onClick={setOpenAsistenciaMedicos}
            type="button"
            className="flex items-center gap-3  hover:translate-y-1 p-2 rounded-sm shadow-md font-robotoSlab_600 hover:shadow-none transition border border-border_three/150 bg-bg_three/40"
            label="Lista de Asistencia(Médicos)"
          >
            <GiNotebook className="text-3xl order-1" />
          </Button>
        </CommonTooltip>
        <CommonTooltip className="relative" title="Lista de espera">
          {appointInEspera?.length > 0 && (
            <div className="absolute text-default font-robotoSlab_600 flex justify-center -top-9 right-0 w-full rounded-lg p-1 bg-bg_six">
              <span>
                Pacientes en espera{" "}
                <span className="">{appointInEspera?.length}</span>{" "}
              </span>
            </div>
          )}
          <Button
            onClick={setOpenModalListEspera}
            type="button"
            className="flex items-center gap-3  hover:translate-y-1 p-2 rounded-sm shadow-md font-robotoSlab_600 hover:shadow-none transition border border-border_three/150 bg-bg_list_espera"
            label="Lista de espera"
          >
            <CiViewList className="text-3xl order-1" />
          </Button>
        </CommonTooltip>
        <CommonTooltip className="relative" title="Sala">
          {appointInSala?.length > 0 && (
            <div className="absolute text-default font-robotoSlab_600 flex justify-center -top-9 right-0 w-full rounded-lg p-1 bg-rose-600">
              <span>
                En sala <span className="">{appointInSala?.length}</span>
              </span>
            </div>
          )}
          <Button
            onClick={setOpenModalListSala}
            type="button"
            className="flex items-center gap-3  hover:translate-y-1 p-2 rounded-sm shadow-md font-robotoSlab_600 hover:shadow-none transition border border-border_three/150 bg-rose-600 text-default"
            label="Paciente en sala"
          >
            <FaCarBattery className="text-3xl order-1" />
          </Button>
        </CommonTooltip>
      </div>

      <CommonTooltip
        title="Configuraciones generales"
        className="bg-default hover:scale-105 transition rounded-full shadow-md"
      >
        <IoSettingsOutline
          onClick={setOpenConfiguration}
          className="cursor-pointer w-full h-full text-text_primary hover:rotate-90 transition p-2  bg-default rounded-full text-3xl"
        />
      </CommonTooltip>
    </div>
  );
};

export default HeaderListCitas;
