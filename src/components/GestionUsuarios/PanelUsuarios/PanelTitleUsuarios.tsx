import ButtonOpenModalPanelUsuarios from "./ButtonOpenModalPanelUsuarios";
import InputSearchUsuarios from "./InputSearchUsuarios";

const PanelTitleUsuarios = () => {
  return (
    <>
      <div className="flex justify-between w-full">
        <div className="flex-[0_1_20rem]">
          <InputSearchUsuarios />
        </div>
        <div className="flex-[0_1_20rem] flex items-end">
          <ButtonOpenModalPanelUsuarios />
        </div>
      </div>
    </>
  );
};

export default PanelTitleUsuarios;
