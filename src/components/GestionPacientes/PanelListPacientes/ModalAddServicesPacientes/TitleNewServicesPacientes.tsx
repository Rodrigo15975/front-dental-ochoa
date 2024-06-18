import { ButtonIcon, Typography } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { capitalize } from "@/utils";
import { BiArrowBack } from "react-icons/bi";
import { FaAddressCard } from "react-icons/fa6";

const TitleNewServicesPacientes = () => {
  const { setOpenAddNewServicios, apellidos, name } = storeGestionServicios();
  const upperApellidos = capitalize(apellidos ?? "");
  const upperName = capitalize(name ?? "");

  return (
    <>
      <div className="border-b pb-2 bg-bg_six/5 rounded p-2 flex items-center justify-between border-border_three/10">
        <Typography
          className="text-2xl flex items-center gap-2 text-text_six font-robotoSlab_600"
          label="Añade servicios al paciente"
        >
          <FaAddressCard />
        </Typography>
        <div className="flex gap-8 items-center">
          <Typography
            className="text-xl text-text_primary font-robotoSlab_500"
            label={`Paciente: ${upperName} ${upperApellidos} `}
          />
          <ButtonIcon
            onClick={setOpenAddNewServicios}
            className="cursor-pointer bg-default h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-md shadow"
          >
            <BiArrowBack className="text-3xl" />
          </ButtonIcon>
        </div>
      </div>
    </>
  );
};

export default TitleNewServicesPacientes;
