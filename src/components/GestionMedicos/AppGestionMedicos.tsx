import { FaUserDoctor } from "react-icons/fa6";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelMedicos from "./PanelMedicos/AppPanelMedicos";
const AppGestionMedicos = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<FaUserDoctor className="text-bg_six" />}
        title="Gestión de Médicos"
      />
      <AppPanelMedicos />
    </section>
  );
};

export default AppGestionMedicos;
