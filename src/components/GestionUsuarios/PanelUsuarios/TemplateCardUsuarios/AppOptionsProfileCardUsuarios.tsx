import { Options } from "@/components/Common";
import { FC } from "react";
import ButtonsOptionsCardUsuarios from "./ButtonsOptionsCardUsuarios";

type PropsOptionsCardUsuarios = {
  state: boolean;
  onClick: () => void;
  name: string;
  apellidos: string;
  id: string;
  role: string;
};

const AppOptionsProfileCardUsuarios: FC<PropsOptionsCardUsuarios> = ({
  state,
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
        <ButtonsOptionsCardUsuarios
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

export default AppOptionsProfileCardUsuarios;
