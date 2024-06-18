import { FC } from "react";

type PropsRoleTitleCardUserMedico = {
  role: string;
};
const RoleTitleCardUserMedico: FC<PropsRoleTitleCardUserMedico> = ({
  role,
}) => {
  return (
    <>
      <div className="h-full">
        <p className="bg-bg_five/5 shadow-sm border border-border_three/50 rounded-full p-2 text-text_six font-robotoSlab_400">
          {role}
        </p>
      </div>
    </>
  );
};

export default RoleTitleCardUserMedico;
