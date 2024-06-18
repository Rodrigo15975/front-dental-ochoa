import { ButtonIcon, Typography } from "@/components/Common";
import { storeGestionServicios } from "@/store";
import { capitalize } from "@/utils";
import { BiArrowBack } from "react-icons/bi";
import { CiMedicalCross } from "react-icons/ci";
import { RiFileUserFill } from "react-icons/ri";

const TitleExistenteServicesPacientes = () => {
  const { setOpenAddExistinServicio, name, apellidos } =
    storeGestionServicios();
  const upperName = capitalize(name ?? "");
  const upperApellidos = capitalize(apellidos ?? "");
  return (
    <>
      <div className="border-b pb-2 bg-bg_six/5 rounded p-2 flex items-center justify-between border-border_three/10">
        <Typography
          className="text-2xl text-text_six flex items-center gap-2 font-robotoSlab_600"
          label="Tratamiento"
        >
          <CiMedicalCross />
        </Typography>
        <div className="flex gap-8 items-center">
          <Typography
            className="text-xl flex items-center gap-2 text-text_primary font-robotoSlab_500"
            label={`Paciente:  ${upperName} ${upperApellidos}`}
          >
            <RiFileUserFill />
          </Typography>
          <ButtonIcon
            onClick={setOpenAddExistinServicio}
            className="cursor-pointer bg-default h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-md shadow"
          >
            <BiArrowBack className="text-3xl" />
          </ButtonIcon>
        </div>
      </div>
    </>
  );
};

export default TitleExistenteServicesPacientes;
