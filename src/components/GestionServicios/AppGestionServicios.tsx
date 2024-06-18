import { MdMedicalServices } from "react-icons/md";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelServicios from "./PanelServicios/AppPanelServicios";

const AppGestionServicios = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<MdMedicalServices className="text-bg_six" />}
        title="Gestión de Servicios"
      />
      <AppPanelServicios />
    </section>
  );
};

export default AppGestionServicios;
