import Panel from "@/components/Common/Panel/Panel";
import {
  AppFormularioServicios,
  HeaderTitleServices,
  PanelServicios,
} from "..";
import AsignarServicios from "../asignarServicios/AsignarServicios";

const AppPanelServicios = () => {
  return (
    <>
      <Panel
        headerChildren={<HeaderTitleServices />}
        panelChildren={<PanelServicios />}
      />
      {/* Formulario Array servicio */}
      <AppFormularioServicios />
      {/*  */}
      <AsignarServicios />
    </>
  );
};

export default AppPanelServicios;
