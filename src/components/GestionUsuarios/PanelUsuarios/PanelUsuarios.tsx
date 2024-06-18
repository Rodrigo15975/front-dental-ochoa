import { useGetAllUsuarios } from "@/services/usuarios/queries";
import AppTemplateCardUsuarios from "./TemplateCardUsuarios/AppTemplateCardUsuarios";
import { useGetId } from "@/services/profile/queries";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { Typography } from "@/components/Common";
import { FaUserAlt } from "react-icons/fa";

const PanelUsuarios = () => {
  const { data = [], isLoading } = useGetAllUsuarios();
  const usuarioId = useGetId();

  const newData = data?.filter((medicos) => medicos._id !== usuarioId.data?.id);

  if (isLoading) return <LoadingStatic />;
  return (
    <>
      <div className="w-full bg-bg_nine/50 shadow p-2 font-robotoSlab_500 text-text_primary text-center">
        <Typography
          className="flex gap-2 items-center justify-center text-xl  my-4"
          label={`Usuarios ${data?.length}`}
        >
          <FaUserAlt />
        </Typography>
      </div>
      <AppTemplateCardUsuarios data={newData} />
    </>
  );
};

export default PanelUsuarios;
