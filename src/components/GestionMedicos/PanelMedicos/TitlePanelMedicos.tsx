import ButtonOpenModalMedicos from "./ButtonOpenModalMedicos";
import InputSearchMedicos from "./InputSearchMedicos";

const TitlePanelMedicos = () => {
  return (
    <div className="flex justify-between items-end w-full">
      <div className="flex-[0_1_35rem]">
        <InputSearchMedicos />
      </div>

      <div className="flex-[0_1_20rem] flex items-end">
        <ButtonOpenModalMedicos />
      </div>
    </div>
  );
};

export default TitlePanelMedicos;
