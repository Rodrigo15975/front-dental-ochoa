import { FaUsersCog } from "react-icons/fa";
import DashboardHeader from "../Dashboard/HeaderDashboard";
import AppPanelListGestionPacientes from "./PanelListPacientes/AppPaneListGestionPacientes";
import AppAñadirServicio from "../GestionServicios/PanelServicios/AñadirServicio/AppAñadirServicio";

const AppGestionPacientes = () => {
  return (
    <section className="w-full">
      <DashboardHeader
        icon={<FaUsersCog className="text-bg_six" />}
        title="Gestión de Pacientes"
      />
      {/* Header Panel */}
      {/* Panel */}
      <AppPanelListGestionPacientes />
      {/* Añadir servicio */}
      <AppAñadirServicio />
    </section>
  );
};

export default AppGestionPacientes;
