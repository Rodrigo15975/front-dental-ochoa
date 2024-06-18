import Panel from "@/components/Common/Panel/Panel";
import TitlePanelMedicos from "./TitlePanelMedicos";
import PanelMedicos from "./PanelMedicos";
import AppFormArrayMedicos from "../FormArrayGestionMedicos/AppFormArrayMedicos";
import AsignarServicios from "@/components/GestionServicios/asignarServicios/AsignarServicios";
import ListInactivosMedicos from "./ListInactivosMedicos/ListInactivosMedicos";

const AppPanelMedicos = () => {
  return (
    <>
      <Panel
        headerChildren={<TitlePanelMedicos />}
        panelChildren={<PanelMedicos />}
      />
      <AppFormArrayMedicos />
      <AsignarServicios />
      {/* LISTA INACTIVOS */}
      <ListInactivosMedicos />
    </>
  );
};

export default AppPanelMedicos;
