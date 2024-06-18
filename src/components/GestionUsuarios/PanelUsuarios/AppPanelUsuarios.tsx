import Panel from "@/components/Common/Panel/Panel";
import PanelTitleUsuarios from "./PanelTitleUsuarios";
import PanelUsuarios from "./PanelUsuarios";
import AppFormularioUsuarios from "./FormularioUsuarios/AppFormularioUsuarios";

const AppPanelUsuarios = () => {
  return (
    <>
      <Panel
        headerChildren={<PanelTitleUsuarios />}
        panelChildren={<PanelUsuarios />}
      />
      {/* Modal formulario */}
      <AppFormularioUsuarios />
    </>
  );
};

export default AppPanelUsuarios;
