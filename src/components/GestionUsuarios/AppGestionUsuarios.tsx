import { MdOutlineAdminPanelSettings } from "react-icons/md";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelUsuarios from "./PanelUsuarios/AppPanelUsuarios";

const AppGestionUsuarios = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<MdOutlineAdminPanelSettings className="text-bg_six" />}
        title="Gestión de usuarios"
      />
      <AppPanelUsuarios />
    </section>
  );
};

export default AppGestionUsuarios;
