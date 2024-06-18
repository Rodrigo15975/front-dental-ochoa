import { useNavigate } from "react-router-dom";
import { ButtonIcon, Typography } from "../Common";
import Alergias from "./alergia/Alergias";
import Etiquetas from "./etiqueta/Etiquetas";
import Notas from "./nota/Notas";
import { PathsProtected } from "@/router/enum/routerPaths";
import { BiArrowBack, BiBookBookmark } from "react-icons/bi";

const HeaderPacienteData = () => {
  const navigate = useNavigate();

  const backPanel = () =>
    navigate(PathsProtected.GESTIONES_PACIENTES, { replace: true });
  return (
    <>
      <div className="flex flex-col w-full gap-3  shadow-md border border-border_three/60 min-h-[12vh] p-4  rounded-md">
        <div className="flex justify-between text-2xl text-text_six">
          <Typography
            className="flex items-center gap-2 font-robotoSlab_500"
            label="Notaciones adicionales"
          >
            <BiBookBookmark />
          </Typography>
          <ButtonIcon
            onClick={backPanel}
            className=" hover:bg-bg_five/50 transition  flex-[0_1_10rem] bg-bg_five flex justify-center text-default rounded-md p-1 shadow cursor-pointer"
          >
            <BiArrowBack className="text-4xl hover:-translate-x-5 w-full transition" />
          </ButtonIcon>
        </div>
        <div className="flex gap-8">
          <Etiquetas />
          <Notas />
          <Alergias />
        </div>
      </div>
    </>
  );
};

export default HeaderPacienteData;
