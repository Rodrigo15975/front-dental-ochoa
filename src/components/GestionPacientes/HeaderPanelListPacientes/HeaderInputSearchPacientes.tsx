import { InputText } from "primereact/inputtext";

type Props = {
  onClick: (value: string) => void;
};

const HeaderInputSearchPacientes = ({ onClick }: Props) => {
  return (
    <div className="flex items-end flex-[0_1_20rem]">
      <InputText
        tooltip="Busqueda de pacientes"
        type="search"
        placeholder="Busqueda de paciente"
        onChange={(e) => onClick(e.target.value)}
        className="shadow-md h-[2.5rem] w-full rounded-full font-robotoSlab font-robotoSlab_500 border-border_primary"
      />
    </div>
  );
};

export default HeaderInputSearchPacientes;
