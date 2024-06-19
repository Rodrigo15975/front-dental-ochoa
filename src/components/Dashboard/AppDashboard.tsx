import { MdDashboardCustomize } from "react-icons/md";
import { Container } from "../Common";
import ContainerPanel from "../Common/Container/ContainerMain";
import DashboardHeader from "./HeaderDashboard";
import Captacion from "./estadisticaCaptacion/Captacion";
import PacienteDestacado from "./estadisticaDestacados/pacienteDestacado";
import EstadisticasNuevosPacienteMounth from "./estadisticasAmounth/EstadisticasNuevosPacienteMounth";
import TotalMedicosUsuarios from "./estadisticasTotalMedicosUsuarios/TotalMedicosUsuarios";
import ServicesDestacado from "./estadisticaDestacados/servicesDestacado";

const AppDashboard: React.FC = () => {
  return (
    <Container>
      <DashboardHeader
        icon={<MdDashboardCustomize className="text-bg_six " />}
        title="Dashboard"
      />

      <ContainerPanel className="p-8 flex flex-col gap-6 min-h-screen my-4">
        <EstadisticasNuevosPacienteMounth />

        <div className="w-full justify-between gap-6 flex">
          <Captacion />
        </div>
        <div className="flex gap-4 justify-between">
          <div className="w-full rounded-2xl border-border_six/50 hover:translate-y-1 transition shadow-md border bg-default min-h-[25vh] justify-between gap-6 flex">
            <ServicesDestacado />
          </div>
          <div className="w-full rounded-2xl border-border_six/50 hover:translate-y-1 transition shadow-md border bg-default min-h-[25vh] justify-between gap-6 flex">
            <PacienteDestacado />
          </div>
        </div>

        <TotalMedicosUsuarios />
      </ContainerPanel>
    </Container>
  );
};

export default AppDashboard;
