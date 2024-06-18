import { Title } from "@/components/Common";
import { MdOutlineVerifiedUser } from "react-icons/md";
import ButtonCloseFormUsuarios from "./ButtonCloseFormUsuarios";

const TitleFormularioUsuarios = () => {
  return (
    <div className="flex justify-between w-full">
      <Title
        label="Nuevo Usuario"
        type="h1"
        className="flex gap-3 items-center text-3xl font-robotoSlab_600 title-common"
      >
        <MdOutlineVerifiedUser className="text-text_secondary" />
      </Title>
      <div className="flex-[0_1_21rem] flex justify-end gap-2">
        <ButtonCloseFormUsuarios />
      </div>
    </div>
  );
};

export default TitleFormularioUsuarios;
