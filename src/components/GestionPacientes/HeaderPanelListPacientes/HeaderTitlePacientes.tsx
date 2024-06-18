import { Title } from "@/components/Common";
import { LuBookMinus } from "react-icons/lu";

const HeaderTitlePacientes = () => {
  return (
    <div className="flex flex-wrap items-end">
      <Title
        label="Lista de Pacientes"
        type="h1"
        className="text-3xl flex  title-common gap-2 items-center font-robotoSlab_700"
      >
        <LuBookMinus className="text-text_eight" />
      </Title>
    </div>
  );
};

export default HeaderTitlePacientes;
