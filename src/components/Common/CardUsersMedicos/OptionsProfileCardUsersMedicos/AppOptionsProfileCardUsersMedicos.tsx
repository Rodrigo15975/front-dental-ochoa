import { FC } from "react";
import { Options, ServiciosMedicos } from "../..";
import ButtonsOptionsProfileCardUsersMedicos from "./ButtonsOptionsProfileCardUsersMedicos";

type PropsOptionsCardUsersMedicos = {
  state: boolean;
  onClick: () => void;
  name: string;
  apellidos: string;
  id: string;
  role: string;
  servicios: ServiciosMedicos[];
};

const AppOptionsProfileCardUsersMedicos: FC<PropsOptionsCardUsersMedicos> = ({
  state,
  servicios,
  apellidos,
  id,
  role,
  name,
  onClick,
}) => {
  return (
    <>
      <Options
        className="flex-[0_1_20rem] min-h-[50vh] shadow-md bg-options-card-users-medico "
        setState={onClick}
        state={state}
        typeMode="BOTTOM-RIGHT"
      >
        <ButtonsOptionsProfileCardUsersMedicos
          servicios={servicios}
          id={id}
          role={role}
          name={name}
          apellidos={apellidos}
          openModalOptions={onClick}
        />
      </Options>
    </>
  );
};

export default AppOptionsProfileCardUsersMedicos;
