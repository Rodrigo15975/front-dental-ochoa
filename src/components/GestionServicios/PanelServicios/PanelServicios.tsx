import { useGetServicios } from "@/services/servicios";
import AppCardServices from "./CardServices/AppCardServices";
import { MdMedicalServices } from "react-icons/md";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";

const PanelServicios = () => {
  const { data, isLoading } = useGetServicios();

  if (isLoading) return <LoadingStatic />;

  return (
    <>
      <p className="px-5 flex text-xl items-center justify-center gap-2 font-robotoSlab_600 text-text_primary bg-bg_three/20 p-4 border-b border-t rounded-lg shadow-sm  my-4">
        Total de Servicios
        <span className="font-robotoSlab_800 flex gap-1 items-center">
          {data?.length}
        </span>
        <MdMedicalServices  />
      </p>
      <AppCardServices />
    </>
  );
};

export default PanelServicios;
