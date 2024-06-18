import { Typography } from "@/components/Common";
import { GrFormAdd } from "react-icons/gr";

const HeaderFormHistorialClinica = () => {
  return (
    <>
      <Typography
        className="bg-default p-4 flex items-center font-robotoSlab_500 text-text_primary gap-2 rounded-md shadow text-xl"
        label="Nuevo Historial Clínico"
      >
        <GrFormAdd />
      </Typography>
    </>
  );
};

export default HeaderFormHistorialClinica;
