import AppSidebarPacientesData from "@/components/AppSidebarPacientesData/AppSidebarPacientesData";
import { ErrorNetWork } from "@/components/Common";
import LoadingStatic from "@/components/Common/Loading/LoadingStatic";
import HeaderPacienteData from "@/components/PacientesData/HeaderPacienteData";
import { useGetFindOnePaciente } from "@/services/pacientes/queries";
import { m } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { useParams } from "react-router-dom";

const LayoutSubRouter: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useParams();
  const { isLoading, isError } = useGetFindOnePaciente(id ?? "");

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full">
        <LoadingStatic />
      </div>
    );
  if (isError) return <ErrorNetWork />;

  return (
    <>
      <m.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex min-h-screen bg-bg_nine/5 justify-between p-6 flex-col w-full"
      >
        <HeaderPacienteData />
        <div className="flex mt-4 gap-4">
          <AppSidebarPacientesData />
          {children}
        </div>
      </m.article>
    </>
  );
};

export default LayoutSubRouter;
