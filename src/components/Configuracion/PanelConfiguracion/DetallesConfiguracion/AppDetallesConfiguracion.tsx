import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import { useGetEmpresa } from "@/services/configuracion";
import { BiDetail, BiImageAdd } from "react-icons/bi";
import { RiEdit2Fill } from "react-icons/ri";
import DetallesConfiguracion from "./DetallesConfiguracion";
import AppFormularioConfiguracion from "./FormularioConfiguracion/AppFormularioConfiguracion";
import LogoConfiguracion from "./FormularioLogo/LogoConfiguracion";
import InformacionConfiguracion from "./InformacionConfiguracion";
import LogoDetallesConfiguracion from "./LogoDetallesConfiguracion";
import { ErrorNetWork } from "@/components/Common";

const AppDetallesConfiguracion = () => {
  const { data, isLoading, isError } = useGetEmpresa();

  if (isLoading) return <LoadingStatic />;
  // el ErroNetWork, dirige a la pagina de no conexion (PageNetWork)
  if (isError) return <ErrorNetWork />;
  return (
    <>
      <div className="p-8 max-h-[88vh] flex  overflow-y-auto mb-8 gap-6">
        <div className="w-full">
          {!data?.isRegisterConsultorio && (
            <div className="w-full flex flex-wrap justify-between gap-4 min-h-[65vh]">
              <div className="flex-[0_1_100%] shadow border border-border_primary/50 min-h-[70vh] rounded-md">
                <InformacionConfiguracion
                  iconTitle={<RiEdit2Fill />}
                  title="Rellenar información"
                />
                <AppFormularioConfiguracion />
              </div>
            </div>
          )}
          <div className="w-full flex flex-wrap mt-4 flex-[0_1_45rem] justify-end gap-4 min-h-[65vh]">
            <div className="flex-[0_1_100%] shadow border border-border_three/50 min-h-[70vh] rounded-md">
              <InformacionConfiguracion
                title="Detalles"
                iconTitle={<BiDetail />}
              />
              <DetallesConfiguracion />
            </div>
            <div className="flex-[0_1_100%] shadow border border-border_three/50 rounded-md">
              <LogoConfiguracion />
            </div>
            <div className="flex-[0_1_100%] shadow border border-border_three/50 min-h-[35vh] rounded-md">
              <InformacionConfiguracion
                iconTitle={<BiImageAdd />}
                title="Logo"
              />
              <LogoDetallesConfiguracion />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetallesConfiguracion;
