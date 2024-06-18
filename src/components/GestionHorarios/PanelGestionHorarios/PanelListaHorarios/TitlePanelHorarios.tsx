import { Title } from "@/components/Common";
import { Ri24HoursFill } from "react-icons/ri";

const PanelListTitleHorarios = () => {
  return (
    <div className="flex">
      <Title
        label="Lista de horarios"
        className="flex items-center gap-4 font-robotoSlab_500 title-common text-2xl"
        type="h1"
      >
        <Ri24HoursFill className="text-text_secondary" />
      </Title>
    </div>
  );
};

export default PanelListTitleHorarios;
