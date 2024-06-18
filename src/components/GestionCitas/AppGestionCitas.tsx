import { MdDashboardCustomize } from "react-icons/md";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelCitas from "./PanelCitas/AppPanelCitas";

const AppGestionCitas = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<MdDashboardCustomize className="text-bg_six" />}
        title="Gestión de Citas"
      />
      <AppPanelCitas />
    </section>
  );
};

export default AppGestionCitas;
