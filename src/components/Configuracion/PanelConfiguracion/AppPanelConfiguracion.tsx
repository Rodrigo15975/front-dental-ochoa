import { Container } from "@/components/Common";
import HeaderDashboard from "@/components/Dashboard/HeaderDashboard";
import { GrConfigure } from "react-icons/gr";
import DetallesConfiguracion from "./DetallesConfiguracion/AppDetallesConfiguracion";

const AppPanelConfiguracion = () => {
  return (
    <>
      <Container>
        <HeaderDashboard
          icon={<GrConfigure className="text-text_secondary" />}
          title="Configuración"
        />
        <DetallesConfiguracion />
      </Container>
    </>
  );
};

export default AppPanelConfiguracion;
