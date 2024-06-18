import { Ri24HoursFill } from "react-icons/ri";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelGestionHorarios from "./PanelGestionHorarios/AppPanelGestionHorarios";

const AppGestionHorarios = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<Ri24HoursFill className="text-text_secondary" />}
        title="Gestión de Horarios"
      />
      <AppPanelGestionHorarios />
    </section>
  );
};

export default AppGestionHorarios;
