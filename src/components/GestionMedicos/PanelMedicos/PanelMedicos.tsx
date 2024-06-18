import { Typography } from "@/components/Common";
import { AppCardUsersMedicos } from "@/components/Common/CardUsersMedicos";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import {
  useGetAllMedicos,
  useGetMedicosActivos,
} from "@/services/medicos/queries";
import { FaUserDoctor } from "react-icons/fa6";

const PanelMedicos = () => {
  const { isLoading } = useGetAllMedicos();
  const medicosActivos = useGetMedicosActivos();

  if (isLoading) return <LoadingStatic />;

  return (
    <>
      <>
        <div className="w-full bg-bg_nine/50 p-2 shadow font-robotoSlab_500 text-text_secondary text-center">
          <Typography
            className="flex gap-2 items-center justify-center text-xl  my-4"
            label={`Médicos ${medicosActivos?.length}`}
          >
            <FaUserDoctor />
          </Typography>
        </div>
        <AppCardUsersMedicos data={medicosActivos ?? []} />
      </>
    </>
  );
};

export default PanelMedicos;
